'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var category = function (_wepy$page) {
  _inherits(category, _wepy$page);

  function category() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, category);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = category.__proto__ || Object.getPrototypeOf(category)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      categires: [],
      seletedIndex: 0,
      windowHeight: 0
    }, _this.methods = {
      selectedChange: function selectedChange(e) {
        this.seletedIndex = e.target.dataset.index;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(category, [{
    key: 'getCategoriesData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _wepy2.default.showLoading({
                  title: '..加载中..',
                  mask: true
                });
                _context.next = 3;
                return $fetch({
                  url: 'api/public/v1/categories'
                });

              case 3:
                res = _context.sent;


                this.categires = res.data.message;
                _wepy2.default.hideLoading();
                this.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCategoriesData() {
        return _ref2.apply(this, arguments);
      }

      return getCategoriesData;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getCategoriesData();

      // 获取我们系统信息，包括品牌,xxx
      var systemInfo = _wepy2.default.getSystemInfoSync();
      this.windowHeight = systemInfo.windowHeight;
    }
  }]);

  return category;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(category , 'pages/category'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LmpzIl0sIm5hbWVzIjpbImNhdGVnb3J5IiwiZGF0YSIsImNhdGVnaXJlcyIsInNlbGV0ZWRJbmRleCIsIndpbmRvd0hlaWdodCIsIm1ldGhvZHMiLCJzZWxlY3RlZENoYW5nZSIsImUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJ3ZXB5Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCIkZmV0Y2giLCJ1cmwiLCJyZXMiLCJtZXNzYWdlIiwiaGlkZUxvYWRpbmciLCIkYXBwbHkiLCJnZXRDYXRlZ29yaWVzRGF0YSIsInN5c3RlbUluZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxJLEdBQU87QUFDTEMsaUJBQVcsRUFETjtBQUVMQyxvQkFBYyxDQUZUO0FBR0xDLG9CQUFjO0FBSFQsSyxRQU1QQyxPLEdBQVU7QUFDUkMsb0JBRFEsMEJBQ09DLENBRFAsRUFDVTtBQUNoQixhQUFLSixZQUFMLEdBQW9CSSxFQUFFQyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLEtBQXJDO0FBQ0Q7QUFITyxLOzs7Ozs7Ozs7Ozs7QUFPUkMsK0JBQUtDLFdBQUwsQ0FBaUI7QUFDZkMseUJBQU8sU0FEUTtBQUVmQyx3QkFBTTtBQUZTLGlCQUFqQjs7dUJBSWtCQyxPQUFPO0FBQ3ZCQztBQUR1QixpQkFBUCxDOzs7QUFBWkMsbUI7OztBQUlOLHFCQUFLZixTQUFMLEdBQWlCZSxJQUFJaEIsSUFBSixDQUFTaUIsT0FBMUI7QUFDQVAsK0JBQUtRLFdBQUw7QUFDQSxxQkFBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdPO0FBQ1AsV0FBS0MsaUJBQUw7O0FBRUE7QUFDQSxVQUFNQyxhQUFhWCxlQUFLWSxpQkFBTCxFQUFuQjtBQUNBLFdBQUtuQixZQUFMLEdBQW9Ca0IsV0FBV2xCLFlBQS9CO0FBQ0Q7Ozs7RUFqQ21DTyxlQUFLYSxJOztrQkFBdEJ4QixRIiwiZmlsZSI6ImNhdGVnb3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjYXRlZ29yeSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgZGF0YSA9IHtcclxuICAgIGNhdGVnaXJlczogW10sXHJcbiAgICBzZWxldGVkSW5kZXg6IDAsXHJcbiAgICB3aW5kb3dIZWlnaHQ6IDBcclxuICB9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBzZWxlY3RlZENoYW5nZShlKSB7XHJcbiAgICAgIHRoaXMuc2VsZXRlZEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Q2F0ZWdvcmllc0RhdGEoKSB7XHJcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICcuLuWKoOi9veS4rS4uJyxcclxuICAgICAgbWFzazogdHJ1ZVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0ICRmZXRjaCh7XHJcbiAgICAgIHVybDogYGFwaS9wdWJsaWMvdjEvY2F0ZWdvcmllc2BcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5jYXRlZ2lyZXMgPSByZXMuZGF0YS5tZXNzYWdlXHJcbiAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuZ2V0Q2F0ZWdvcmllc0RhdGEoKVxyXG5cclxuICAgIC8vIOiOt+WPluaIkeS7rOezu+e7n+S/oeaBr++8jOWMheaLrOWTgeeJjCx4eHhcclxuICAgIGNvbnN0IHN5c3RlbUluZm8gPSB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKClcclxuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gc3lzdGVtSW5mby53aW5kb3dIZWlnaHRcclxuICB9XHJcbn1cclxuIl19