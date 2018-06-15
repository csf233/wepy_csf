'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _request = require('./../utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var home = function (_wepy$page) {
  _inherits(home, _wepy$page);

  function home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = home.__proto__ || Object.getPrototypeOf(home)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      swiperdata: [],
      catitems: [],
      floordata: [],
      isshowtop: false
    }, _this.methods = {
      onPageScroll: function onPageScroll(e) {
        // console.log(e.scrollTop)
        if (e.scrollTop > 80) {
          this.isshowtop = false;
        } else {
          this.isshowtop = true;
        }
      },
      gototop: function gototop() {
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 300
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(home, [{
    key: 'getSwiperData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _request2.default)({
                  url: 'api/public/v1/home/swiperdata'
                });

              case 2:
                res = _context.sent;


                this.swiperdata = res.data.message;

                this.$apply();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSwiperData() {
        return _ref2.apply(this, arguments);
      }

      return getSwiperData;
    }()
  }, {
    key: 'getCatitems',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _request2.default)({
                  url: 'api/public/v1/home/catitems'
                });

              case 2:
                res = _context2.sent;


                this.catitems = res.data.message;

                this.$apply();

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCatitems() {
        return _ref3.apply(this, arguments);
      }

      return getCatitems;
    }()
  }, {
    key: 'getFloordata',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _request2.default)({
                  url: 'api/public/v1/home/floordata'
                });

              case 2:
                res = _context3.sent;


                this.floordata = res.data.message;

                this.$apply();

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getFloordata() {
        return _ref4.apply(this, arguments);
      }

      return getFloordata;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getSwiperData();
      this.getCatitems();
      this.getFloordata();
    }
  }]);

  return home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiaG9tZSIsImRhdGEiLCJzd2lwZXJkYXRhIiwiY2F0aXRlbXMiLCJmbG9vcmRhdGEiLCJpc3Nob3d0b3AiLCJtZXRob2RzIiwib25QYWdlU2Nyb2xsIiwiZSIsInNjcm9sbFRvcCIsImdvdG90b3AiLCJ3eCIsInBhZ2VTY3JvbGxUbyIsImR1cmF0aW9uIiwidXJsIiwicmVzIiwibWVzc2FnZSIsIiRhcHBseSIsImdldFN3aXBlckRhdGEiLCJnZXRDYXRpdGVtcyIsImdldEZsb29yZGF0YSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxJLEdBQU87QUFDTEMsa0JBQVksRUFEUDtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGlCQUFXLEVBSE47QUFJTEMsaUJBQVc7QUFKTixLLFFBT1BDLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDS0MsQ0FETCxFQUNRO0FBQ2Q7QUFDQSxZQUFJQSxFQUFFQyxTQUFGLEdBQWMsRUFBbEIsRUFBc0I7QUFDcEIsZUFBS0osU0FBTCxHQUFpQixLQUFqQjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtBLFNBQUwsR0FBaUIsSUFBakI7QUFDRDtBQUNGLE9BUk87QUFTUkssYUFUUSxxQkFTRTtBQUNSQyxXQUFHQyxZQUFILENBQWdCO0FBQ2RILHFCQUFXLENBREc7QUFFZEksb0JBQVU7QUFGSSxTQUFoQjtBQUlEO0FBZE8sSzs7Ozs7Ozs7Ozs7Ozt1QkFrQlUsdUJBQU07QUFDdEJDO0FBRHNCLGlCQUFOLEM7OztBQUFaQyxtQjs7O0FBSU4scUJBQUtiLFVBQUwsR0FBa0JhLElBQUlkLElBQUosQ0FBU2UsT0FBM0I7O0FBRUEscUJBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUlrQix1QkFBTTtBQUN0Qkg7QUFEc0IsaUJBQU4sQzs7O0FBQVpDLG1COzs7QUFJTixxQkFBS1osUUFBTCxHQUFnQlksSUFBSWQsSUFBSixDQUFTZSxPQUF6Qjs7QUFFQSxxQkFBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSWtCLHVCQUFNO0FBQ3RCSDtBQURzQixpQkFBTixDOzs7QUFBWkMsbUI7OztBQUlOLHFCQUFLWCxTQUFMLEdBQWlCVyxJQUFJZCxJQUFKLENBQVNlLE9BQTFCOztBQUVBLHFCQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR087QUFDUCxXQUFLQyxhQUFMO0FBQ0EsV0FBS0MsV0FBTDtBQUNBLFdBQUtDLFlBQUw7QUFDRDs7OztFQTNEK0JDLGVBQUtDLEk7O2tCQUFsQnRCLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBzd2lwZXJkYXRhOiBbXSxcclxuICAgIGNhdGl0ZW1zOiBbXSxcclxuICAgIGZsb29yZGF0YTogW10sXHJcbiAgICBpc3Nob3d0b3A6IGZhbHNlXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgb25QYWdlU2Nyb2xsKGUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZS5zY3JvbGxUb3ApXHJcbiAgICAgIGlmIChlLnNjcm9sbFRvcCA+IDgwKSB7XHJcbiAgICAgICAgdGhpcy5pc3Nob3d0b3AgPSBmYWxzZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXNzaG93dG9wID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ290b3RvcCgpIHtcclxuICAgICAgd3gucGFnZVNjcm9sbFRvKHtcclxuICAgICAgICBzY3JvbGxUb3A6IDAsXHJcbiAgICAgICAgZHVyYXRpb246IDMwMFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0U3dpcGVyRGF0YSgpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHtcclxuICAgICAgdXJsOiBgYXBpL3B1YmxpYy92MS9ob21lL3N3aXBlcmRhdGFgXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuc3dpcGVyZGF0YSA9IHJlcy5kYXRhLm1lc3NhZ2VcclxuXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRDYXRpdGVtcygpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHtcclxuICAgICAgdXJsOiBgYXBpL3B1YmxpYy92MS9ob21lL2NhdGl0ZW1zYFxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmNhdGl0ZW1zID0gcmVzLmRhdGEubWVzc2FnZVxyXG5cclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEZsb29yZGF0YSgpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHtcclxuICAgICAgdXJsOiBgYXBpL3B1YmxpYy92MS9ob21lL2Zsb29yZGF0YWBcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5mbG9vcmRhdGEgPSByZXMuZGF0YS5tZXNzYWdlXHJcblxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5nZXRTd2lwZXJEYXRhKClcclxuICAgIHRoaXMuZ2V0Q2F0aXRlbXMoKVxyXG4gICAgdGhpcy5nZXRGbG9vcmRhdGEoKVxyXG4gIH1cclxufVxyXG4iXX0=