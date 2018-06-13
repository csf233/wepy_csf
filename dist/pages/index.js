'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


console.log('moduleA ignored: ', _moduleA2.default); // => moduleA ignored: {}

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: 'test'
  };
  this.$repeat = {};
  this.$props = { "counter1": { "xmlns:on": "", "on:index-emit.user": "counterEmit" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" }, "group": { "v-bind:grouplist.once": "item", "v-bind:indexa.once": "index" } };
  this.$events = {};
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    mynum: 20,
    userInfo: {
      nickName: '加载中...'
    },
    normalTitle: '原始标题',
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });

      promise.then(function (d) {
        console.log('toast done');
      });
    },
    tap: function tap() {
      console.log('do noting from ' + this.$name);
    },
    communicate: function communicate() {
      console.log(this.$name + ' tap');

      this.$invoke('counter2', 'minus', 45, 6);
      this.$invoke('counter1', 'plus', 45, 6);

      this.$broadcast('index-broadcast', 1, 3, 4);
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
      while (i--) {
        _wepy2.default.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            self.netrst += d.data + '.';
            self.$apply();
          }
        });
      }
    },
    counterEmit: function counterEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVBIiwiSW5kZXgiLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJub3JtYWxUaXRsZSIsInNldFRpbWVvdXRUaXRsZSIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYW5lbCIsIlBhbmVsIiwiY291bnRlcjEiLCJDb3VudGVyIiwiY291bnRlcjIiLCJsaXN0IiwiTGlzdCIsImdyb3VwIiwiR3JvdXAiLCJ0b2FzdCIsIlRvYXN0IiwibWl4aW5zIiwidGVzdE1peGluIiwiZGF0YSIsIm15bnVtIiwibmlja05hbWUiLCJjb3VudCIsIm5ldHJzdCIsImdyb3VwTGlzdCIsImlkIiwibmFtZSIsImNoaWxkaWQiLCJjaGlsZG5hbWUiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwicGx1cyIsInByb21pc2UiLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJ0aGVuIiwidGFwIiwiJG5hbWUiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJyZXF1ZXN0IiwiaSIsIm1hcCIsInVybCIsInN1Y2Nlc3MiLCJkIiwiY291bnRlckVtaXQiLCIkZXZlbnQiLCJsZW5ndGgiLCJzb3VyY2UiLCJldmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBTnVDO0FBQ1Q7QUFDUTtBQUNQOzs7QUFLL0JBLFFBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0MsaUJBQWpDLEUsQ0FBMEM7O0lBRXJCQyxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTJKVjtBQUNQLFVBQUlDLE9BQU8s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S0FEVixpQkFDMkJVLE9BQU94QixJQURsQyxjQUMrQ3dCLE9BQU9FLE1BQVAsQ0FBY1osS0FEN0Q7QUFHRDtBQU5NLEc7OztrQkFsSlVuRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBQYW5lbCBmcm9tICdAL2NvbXBvbmVudHMvcGFuZWwnIC8vIGFsaWFzIGV4YW1wbGVcclxuaW1wb3J0IENvdW50ZXIgZnJvbSAnY291bnRlcicgLy8gYWxpYXMgZXhhbXBsZVxyXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnIC8vIGFsaWFzRmllbGRzIGV4YW1wbGVcclxuaW1wb3J0IG1vZHVsZUEgZnJvbSAnbW9kdWxlLWEnIC8vIGFsaWFzRmllbGRzIGlnbm9yZSBtb2R1bGUgZXhhbXBsZVxyXG5pbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCdcclxuaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xyXG5pbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xyXG5cclxuY29uc29sZS5sb2coJ21vZHVsZUEgaWdub3JlZDogJywgbW9kdWxlQSkgLy8gPT4gbW9kdWxlQSBpZ25vcmVkOiB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0ZXN0J1xyXG4gIH1cclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY291bnRlcjFcIjp7XCJ4bWxuczpvblwiOlwiXCIsXCJvbjppbmRleC1lbWl0LnVzZXJcIjpcImNvdW50ZXJFbWl0XCJ9LFwiY291bnRlcjJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm51bS5zeW5jXCI6XCJteW51bVwifSxcImdyb3VwXCI6e1widi1iaW5kOmdyb3VwbGlzdC5vbmNlXCI6XCJpdGVtXCIsXCJ2LWJpbmQ6aW5kZXhhLm9uY2VcIjpcImluZGV4XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIHBhbmVsOiBQYW5lbCxcclxuICAgIGNvdW50ZXIxOiBDb3VudGVyLFxyXG4gICAgY291bnRlcjI6IENvdW50ZXIsXHJcbiAgICBsaXN0OiBMaXN0LFxyXG4gICAgZ3JvdXA6IEdyb3VwLFxyXG4gICAgdG9hc3Q6IFRvYXN0XHJcbiAgfVxyXG5cclxuICBtaXhpbnMgPSBbdGVzdE1peGluXVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgbXludW06IDIwLFxyXG4gICAgdXNlckluZm86IHtcclxuICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXHJcbiAgICB9LFxyXG4gICAgbm9ybWFsVGl0bGU6ICfljp/lp4vmoIfpopgnLFxyXG4gICAgc2V0VGltZW91dFRpdGxlOiAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5JyxcclxuICAgIGNvdW50OiAwLFxyXG4gICAgbmV0cnN0OiAnJyxcclxuICAgIGdyb3VwTGlzdDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXHJcbiAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjaGlsZGlkOiAnMS4xJyxcclxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY2hpbGRpZDogJzEuMicsXHJcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjMnLFxyXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXHJcbiAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcclxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY2hpbGRpZDogJzIuMicsXHJcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjMnLFxyXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXHJcbiAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjaGlsZGlkOiAnMy4xJyxcclxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgY29tcHV0ZWQgPSB7XHJcbiAgICBub3coKSB7XHJcbiAgICAgIHJldHVybiArbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHBsdXMoKSB7XHJcbiAgICAgIHRoaXMubXludW0rK1xyXG4gICAgfSxcclxuICAgIHRvYXN0KCkge1xyXG4gICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcclxuICAgICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXHJcbiAgICAgICAgaW1nOlxyXG4gICAgICAgICAgJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9raWlubGFtL3dldG9hc3QvbWFzdGVyL2ltYWdlcy9zdGFyLnBuZydcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHByb21pc2UudGhlbihkID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygndG9hc3QgZG9uZScpXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgdGFwKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZG8gbm90aW5nIGZyb20gJyArIHRoaXMuJG5hbWUpXHJcbiAgICB9LFxyXG4gICAgY29tbXVuaWNhdGUoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHRhcCcpXHJcblxyXG4gICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIyJywgJ21pbnVzJywgNDUsIDYpXHJcbiAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjEnLCAncGx1cycsIDQ1LCA2KVxyXG5cclxuICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KVxyXG4gICAgfSxcclxuICAgIHJlcXVlc3QoKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICBsZXQgaSA9IDEwXHJcbiAgICAgIGxldCBtYXAgPSBbXHJcbiAgICAgICAgJ01BPT0nLFxyXG4gICAgICAgICdNUW89JyxcclxuICAgICAgICAnTWc9PScsXHJcbiAgICAgICAgJ013PT0nLFxyXG4gICAgICAgICdOQT09JyxcclxuICAgICAgICAnTlE9PScsXHJcbiAgICAgICAgJ05nPT0nLFxyXG4gICAgICAgICdOdz09JyxcclxuICAgICAgICAnT0E9PScsXHJcbiAgICAgICAgJ09RPT0nXHJcbiAgICAgIF1cclxuICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6XHJcbiAgICAgICAgICAgICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArXHJcbiAgICAgICAgICAgIG1hcFtpXSArXHJcbiAgICAgICAgICAgICcmaT0nICtcclxuICAgICAgICAgICAgaSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGQpIHtcclxuICAgICAgICAgICAgc2VsZi5uZXRyc3QgKz0gZC5kYXRhICsgJy4nXHJcbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY291bnRlckVtaXQoLi4uYXJncykge1xyXG4gICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YFxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmVudHMgPSB7XHJcbiAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uKHVzZXJJbmZvKSB7XHJcbiAgICAgIGlmICh1c2VySW5mbykge1xyXG4gICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGYubm9ybWFsVGl0bGUgPSAn5qCH6aKY5bey6KKr5L+u5pS5J1xyXG5cclxuICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5J1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfliLDkuInnp5LkuoYnXHJcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgICB9LCAzMDAwKVxyXG5cclxuICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19