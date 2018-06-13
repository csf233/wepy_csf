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
      floordata: []
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiaG9tZSIsImRhdGEiLCJzd2lwZXJkYXRhIiwiY2F0aXRlbXMiLCJmbG9vcmRhdGEiLCJ1cmwiLCJyZXMiLCJtZXNzYWdlIiwiJGFwcGx5IiwiZ2V0U3dpcGVyRGF0YSIsImdldENhdGl0ZW1zIiwiZ2V0Rmxvb3JkYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEksR0FBTztBQUNMQyxrQkFBWSxFQURQO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsaUJBQVc7QUFITixLOzs7Ozs7Ozs7Ozs7O3VCQU9hLHVCQUFNO0FBQ3RCQztBQURzQixpQkFBTixDOzs7QUFBWkMsbUI7OztBQUlOLHFCQUFLSixVQUFMLEdBQWtCSSxJQUFJTCxJQUFKLENBQVNNLE9BQTNCOztBQUVBLHFCQUFLQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJa0IsdUJBQU07QUFDdEJIO0FBRHNCLGlCQUFOLEM7OztBQUFaQyxtQjs7O0FBSU4scUJBQUtILFFBQUwsR0FBZ0JHLElBQUlMLElBQUosQ0FBU00sT0FBekI7O0FBRUEscUJBQUtDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUlrQix1QkFBTTtBQUN0Qkg7QUFEc0IsaUJBQU4sQzs7O0FBQVpDLG1COzs7QUFJTixxQkFBS0YsU0FBTCxHQUFpQkUsSUFBSUwsSUFBSixDQUFTTSxPQUExQjs7QUFFQSxxQkFBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdPO0FBQ1AsV0FBS0MsYUFBTDtBQUNBLFdBQUtDLFdBQUw7QUFDQSxXQUFLQyxZQUFMO0FBQ0Q7Ozs7RUF6QytCQyxlQUFLQyxJOztrQkFBbEJiLEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnLi4vdXRpbHMvcmVxdWVzdC5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBzd2lwZXJkYXRhOiBbXSxcclxuICAgIGNhdGl0ZW1zOiBbXSxcclxuICAgIGZsb29yZGF0YTogW11cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFN3aXBlckRhdGEoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh7XHJcbiAgICAgIHVybDogYGFwaS9wdWJsaWMvdjEvaG9tZS9zd2lwZXJkYXRhYFxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnN3aXBlcmRhdGEgPSByZXMuZGF0YS5tZXNzYWdlXHJcblxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Q2F0aXRlbXMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh7XHJcbiAgICAgIHVybDogYGFwaS9wdWJsaWMvdjEvaG9tZS9jYXRpdGVtc2BcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5jYXRpdGVtcyA9IHJlcy5kYXRhLm1lc3NhZ2VcclxuXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRGbG9vcmRhdGEoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh7XHJcbiAgICAgIHVybDogYGFwaS9wdWJsaWMvdjEvaG9tZS9mbG9vcmRhdGFgXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuZmxvb3JkYXRhID0gcmVzLmRhdGEubWVzc2FnZVxyXG5cclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuZ2V0U3dpcGVyRGF0YSgpXHJcbiAgICB0aGlzLmdldENhdGl0ZW1zKClcclxuICAgIHRoaXMuZ2V0Rmxvb3JkYXRhKClcclxuICB9XHJcbn1cclxuIl19