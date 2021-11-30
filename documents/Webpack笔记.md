### ➤  CopyWebpackPlugin v6.0.3 升级方法变动 

< 6.0.3

```js
new CopyWebpackPlugin({
  from: "",
  to: "",
  ignore: [".*"]
})
```

= 6.0.3

```js
new CopyWebpackPlugin({
  patterns: [{
    from: "",
    to: "",
    globOptions: {
      ignore: ['.*']
    }
  }]
})
```

---
### ➤ Webpack开启gzip

```js
const CompressionWebpackPlugin = require("compression-webpack-plugin")
configureWebpack: config => {
  return {
    plugins: [
      new CompressionWebpackPlugin({
        test: /\.(js|css)(\?.*)?$/i
      })
    ]
  }
}
```

---
### ➤ webpack打包慢解决

- 减少文件依赖嵌套深度
- 使用尽可能少的处理(loader, plugin)
- DLL处理第三方包
- 多线程打包（HappyPack）
- 关闭sourcemap
- 减少代码体积，压缩代码
- 优化resolve.extensions, resolve.modules, resolve.alias
- 使用include和exclude
- 设置babel-loader缓存