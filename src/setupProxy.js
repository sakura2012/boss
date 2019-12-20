const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(proxy('/sky', { 
        target: 'https://job.alibaba.com/' ,
        changeOrigin: true,
        pathRewrite: {
        "^/sky": "/"
        }
    }))
}