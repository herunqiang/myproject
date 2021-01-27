module.exports = {
  lintOnSave: false,/*关闭es语法校验*/
  devServer:{
    host: "0.0.0.0",
    proxy:{
      "/xm": {
        "target": "http://www.xiongmaoyouxuan.com",
        "changeOrigin":true,
        "pathRewrite":{
          "^/xm":"/"
        }
      }
    }
  }
}
