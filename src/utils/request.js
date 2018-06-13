/**
 * obj 传过来，长成如下样子
 * {
 *  url:``,
 *  data,
 *  header,
 *  method
 * }
 */
//wepy 相当于是原生的 wx
import wepy from 'wepy'

const BASE_URL = "https://www.zhengzhicheng.cn/"

export default fetch = (obj) =>{
  //调用了wepy.request就是一个promise对象
  return wepy.request({
    url: `${BASE_URL}${obj.url}`, //开发者服务器接口地址",
    data: obj.data || {}, //请求的参数",
    method: obj.method || 'GET',
    dataType: obj.dataType || 'json',
    header: obj.header || {}
  })
}
