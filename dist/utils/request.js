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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJmZXRjaCIsIm9iaiIsIndlcHkiLCJyZXF1ZXN0IiwidXJsIiwiZGF0YSIsIm1ldGhvZCIsImRhdGFUeXBlIiwiaGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFVQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVywrQkFBakIsQyxDQVpBOzs7Ozs7Ozs7QUFTQTs7a0JBS2VDLFFBQVEsZUFBQ0MsR0FBRCxFQUFRO0FBQzdCO0FBQ0EsU0FBT0MsZUFBS0MsT0FBTCxDQUFhO0FBQ2xCQyxjQUFRTCxRQUFSLEdBQW1CRSxJQUFJRyxHQURMLEVBQ1k7QUFDOUJDLFVBQU1KLElBQUlJLElBQUosSUFBWSxFQUZBLEVBRUk7QUFDdEJDLFlBQVFMLElBQUlLLE1BQUosSUFBYyxLQUhKO0FBSWxCQyxjQUFVTixJQUFJTSxRQUFKLElBQWdCLE1BSlI7QUFLbEJDLFlBQVFQLElBQUlPLE1BQUosSUFBYztBQUxKLEdBQWIsQ0FBUDtBQU9ELEMiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBvYmog5Lyg6L+H5p2l77yM6ZW/5oiQ5aaC5LiL5qC35a2QXHJcbiAqIHtcclxuICogIHVybDpgYCxcclxuICogIGRhdGEsXHJcbiAqICBoZWFkZXIsXHJcbiAqICBtZXRob2RcclxuICogfVxyXG4gKi9cclxuLy93ZXB5IOebuOW9k+S6juaYr+WOn+eUn+eahCB3eFxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vd3d3LnpoZW5nemhpY2hlbmcuY24vXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoID0gKG9iaikgPT57XHJcbiAgLy/osIPnlKjkuoZ3ZXB5LnJlcXVlc3TlsLHmmK/kuIDkuKpwcm9taXNl5a+56LGhXHJcbiAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XHJcbiAgICB1cmw6IGAke0JBU0VfVVJMfSR7b2JqLnVybH1gLCAvL+W8gOWPkeiAheacjeWKoeWZqOaOpeWPo+WcsOWdgFwiLFxyXG4gICAgZGF0YTogb2JqLmRhdGEgfHwge30sIC8v6K+35rGC55qE5Y+C5pWwXCIsXHJcbiAgICBtZXRob2Q6IG9iai5tZXRob2QgfHwgJ0dFVCcsXHJcbiAgICBkYXRhVHlwZTogb2JqLmRhdGFUeXBlIHx8ICdqc29uJyxcclxuICAgIGhlYWRlcjogb2JqLmhlYWRlciB8fCB7fVxyXG4gIH0pXHJcbn1cclxuIl19