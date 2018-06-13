'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_URL = "https://www.zhengzhicheng.cn/"; /**
                                                 * obj 传过来，长成如下样子
                                                 * {
                                                 *  url:``,
                                                 *  data,
                                                 *  header,
                                                 *  method
                                                 * }
                                                 */
//wepy 相当于是原生的 wx

exports.default = fetch = function fetch(obj) {
  //调用了wepy.request就是一个promise对象
  return _wepy2.default.request({
    url: '' + BASE_URL + obj.url, //开发者服务器接口地址",
    data: obj.data || {}, //请求的参数",
    method: obj.method || 'GET',
    dataType: obj.dataType || 'json',
    header: obj.header || {}
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJmZXRjaCIsIm9iaiIsIndlcHkiLCJyZXF1ZXN0IiwidXJsIiwiZGF0YSIsIm1ldGhvZCIsImRhdGFUeXBlIiwiaGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFVQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVywrQkFBakIsQyxDQVpBOzs7Ozs7Ozs7QUFTQTs7a0JBS2VDLFFBQVEsZUFBQ0MsR0FBRCxFQUFRO0FBQzdCO0FBQ0EsU0FBT0MsZUFBS0MsT0FBTCxDQUFhO0FBQ2xCQyxjQUFRTCxRQUFSLEdBQW1CRSxJQUFJRyxHQURMLEVBQ1k7QUFDOUJDLFVBQU1KLElBQUlJLElBQUosSUFBWSxFQUZBLEVBRUk7QUFDdEJDLFlBQVFMLElBQUlLLE1BQUosSUFBYyxLQUhKO0FBSWxCQyxjQUFVTixJQUFJTSxRQUFKLElBQWdCLE1BSlI7QUFLbEJDLFlBQVFQLElBQUlPLE1BQUosSUFBYztBQUxKLEdBQWIsQ0FBUDtBQU9ELEMiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogb2JqIOS8oOi/h+adpe+8jOmVv+aIkOWmguS4i+agt+WtkFxuICoge1xuICogIHVybDpgYCxcbiAqICBkYXRhLFxuICogIGhlYWRlcixcbiAqICBtZXRob2RcbiAqIH1cbiAqL1xuLy93ZXB5IOebuOW9k+S6juaYr+WOn+eUn+eahCB3eFxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vd3d3LnpoZW5nemhpY2hlbmcuY24vXCJcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2ggPSAob2JqKSA9PntcbiAgLy/osIPnlKjkuoZ3ZXB5LnJlcXVlc3TlsLHmmK/kuIDkuKpwcm9taXNl5a+56LGhXG4gIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xuICAgIHVybDogYCR7QkFTRV9VUkx9JHtvYmoudXJsfWAsIC8v5byA5Y+R6ICF5pyN5Yqh5Zmo5o6l5Y+j5Zyw5Z2AXCIsXG4gICAgZGF0YTogb2JqLmRhdGEgfHwge30sIC8v6K+35rGC55qE5Y+C5pWwXCIsXG4gICAgbWV0aG9kOiBvYmoubWV0aG9kIHx8ICdHRVQnLFxuICAgIGRhdGFUeXBlOiBvYmouZGF0YVR5cGUgfHwgJ2pzb24nLFxuICAgIGhlYWRlcjogb2JqLmhlYWRlciB8fCB7fVxuICB9KVxufVxuIl19