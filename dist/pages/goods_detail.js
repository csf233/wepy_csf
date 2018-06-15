'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxParse = require('./../vendors/wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

var _address = require('./../components/address.js');

var _address2 = _interopRequireDefault(_address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsDetail = function (_wepy$page) {
    _inherits(GoodsDetail, _wepy$page);

    function GoodsDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GoodsDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsDetail.__proto__ || Object.getPrototypeOf(GoodsDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "address": { "xmlns:v-bind": "", "v-bind:userAddress.once": "addressInfo" } }, _this.$events = {}, _this.components = {
            address: _address2.default
        }, _this.data = {
            goods_id: 0,
            goods_detail: {},
            addressInfo: null,
            tabsSelectedIndex: 0,
            urls: [],
            tabs: ['图文介绍', '规格参数']
        }, _this.methods = {
            tabsChange: function tabsChange(e) {
                this.tabsSelectedIndex = e.target.dataset.index;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GoodsDetail, [{
        key: 'getGoodsData',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res, tempUrls, article, that;
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
                                    url: 'api/public/v1/goods/detail?goods_id=' + this.goods_id
                                });

                            case 3:
                                res = _context.sent;

                                _wepy2.default.hideLoading();

                                this.goods_detail = res.data.message;

                                tempUrls = [];

                                this.goods_detail.pics.forEach(function (item) {
                                    tempUrls.push(item.pics_big);
                                });
                                this.urls = tempUrls;

                                article = this.goods_detail.goods_introduce;
                                that = this;

                                _wxParse2.default.wxParse('aaa', 'html', article, that, 5);

                                this.$apply();

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getGoodsData() {
                return _ref2.apply(this, arguments);
            }

            return getGoodsData;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            this.goods_id = options.goods_id;
            // console.log(options.goods_id)

            // 调用获取商品信息的方
            this.getGoodsData();
        }
    }]);

    return GoodsDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(GoodsDetail , 'pages/goods_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2RzX2RldGFpbC5qcyJdLCJuYW1lcyI6WyJHb29kc0RldGFpbCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImFkZHJlc3MiLCJBZGRyZXNzIiwiZGF0YSIsImdvb2RzX2lkIiwiZ29vZHNfZGV0YWlsIiwiYWRkcmVzc0luZm8iLCJ0YWJzU2VsZWN0ZWRJbmRleCIsInVybHMiLCJ0YWJzIiwibWV0aG9kcyIsInRhYnNDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGF0YXNldCIsImluZGV4Iiwid2VweSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwiJGZldGNoIiwidXJsIiwicmVzIiwiaGlkZUxvYWRpbmciLCJtZXNzYWdlIiwidGVtcFVybHMiLCJwaWNzIiwiZm9yRWFjaCIsInB1c2giLCJpdGVtIiwicGljc19iaWciLCJhcnRpY2xlIiwiZ29vZHNfaW50cm9kdWNlIiwidGhhdCIsIld4UGFyc2UiLCJ3eFBhcnNlIiwiJGFwcGx5Iiwib3B0aW9ucyIsImdldEdvb2RzRGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O29NQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDJCQUEwQixhQUE3QyxFQUFYLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLHFCQUFTQztBQURDLFMsUUFHWkMsSSxHQUFPO0FBQ0xDLHNCQUFVLENBREw7QUFFTEMsMEJBQWMsRUFGVDtBQUdMQyx5QkFBYSxJQUhSO0FBSUxDLCtCQUFtQixDQUpkO0FBS0xDLGtCQUFLLEVBTEE7QUFNTEMsa0JBQUssQ0FBQyxNQUFELEVBQVEsTUFBUjtBQU5BLFMsUUFTTEMsTyxHQUFVO0FBQ05DLHNCQURNLHNCQUNLQyxDQURMLEVBQ1E7QUFDVixxQkFBS0wsaUJBQUwsR0FBeUJLLEVBQUVDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsS0FBMUM7QUFDSDtBQUhLLFM7Ozs7Ozs7Ozs7OztBQU9WQywrQ0FBS0MsV0FBTCxDQUFpQjtBQUNmQywyQ0FBTyxTQURRO0FBRWZDLDBDQUFNO0FBRlMsaUNBQWpCOzt1Q0FJa0JDLE9BQU87QUFDdkJDLGtGQUE0QyxLQUFLakI7QUFEMUIsaUNBQVAsQzs7O0FBQVprQixtQzs7QUFHTk4sK0NBQUtPLFdBQUw7O0FBRUEscUNBQUtsQixZQUFMLEdBQW9CaUIsSUFBSW5CLElBQUosQ0FBU3FCLE9BQTdCOztBQUVNQyx3QyxHQUFXLEU7O0FBQ2pCLHFDQUFLcEIsWUFBTCxDQUFrQnFCLElBQWxCLENBQXVCQyxPQUF2QixDQUErQixnQkFBUTtBQUNyQ0YsNkNBQVNHLElBQVQsQ0FBY0MsS0FBS0MsUUFBbkI7QUFDRCxpQ0FGRDtBQUdBLHFDQUFLdEIsSUFBTCxHQUFZaUIsUUFBWjs7QUFHSU0sdUMsR0FBVSxLQUFLMUIsWUFBTCxDQUFrQjJCLGU7QUFFNUJDLG9DLEdBQU8sSTs7QUFDWEMsa0RBQVFDLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUIsTUFBdkIsRUFBK0JKLE9BQS9CLEVBQXdDRSxJQUF4QyxFQUE4QyxDQUE5Qzs7QUFFQSxxQ0FBS0csTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUdLQyxPLEVBQVM7QUFDZCxpQkFBS2pDLFFBQUwsR0FBZ0JpQyxRQUFRakMsUUFBeEI7QUFDQTs7QUFFQTtBQUNBLGlCQUFLa0MsWUFBTDtBQUNEOzs7O0VBdkRzQ3RCLGVBQUt1QixJOztrQkFBekIzQyxXIiwiZmlsZSI6Imdvb2RzX2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuaW1wb3J0IFd4UGFyc2UgZnJvbSAnLi4vdmVuZG9ycy93eFBhcnNlL3d4UGFyc2UnXHJcblxyXG5pbXBvcnQgQWRkcmVzcyBmcm9tICcuLi9jb21wb25lbnRzL2FkZHJlc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb29kc0RldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImFkZHJlc3NcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnVzZXJBZGRyZXNzLm9uY2VcIjpcImFkZHJlc3NJbmZvXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIGFkZHJlc3M6IEFkZHJlc3NcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIGdvb2RzX2lkOiAwLFxyXG4gICAgZ29vZHNfZGV0YWlsOiB7fSxcclxuICAgIGFkZHJlc3NJbmZvOiBudWxsLFxyXG4gICAgdGFic1NlbGVjdGVkSW5kZXg6IDAsXHJcbiAgICB1cmxzOltdLFxyXG4gICAgdGFiczpbJ+WbvuaWh+S7i+e7jScsJ+inhOagvOWPguaVsCddXHJcbiAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgdGFic0NoYW5nZShlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFic1NlbGVjdGVkSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBhc3luYyBnZXRHb29kc0RhdGEoKSB7XHJcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICcuLuWKoOi9veS4rS4uJyxcclxuICAgICAgbWFzazogdHJ1ZVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0ICRmZXRjaCh7XHJcbiAgICAgIHVybDogYGFwaS9wdWJsaWMvdjEvZ29vZHMvZGV0YWlsP2dvb2RzX2lkPSR7dGhpcy5nb29kc19pZH1gXHJcbiAgICB9KVxyXG4gICAgd2VweS5oaWRlTG9hZGluZygpXHJcblxyXG4gICAgdGhpcy5nb29kc19kZXRhaWwgPSByZXMuZGF0YS5tZXNzYWdlXHJcblxyXG4gICAgY29uc3QgdGVtcFVybHMgPSBbXVxyXG4gICAgdGhpcy5nb29kc19kZXRhaWwucGljcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB0ZW1wVXJscy5wdXNoKGl0ZW0ucGljc19iaWcpXHJcbiAgICB9KVxyXG4gICAgdGhpcy51cmxzID0gdGVtcFVybHNcclxuXHJcblxyXG4gICAgdmFyIGFydGljbGUgPSB0aGlzLmdvb2RzX2RldGFpbC5nb29kc19pbnRyb2R1Y2VcclxuXHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICBXeFBhcnNlLnd4UGFyc2UoJ2FhYScsICdodG1sJywgYXJ0aWNsZSwgdGhhdCwgNSk7XHJcblxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuZ29vZHNfaWQgPSBvcHRpb25zLmdvb2RzX2lkXHJcbiAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zLmdvb2RzX2lkKVxyXG5cclxuICAgIC8vIOiwg+eUqOiOt+WPluWVhuWTgeS/oeaBr+eahOaWuVxyXG4gICAgdGhpcy5nZXRHb29kc0RhdGEoKVxyXG4gIH1cclxufVxyXG4iXX0=