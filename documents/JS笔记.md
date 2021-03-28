### ❖ [ES6笔记](https://github.com/ErgoSphere/es-plugins/blob/master/documents/ES6%E7%AC%94%E8%AE%B0.md)

### ❖ JS数据类型 ([ref](https://zhuanlan.zhihu.com/p/95534245))

- 基本数据类型：Undefined, Null, Number, String, Boolean, Symbol(ES6)

- 复杂数据类型： Object

### ❖ 深拷贝和浅拷贝

### ❖ 变量声明方法
 
- ES5: var, function

- ES6: var, function, let, const, import, class

### ❖ [Websocket工作原理](http://websocket.org/aboutwebsocket.html) 

- 握手由HTTP进行，此后于HTTP无关

- 通道由client发起HTTP连接，服务器收到后打开对应的HOST TCP/IP连接。通道建立后可以无阻挡地通过代理Proxy

- client通过 Upgrade:websocket 告知服务器，服务器接收后同意将协议转为websocket，然后HTTP连接终止并被websocket连接替代

- socket.io使用：options.transports指定类型，可选websocket, polling, polling-xhr, polling-jsonp，[demo](https://github.com/ErgoSphere/es-plugins/blob/master/src/api/socket.js)

### ❖ 数组合并[Demo](https://github.com/ErgoSphere/es-plugins/blob/master/src/utils/ObjectUtils/arrayConcat.js)

### ❖ 切换浏览器导航或最小化窗口时监听 ([ref](https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API))

```js
document.addEventListener("visibilitychange", function(ev) { 
  console.log(document.hidden)
})
```




 
  



