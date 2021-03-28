### ❖ CopyWebpackPlugin v6.0.3 升级方法变动 

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

### ❖ Webpack开启gzip

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