'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Address = function (_wepy$component) {
  _inherits(Address, _wepy$component);

  function Address() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Address);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Address.__proto__ || Object.getPrototypeOf(Address)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      userAddress: {
        type: Object,
        twoWay: true // 双向绑定，只有设置了这个，当子组件给父页面传递过来的值赋值之后，父组件就可以拿到子组件赋的值了
        // 这个就有点替代原先子组件通过自定义事件给父组件传值
      }
    }, _this.methods = {
      chooseAddress: function chooseAddress() {
        var _this2 = this;

        // 调用wepy的选择地址的api
        _wepy2.default.chooseAddress().then(function (res) {
          _this2.userAddress = res;

          _this2.$apply();
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Address;
}(_wepy2.default.component);

exports.default = Address;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MuanMiXSwibmFtZXMiOlsiQWRkcmVzcyIsInByb3BzIiwidXNlckFkZHJlc3MiLCJ0eXBlIiwiT2JqZWN0IiwidHdvV2F5IiwibWV0aG9kcyIsImNob29zZUFkZHJlc3MiLCJ3ZXB5IiwidGhlbiIsInJlcyIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsSyxHQUFRO0FBQ05DLG1CQUFhO0FBQ1hDLGNBQU1DLE1BREs7QUFFWEMsZ0JBQVEsSUFGRyxDQUVFO0FBQ2I7QUFIVztBQURQLEssUUFRUkMsTyxHQUFVO0FBQ1JDLG1CQURRLDJCQUNRO0FBQUE7O0FBQ2Q7QUFDQUMsdUJBQUtELGFBQUwsR0FBcUJFLElBQXJCLENBQTBCLGVBQU87QUFDL0IsaUJBQUtQLFdBQUwsR0FBbUJRLEdBQW5COztBQUVBLGlCQUFLQyxNQUFMO0FBQ0QsU0FKRDtBQUtEO0FBUk8sSzs7OztFQVR5QkgsZUFBS0ksUzs7a0JBQXJCWixPIiwiZmlsZSI6ImFkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZHJlc3MgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7XHJcbiAgICB1c2VyQWRkcmVzczoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHR3b1dheTogdHJ1ZSAvLyDlj4zlkJHnu5HlrprvvIzlj6rmnInorr7nva7kuobov5nkuKrvvIzlvZPlrZDnu4Tku7bnu5nniLbpobXpnaLkvKDpgJLov4fmnaXnmoTlgLzotYvlgLzkuYvlkI7vvIzniLbnu4Tku7blsLHlj6/ku6Xmi7/liLDlrZDnu4Tku7botYvnmoTlgLzkuoZcclxuICAgICAgLy8g6L+Z5Liq5bCx5pyJ54K55pu/5Luj5Y6f5YWI5a2Q57uE5Lu26YCa6L+H6Ieq5a6a5LmJ5LqL5Lu257uZ54i257uE5Lu25Lyg5YC8XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgY2hvb3NlQWRkcmVzcygpIHtcclxuICAgICAgLy8g6LCD55Sod2VweeeahOmAieaLqeWcsOWdgOeahGFwaVxyXG4gICAgICB3ZXB5LmNob29zZUFkZHJlc3MoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyQWRkcmVzcyA9IHJlc1xyXG5cclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==