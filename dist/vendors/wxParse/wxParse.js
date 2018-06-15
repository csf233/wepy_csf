'use strict';

var _showdown = require('./showdown.js');

var _showdown2 = _interopRequireDefault(_showdown);

var _html2json = require('./html2json.js');

var _html2json2 = _interopRequireDefault(_html2json);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * author: Di (微信小程序开发工程师)
                                                                                                                                                                                                                   * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
                                                                                                                                                                                                                   *               垂直微信小程序开发交流社区
                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                   * github地址: https://github.com/icindy/wxParse
                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                   * for: 微信小程序富文本解析
                                                                                                                                                                                                                   * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
                                                                                                                                                                                                                   */

/**
 * utils函数引入
 **/


/**
 * 配置及公有属性
 **/
var realWindowWidth = 0;
var realWindowHeight = 0;
wx.getSystemInfo({
  success: function success(res) {
    realWindowWidth = res.windowWidth;
    realWindowHeight = res.windowHeight;
  }
});
/**
 * 主函数入口区
 **/
function wxParse() {
  var bindName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'wxParseData';
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'html';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '<div class="color:red;">数据不能为空</div>';
  var target = arguments[3];
  var imagePadding = arguments[4];

  var that = target;
  var transData = {}; //存放转化后的数据
  if (type == 'html') {
    transData = _html2json2.default.html2json(data, bindName);
    console.log(JSON.stringify(transData, ' ', ' '));
  } else if (type == 'md' || type == 'markdown') {
    var converter = new _showdown2.default.Converter();
    var html = converter.makeHtml(data);
    transData = _html2json2.default.html2json(html, bindName);
    console.log(JSON.stringify(transData, ' ', ' '));
  }
  transData.view = {};
  transData.view.imagePadding = 0;
  if (typeof imagePadding != 'undefined') {
    transData.view.imagePadding = imagePadding;
  }
  var bindData = {};
  bindData[bindName] = transData;
  that.setData(bindData);
  that.wxParseImgLoad = wxParseImgLoad;
  that.wxParseImgTap = wxParseImgTap;
}
// 图片点击事件
function wxParseImgTap(e) {
  var that = this;
  var nowImgUrl = e.target.dataset.src;
  var tagFrom = e.target.dataset.from;
  if (typeof tagFrom != 'undefined' && tagFrom.length > 0) {
    wx.previewImage({
      current: nowImgUrl, // 当前显示图片的http链接
      urls: that.data[tagFrom].imageUrls // 需要预览的图片http链接列表
    });
  }
}

/**
 * 图片视觉宽高计算函数区 
 **/
function wxParseImgLoad(e) {
  var that = this;
  var tagFrom = e.target.dataset.from;
  var idx = e.target.dataset.idx;
  if (typeof tagFrom != 'undefined' && tagFrom.length > 0) {
    calMoreImageInfo(e, idx, that, tagFrom);
  }
}
// 假循环获取计算图片视觉最佳宽高
function calMoreImageInfo(e, idx, that, bindName) {
  var _that$setData;

  var temData = that.data[bindName];
  if (!temData || temData.images.length == 0) {
    return;
  }
  var temImages = temData.images;
  //因为无法获取view宽度 需要自定义padding进行计算，稍后处理
  var recal = wxAutoImageCal(e.detail.width, e.detail.height, that, bindName);
  // temImages[idx].width = recal.imageWidth;
  // temImages[idx].height = recal.imageheight; 
  // temData.images = temImages;
  // var bindData = {};
  // bindData[bindName] = temData;
  // that.setData(bindData);
  var index = temImages[idx].index;
  var key = '' + bindName;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = index.split('.')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      key += '.nodes[' + i + ']';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var keyW = key + '.width';
  var keyH = key + '.height';
  that.setData((_that$setData = {}, _defineProperty(_that$setData, keyW, recal.imageWidth), _defineProperty(_that$setData, keyH, recal.imageheight), _that$setData));
}

// 计算视觉优先的图片宽高
function wxAutoImageCal(originalWidth, originalHeight, that, bindName) {
  //获取图片的原始长宽
  var windowWidth = 0,
      windowHeight = 0;
  var autoWidth = 0,
      autoHeight = 0;
  var results = {};
  var padding = that.data[bindName].view.imagePadding;
  windowWidth = realWindowWidth - 2 * padding;
  windowHeight = realWindowHeight;
  //判断按照那种方式进行缩放
  // console.log("windowWidth" + windowWidth);
  if (originalWidth > windowWidth) {
    //在图片width大于手机屏幕width时候
    autoWidth = windowWidth;
    // console.log("autoWidth" + autoWidth);
    autoHeight = autoWidth * originalHeight / originalWidth;
    // console.log("autoHeight" + autoHeight);
    results.imageWidth = autoWidth;
    results.imageheight = autoHeight;
  } else {
    //否则展示原来的数据
    results.imageWidth = originalWidth;
    results.imageheight = originalHeight;
  }
  return results;
}

function wxParseTemArray(temArrayName, bindNameReg, total, that) {
  var array = [];
  var temData = that.data;
  var obj = null;
  for (var i = 0; i < total; i++) {
    var simArr = temData[bindNameReg + i].nodes;
    array.push(simArr);
  }

  temArrayName = temArrayName || 'wxParseTemArray';
  obj = JSON.parse('{"' + temArrayName + '":""}');
  obj[temArrayName] = array;
  that.setData(obj);
}

/**
 * 配置emojis
 * 
 */

function emojisInit() {
  var reg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var baseSrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/wxParse/emojis/";
  var emojis = arguments[2];

  _html2json2.default.emojisInit(reg, baseSrc, emojis);
}

module.exports = {
  wxParse: wxParse,
  wxParseTemArray: wxParseTemArray,
  emojisInit: emojisInit
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UGFyc2UuanMiXSwibmFtZXMiOlsicmVhbFdpbmRvd1dpZHRoIiwicmVhbFdpbmRvd0hlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsInd4UGFyc2UiLCJiaW5kTmFtZSIsInR5cGUiLCJkYXRhIiwidGFyZ2V0IiwiaW1hZ2VQYWRkaW5nIiwidGhhdCIsInRyYW5zRGF0YSIsIkh0bWxUb0pzb24iLCJodG1sMmpzb24iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnZlcnRlciIsInNob3dkb3duIiwiQ29udmVydGVyIiwiaHRtbCIsIm1ha2VIdG1sIiwidmlldyIsImJpbmREYXRhIiwic2V0RGF0YSIsInd4UGFyc2VJbWdMb2FkIiwid3hQYXJzZUltZ1RhcCIsImUiLCJub3dJbWdVcmwiLCJkYXRhc2V0Iiwic3JjIiwidGFnRnJvbSIsImZyb20iLCJsZW5ndGgiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsImltYWdlVXJscyIsImlkeCIsImNhbE1vcmVJbWFnZUluZm8iLCJ0ZW1EYXRhIiwiaW1hZ2VzIiwidGVtSW1hZ2VzIiwicmVjYWwiLCJ3eEF1dG9JbWFnZUNhbCIsImRldGFpbCIsIndpZHRoIiwiaGVpZ2h0IiwiaW5kZXgiLCJrZXkiLCJzcGxpdCIsImkiLCJrZXlXIiwia2V5SCIsImltYWdlV2lkdGgiLCJpbWFnZWhlaWdodCIsIm9yaWdpbmFsV2lkdGgiLCJvcmlnaW5hbEhlaWdodCIsImF1dG9XaWR0aCIsImF1dG9IZWlnaHQiLCJyZXN1bHRzIiwicGFkZGluZyIsInd4UGFyc2VUZW1BcnJheSIsInRlbUFycmF5TmFtZSIsImJpbmROYW1lUmVnIiwidG90YWwiLCJhcnJheSIsIm9iaiIsInNpbUFyciIsIm5vZGVzIiwicHVzaCIsInBhcnNlIiwiZW1vamlzSW5pdCIsInJlZyIsImJhc2VTcmMiLCJlbW9qaXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQWNBOzs7O0FBQ0E7Ozs7OztrTkFmQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7QUFLQTs7O0FBR0EsSUFBSUEsa0JBQWtCLENBQXRCO0FBQ0EsSUFBSUMsbUJBQW1CLENBQXZCO0FBQ0FDLEdBQUdDLGFBQUgsQ0FBaUI7QUFDZkMsV0FBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCTCxzQkFBa0JLLElBQUlDLFdBQXRCO0FBQ0FMLHVCQUFtQkksSUFBSUUsWUFBdkI7QUFDRDtBQUpjLENBQWpCO0FBTUE7OztBQUdBLFNBQVNDLE9BQVQsR0FBMEg7QUFBQSxNQUF6R0MsUUFBeUcsdUVBQTlGLGFBQThGO0FBQUEsTUFBL0VDLElBQStFLHVFQUExRSxNQUEwRTtBQUFBLE1BQWxFQyxJQUFrRSx1RUFBN0Qsc0NBQTZEO0FBQUEsTUFBckJDLE1BQXFCO0FBQUEsTUFBZEMsWUFBYzs7QUFDeEgsTUFBSUMsT0FBT0YsTUFBWDtBQUNBLE1BQUlHLFlBQVksRUFBaEIsQ0FGd0gsQ0FFckc7QUFDbkIsTUFBSUwsUUFBUSxNQUFaLEVBQW9CO0FBQ2xCSyxnQkFBWUMsb0JBQVdDLFNBQVgsQ0FBcUJOLElBQXJCLEVBQTJCRixRQUEzQixDQUFaO0FBQ0FTLFlBQVFDLEdBQVIsQ0FBWUMsS0FBS0MsU0FBTCxDQUFlTixTQUFmLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLENBQVo7QUFDRCxHQUhELE1BR08sSUFBSUwsUUFBUSxJQUFSLElBQWdCQSxRQUFRLFVBQTVCLEVBQXdDO0FBQzdDLFFBQUlZLFlBQVksSUFBSUMsbUJBQVNDLFNBQWIsRUFBaEI7QUFDQSxRQUFJQyxPQUFPSCxVQUFVSSxRQUFWLENBQW1CZixJQUFuQixDQUFYO0FBQ0FJLGdCQUFZQyxvQkFBV0MsU0FBWCxDQUFxQlEsSUFBckIsRUFBMkJoQixRQUEzQixDQUFaO0FBQ0FTLFlBQVFDLEdBQVIsQ0FBWUMsS0FBS0MsU0FBTCxDQUFlTixTQUFmLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLENBQVo7QUFDRDtBQUNEQSxZQUFVWSxJQUFWLEdBQWlCLEVBQWpCO0FBQ0FaLFlBQVVZLElBQVYsQ0FBZWQsWUFBZixHQUE4QixDQUE5QjtBQUNBLE1BQUcsT0FBT0EsWUFBUCxJQUF3QixXQUEzQixFQUF1QztBQUNyQ0UsY0FBVVksSUFBVixDQUFlZCxZQUFmLEdBQThCQSxZQUE5QjtBQUNEO0FBQ0QsTUFBSWUsV0FBVyxFQUFmO0FBQ0FBLFdBQVNuQixRQUFULElBQXFCTSxTQUFyQjtBQUNBRCxPQUFLZSxPQUFMLENBQWFELFFBQWI7QUFDQWQsT0FBS2dCLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0FoQixPQUFLaUIsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDtBQUNEO0FBQ0EsU0FBU0EsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7QUFDeEIsTUFBSWxCLE9BQU8sSUFBWDtBQUNBLE1BQUltQixZQUFZRCxFQUFFcEIsTUFBRixDQUFTc0IsT0FBVCxDQUFpQkMsR0FBakM7QUFDQSxNQUFJQyxVQUFVSixFQUFFcEIsTUFBRixDQUFTc0IsT0FBVCxDQUFpQkcsSUFBL0I7QUFDQSxNQUFJLE9BQVFELE9BQVIsSUFBb0IsV0FBcEIsSUFBbUNBLFFBQVFFLE1BQVIsR0FBaUIsQ0FBeEQsRUFBMkQ7QUFDekRwQyxPQUFHcUMsWUFBSCxDQUFnQjtBQUNkQyxlQUFTUCxTQURLLEVBQ007QUFDcEJRLFlBQU0zQixLQUFLSCxJQUFMLENBQVV5QixPQUFWLEVBQW1CTSxTQUZYLENBRXFCO0FBRnJCLEtBQWhCO0FBSUQ7QUFDRjs7QUFFRDs7O0FBR0EsU0FBU1osY0FBVCxDQUF3QkUsQ0FBeEIsRUFBMkI7QUFDekIsTUFBSWxCLE9BQU8sSUFBWDtBQUNBLE1BQUlzQixVQUFVSixFQUFFcEIsTUFBRixDQUFTc0IsT0FBVCxDQUFpQkcsSUFBL0I7QUFDQSxNQUFJTSxNQUFNWCxFQUFFcEIsTUFBRixDQUFTc0IsT0FBVCxDQUFpQlMsR0FBM0I7QUFDQSxNQUFJLE9BQVFQLE9BQVIsSUFBb0IsV0FBcEIsSUFBbUNBLFFBQVFFLE1BQVIsR0FBaUIsQ0FBeEQsRUFBMkQ7QUFDekRNLHFCQUFpQlosQ0FBakIsRUFBb0JXLEdBQXBCLEVBQXlCN0IsSUFBekIsRUFBK0JzQixPQUEvQjtBQUNEO0FBQ0Y7QUFDRDtBQUNBLFNBQVNRLGdCQUFULENBQTBCWixDQUExQixFQUE2QlcsR0FBN0IsRUFBa0M3QixJQUFsQyxFQUF3Q0wsUUFBeEMsRUFBa0Q7QUFBQTs7QUFDaEQsTUFBSW9DLFVBQVUvQixLQUFLSCxJQUFMLENBQVVGLFFBQVYsQ0FBZDtBQUNBLE1BQUksQ0FBQ29DLE9BQUQsSUFBWUEsUUFBUUMsTUFBUixDQUFlUixNQUFmLElBQXlCLENBQXpDLEVBQTRDO0FBQzFDO0FBQ0Q7QUFDRCxNQUFJUyxZQUFZRixRQUFRQyxNQUF4QjtBQUNBO0FBQ0EsTUFBSUUsUUFBUUMsZUFBZWpCLEVBQUVrQixNQUFGLENBQVNDLEtBQXhCLEVBQStCbkIsRUFBRWtCLE1BQUYsQ0FBU0UsTUFBeEMsRUFBK0N0QyxJQUEvQyxFQUFvREwsUUFBcEQsQ0FBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUk0QyxRQUFRTixVQUFVSixHQUFWLEVBQWVVLEtBQTNCO0FBQ0EsTUFBSUMsV0FBUzdDLFFBQWI7QUFmZ0Q7QUFBQTtBQUFBOztBQUFBO0FBZ0JoRCx5QkFBYzRDLE1BQU1FLEtBQU4sQ0FBWSxHQUFaLENBQWQ7QUFBQSxVQUFTQyxDQUFUO0FBQWdDRix5QkFBZUUsQ0FBZjtBQUFoQztBQWhCZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQmhELE1BQUlDLE9BQU9ILE1BQU0sUUFBakI7QUFDQSxNQUFJSSxPQUFPSixNQUFNLFNBQWpCO0FBQ0F4QyxPQUFLZSxPQUFMLHFEQUNHNEIsSUFESCxFQUNVVCxNQUFNVyxVQURoQixrQ0FFR0QsSUFGSCxFQUVVVixNQUFNWSxXQUZoQjtBQUlEOztBQUVEO0FBQ0EsU0FBU1gsY0FBVCxDQUF3QlksYUFBeEIsRUFBdUNDLGNBQXZDLEVBQXNEaEQsSUFBdEQsRUFBMkRMLFFBQTNELEVBQXFFO0FBQ25FO0FBQ0EsTUFBSUgsY0FBYyxDQUFsQjtBQUFBLE1BQXFCQyxlQUFlLENBQXBDO0FBQ0EsTUFBSXdELFlBQVksQ0FBaEI7QUFBQSxNQUFtQkMsYUFBYSxDQUFoQztBQUNBLE1BQUlDLFVBQVUsRUFBZDtBQUNBLE1BQUlDLFVBQVVwRCxLQUFLSCxJQUFMLENBQVVGLFFBQVYsRUFBb0JrQixJQUFwQixDQUF5QmQsWUFBdkM7QUFDQVAsZ0JBQWNOLGtCQUFnQixJQUFFa0UsT0FBaEM7QUFDQTNELGlCQUFlTixnQkFBZjtBQUNBO0FBQ0E7QUFDQSxNQUFJNEQsZ0JBQWdCdkQsV0FBcEIsRUFBaUM7QUFBQztBQUNoQ3lELGdCQUFZekQsV0FBWjtBQUNBO0FBQ0EwRCxpQkFBY0QsWUFBWUQsY0FBYixHQUErQkQsYUFBNUM7QUFDQTtBQUNBSSxZQUFRTixVQUFSLEdBQXFCSSxTQUFyQjtBQUNBRSxZQUFRTCxXQUFSLEdBQXNCSSxVQUF0QjtBQUNELEdBUEQsTUFPTztBQUFDO0FBQ05DLFlBQVFOLFVBQVIsR0FBcUJFLGFBQXJCO0FBQ0FJLFlBQVFMLFdBQVIsR0FBc0JFLGNBQXRCO0FBQ0Q7QUFDRCxTQUFPRyxPQUFQO0FBQ0Q7O0FBRUQsU0FBU0UsZUFBVCxDQUF5QkMsWUFBekIsRUFBc0NDLFdBQXRDLEVBQWtEQyxLQUFsRCxFQUF3RHhELElBQXhELEVBQTZEO0FBQzNELE1BQUl5RCxRQUFRLEVBQVo7QUFDQSxNQUFJMUIsVUFBVS9CLEtBQUtILElBQW5CO0FBQ0EsTUFBSTZELE1BQU0sSUFBVjtBQUNBLE9BQUksSUFBSWhCLElBQUksQ0FBWixFQUFlQSxJQUFJYyxLQUFuQixFQUEwQmQsR0FBMUIsRUFBOEI7QUFDNUIsUUFBSWlCLFNBQVM1QixRQUFRd0IsY0FBWWIsQ0FBcEIsRUFBdUJrQixLQUFwQztBQUNBSCxVQUFNSSxJQUFOLENBQVdGLE1BQVg7QUFDRDs7QUFFREwsaUJBQWVBLGdCQUFnQixpQkFBL0I7QUFDQUksUUFBTXBELEtBQUt3RCxLQUFMLENBQVcsT0FBTVIsWUFBTixHQUFvQixPQUEvQixDQUFOO0FBQ0FJLE1BQUlKLFlBQUosSUFBb0JHLEtBQXBCO0FBQ0F6RCxPQUFLZSxPQUFMLENBQWEyQyxHQUFiO0FBQ0Q7O0FBRUQ7Ozs7O0FBS0EsU0FBU0ssVUFBVCxHQUE2RDtBQUFBLE1BQXpDQyxHQUF5Qyx1RUFBckMsRUFBcUM7QUFBQSxNQUFsQ0MsT0FBa0MsdUVBQTFCLGtCQUEwQjtBQUFBLE1BQVBDLE1BQU87O0FBQzFEaEUsc0JBQVc2RCxVQUFYLENBQXNCQyxHQUF0QixFQUEwQkMsT0FBMUIsRUFBa0NDLE1BQWxDO0FBQ0Y7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZjFFLFdBQVNBLE9BRE07QUFFZjJELG1CQUFnQkEsZUFGRDtBQUdmVSxjQUFXQTtBQUhJLENBQWpCIiwiZmlsZSI6Ind4UGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogYXV0aG9yOiBEaSAo5b6u5L+h5bCP56iL5bqP5byA5Y+R5bel56iL5biIKVxyXG4gKiBvcmdhbml6YXRpb246IFdlQXBwRGV2KOW+ruS/oeWwj+eoi+W6j+W8gOWPkeiuuuWdmykoaHR0cDovL3dlYXBwZGV2LmNvbSlcclxuICogICAgICAgICAgICAgICDlnoLnm7Tlvq7kv6HlsI/nqIvluo/lvIDlj5HkuqTmtYHnpL7ljLpcclxuICogXHJcbiAqIGdpdGh1YuWcsOWdgDogaHR0cHM6Ly9naXRodWIuY29tL2ljaW5keS93eFBhcnNlXHJcbiAqIFxyXG4gKiBmb3I6IOW+ruS/oeWwj+eoi+W6j+WvjOaWh+acrOino+aekFxyXG4gKiBkZXRhaWwgOiBodHRwOi8vd2VhcHBkZXYuY29tL3Qvd3hwYXJzZS1hbHBoYTAtMS1odG1sLW1hcmtkb3duLzE4NFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiB1dGlsc+WHveaVsOW8leWFpVxyXG4gKiovXHJcbmltcG9ydCBzaG93ZG93biBmcm9tICcuL3Nob3dkb3duLmpzJztcclxuaW1wb3J0IEh0bWxUb0pzb24gZnJvbSAnLi9odG1sMmpzb24uanMnO1xyXG4vKipcclxuICog6YWN572u5Y+K5YWs5pyJ5bGe5oCnXHJcbiAqKi9cclxudmFyIHJlYWxXaW5kb3dXaWR0aCA9IDA7XHJcbnZhciByZWFsV2luZG93SGVpZ2h0ID0gMDtcclxud3guZ2V0U3lzdGVtSW5mbyh7XHJcbiAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgcmVhbFdpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoXHJcbiAgICByZWFsV2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxyXG4gIH1cclxufSlcclxuLyoqXHJcbiAqIOS4u+WHveaVsOWFpeWPo+WMulxyXG4gKiovXHJcbmZ1bmN0aW9uIHd4UGFyc2UoYmluZE5hbWUgPSAnd3hQYXJzZURhdGEnLCB0eXBlPSdodG1sJywgZGF0YT0nPGRpdiBjbGFzcz1cImNvbG9yOnJlZDtcIj7mlbDmja7kuI3og73kuLrnqbo8L2Rpdj4nLCB0YXJnZXQsaW1hZ2VQYWRkaW5nKSB7XHJcbiAgdmFyIHRoYXQgPSB0YXJnZXQ7XHJcbiAgdmFyIHRyYW5zRGF0YSA9IHt9Oy8v5a2Y5pS+6L2s5YyW5ZCO55qE5pWw5o2uXHJcbiAgaWYgKHR5cGUgPT0gJ2h0bWwnKSB7XHJcbiAgICB0cmFuc0RhdGEgPSBIdG1sVG9Kc29uLmh0bWwyanNvbihkYXRhLCBiaW5kTmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0cmFuc0RhdGEsICcgJywgJyAnKSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09ICdtZCcgfHwgdHlwZSA9PSAnbWFya2Rvd24nKSB7XHJcbiAgICB2YXIgY29udmVydGVyID0gbmV3IHNob3dkb3duLkNvbnZlcnRlcigpO1xyXG4gICAgdmFyIGh0bWwgPSBjb252ZXJ0ZXIubWFrZUh0bWwoZGF0YSk7XHJcbiAgICB0cmFuc0RhdGEgPSBIdG1sVG9Kc29uLmh0bWwyanNvbihodG1sLCBiaW5kTmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0cmFuc0RhdGEsICcgJywgJyAnKSk7XHJcbiAgfVxyXG4gIHRyYW5zRGF0YS52aWV3ID0ge307XHJcbiAgdHJhbnNEYXRhLnZpZXcuaW1hZ2VQYWRkaW5nID0gMDtcclxuICBpZih0eXBlb2YoaW1hZ2VQYWRkaW5nKSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICB0cmFuc0RhdGEudmlldy5pbWFnZVBhZGRpbmcgPSBpbWFnZVBhZGRpbmdcclxuICB9XHJcbiAgdmFyIGJpbmREYXRhID0ge307XHJcbiAgYmluZERhdGFbYmluZE5hbWVdID0gdHJhbnNEYXRhO1xyXG4gIHRoYXQuc2V0RGF0YShiaW5kRGF0YSlcclxuICB0aGF0Lnd4UGFyc2VJbWdMb2FkID0gd3hQYXJzZUltZ0xvYWQ7XHJcbiAgdGhhdC53eFBhcnNlSW1nVGFwID0gd3hQYXJzZUltZ1RhcDtcclxufVxyXG4vLyDlm77niYfngrnlh7vkuovku7ZcclxuZnVuY3Rpb24gd3hQYXJzZUltZ1RhcChlKSB7XHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gIHZhciBub3dJbWdVcmwgPSBlLnRhcmdldC5kYXRhc2V0LnNyYztcclxuICB2YXIgdGFnRnJvbSA9IGUudGFyZ2V0LmRhdGFzZXQuZnJvbTtcclxuICBpZiAodHlwZW9mICh0YWdGcm9tKSAhPSAndW5kZWZpbmVkJyAmJiB0YWdGcm9tLmxlbmd0aCA+IDApIHtcclxuICAgIHd4LnByZXZpZXdJbWFnZSh7XHJcbiAgICAgIGN1cnJlbnQ6IG5vd0ltZ1VybCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxyXG4gICAgICB1cmxzOiB0aGF0LmRhdGFbdGFnRnJvbV0uaW1hZ2VVcmxzIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog5Zu+54mH6KeG6KeJ5a696auY6K6h566X5Ye95pWw5Yy6IFxyXG4gKiovXHJcbmZ1bmN0aW9uIHd4UGFyc2VJbWdMb2FkKGUpIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgdmFyIHRhZ0Zyb20gPSBlLnRhcmdldC5kYXRhc2V0LmZyb207XHJcbiAgdmFyIGlkeCA9IGUudGFyZ2V0LmRhdGFzZXQuaWR4O1xyXG4gIGlmICh0eXBlb2YgKHRhZ0Zyb20pICE9ICd1bmRlZmluZWQnICYmIHRhZ0Zyb20ubGVuZ3RoID4gMCkge1xyXG4gICAgY2FsTW9yZUltYWdlSW5mbyhlLCBpZHgsIHRoYXQsIHRhZ0Zyb20pXHJcbiAgfSBcclxufVxyXG4vLyDlgYflvqrnjq/ojrflj5borqHnrpflm77niYfop4bop4nmnIDkvbPlrr3pq5hcclxuZnVuY3Rpb24gY2FsTW9yZUltYWdlSW5mbyhlLCBpZHgsIHRoYXQsIGJpbmROYW1lKSB7XHJcbiAgdmFyIHRlbURhdGEgPSB0aGF0LmRhdGFbYmluZE5hbWVdO1xyXG4gIGlmICghdGVtRGF0YSB8fCB0ZW1EYXRhLmltYWdlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB2YXIgdGVtSW1hZ2VzID0gdGVtRGF0YS5pbWFnZXM7XHJcbiAgLy/lm6DkuLrml6Dms5Xojrflj5Z2aWV35a695bqmIOmcgOimgeiHquWumuS5iXBhZGRpbmfov5vooYzorqHnrpfvvIznqI3lkI7lpITnkIZcclxuICB2YXIgcmVjYWwgPSB3eEF1dG9JbWFnZUNhbChlLmRldGFpbC53aWR0aCwgZS5kZXRhaWwuaGVpZ2h0LHRoYXQsYmluZE5hbWUpOyBcclxuICAvLyB0ZW1JbWFnZXNbaWR4XS53aWR0aCA9IHJlY2FsLmltYWdlV2lkdGg7XHJcbiAgLy8gdGVtSW1hZ2VzW2lkeF0uaGVpZ2h0ID0gcmVjYWwuaW1hZ2VoZWlnaHQ7IFxyXG4gIC8vIHRlbURhdGEuaW1hZ2VzID0gdGVtSW1hZ2VzO1xyXG4gIC8vIHZhciBiaW5kRGF0YSA9IHt9O1xyXG4gIC8vIGJpbmREYXRhW2JpbmROYW1lXSA9IHRlbURhdGE7XHJcbiAgLy8gdGhhdC5zZXREYXRhKGJpbmREYXRhKTtcclxuICB2YXIgaW5kZXggPSB0ZW1JbWFnZXNbaWR4XS5pbmRleFxyXG4gIHZhciBrZXkgPSBgJHtiaW5kTmFtZX1gXHJcbiAgZm9yICh2YXIgaSBvZiBpbmRleC5zcGxpdCgnLicpKSBrZXkrPWAubm9kZXNbJHtpfV1gXHJcbiAgdmFyIGtleVcgPSBrZXkgKyAnLndpZHRoJ1xyXG4gIHZhciBrZXlIID0ga2V5ICsgJy5oZWlnaHQnXHJcbiAgdGhhdC5zZXREYXRhKHtcclxuICAgIFtrZXlXXTogcmVjYWwuaW1hZ2VXaWR0aCxcclxuICAgIFtrZXlIXTogcmVjYWwuaW1hZ2VoZWlnaHQsXHJcbiAgfSlcclxufVxyXG5cclxuLy8g6K6h566X6KeG6KeJ5LyY5YWI55qE5Zu+54mH5a696auYXHJcbmZ1bmN0aW9uIHd4QXV0b0ltYWdlQ2FsKG9yaWdpbmFsV2lkdGgsIG9yaWdpbmFsSGVpZ2h0LHRoYXQsYmluZE5hbWUpIHtcclxuICAvL+iOt+WPluWbvueJh+eahOWOn+Wni+mVv+WuvVxyXG4gIHZhciB3aW5kb3dXaWR0aCA9IDAsIHdpbmRvd0hlaWdodCA9IDA7XHJcbiAgdmFyIGF1dG9XaWR0aCA9IDAsIGF1dG9IZWlnaHQgPSAwO1xyXG4gIHZhciByZXN1bHRzID0ge307XHJcbiAgdmFyIHBhZGRpbmcgPSB0aGF0LmRhdGFbYmluZE5hbWVdLnZpZXcuaW1hZ2VQYWRkaW5nO1xyXG4gIHdpbmRvd1dpZHRoID0gcmVhbFdpbmRvd1dpZHRoLTIqcGFkZGluZztcclxuICB3aW5kb3dIZWlnaHQgPSByZWFsV2luZG93SGVpZ2h0O1xyXG4gIC8v5Yik5pat5oyJ54Wn6YKj56eN5pa55byP6L+b6KGM57yp5pS+XHJcbiAgLy8gY29uc29sZS5sb2coXCJ3aW5kb3dXaWR0aFwiICsgd2luZG93V2lkdGgpO1xyXG4gIGlmIChvcmlnaW5hbFdpZHRoID4gd2luZG93V2lkdGgpIHsvL+WcqOWbvueJh3dpZHRo5aSn5LqO5omL5py65bGP5bmVd2lkdGjml7blgJlcclxuICAgIGF1dG9XaWR0aCA9IHdpbmRvd1dpZHRoO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJhdXRvV2lkdGhcIiArIGF1dG9XaWR0aCk7XHJcbiAgICBhdXRvSGVpZ2h0ID0gKGF1dG9XaWR0aCAqIG9yaWdpbmFsSGVpZ2h0KSAvIG9yaWdpbmFsV2lkdGg7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImF1dG9IZWlnaHRcIiArIGF1dG9IZWlnaHQpO1xyXG4gICAgcmVzdWx0cy5pbWFnZVdpZHRoID0gYXV0b1dpZHRoO1xyXG4gICAgcmVzdWx0cy5pbWFnZWhlaWdodCA9IGF1dG9IZWlnaHQ7XHJcbiAgfSBlbHNlIHsvL+WQpuWImeWxleekuuWOn+adpeeahOaVsOaNrlxyXG4gICAgcmVzdWx0cy5pbWFnZVdpZHRoID0gb3JpZ2luYWxXaWR0aDtcclxuICAgIHJlc3VsdHMuaW1hZ2VoZWlnaHQgPSBvcmlnaW5hbEhlaWdodDtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHd4UGFyc2VUZW1BcnJheSh0ZW1BcnJheU5hbWUsYmluZE5hbWVSZWcsdG90YWwsdGhhdCl7XHJcbiAgdmFyIGFycmF5ID0gW107XHJcbiAgdmFyIHRlbURhdGEgPSB0aGF0LmRhdGE7XHJcbiAgdmFyIG9iaiA9IG51bGw7XHJcbiAgZm9yKHZhciBpID0gMDsgaSA8IHRvdGFsOyBpKyspe1xyXG4gICAgdmFyIHNpbUFyciA9IHRlbURhdGFbYmluZE5hbWVSZWcraV0ubm9kZXM7XHJcbiAgICBhcnJheS5wdXNoKHNpbUFycik7XHJcbiAgfVxyXG5cclxuICB0ZW1BcnJheU5hbWUgPSB0ZW1BcnJheU5hbWUgfHwgJ3d4UGFyc2VUZW1BcnJheSc7XHJcbiAgb2JqID0gSlNPTi5wYXJzZSgne1wiJysgdGVtQXJyYXlOYW1lICsnXCI6XCJcIn0nKTtcclxuICBvYmpbdGVtQXJyYXlOYW1lXSA9IGFycmF5O1xyXG4gIHRoYXQuc2V0RGF0YShvYmopO1xyXG59XHJcblxyXG4vKipcclxuICog6YWN572uZW1vamlzXHJcbiAqIFxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGVtb2ppc0luaXQocmVnPScnLGJhc2VTcmM9XCIvd3hQYXJzZS9lbW9qaXMvXCIsZW1vamlzKXtcclxuICAgSHRtbFRvSnNvbi5lbW9qaXNJbml0KHJlZyxiYXNlU3JjLGVtb2ppcyk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHd4UGFyc2U6IHd4UGFyc2UsXHJcbiAgd3hQYXJzZVRlbUFycmF5Ond4UGFyc2VUZW1BcnJheSxcclxuICBlbW9qaXNJbml0OmVtb2ppc0luaXRcclxufVxyXG5cclxuXHJcbiJdfQ==