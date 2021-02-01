// 开启一个本地服务器需要Node.js中http核心模块

// 1，http模块提供了搭建本地服务器的API，首先在项目中引入
let http = require('http')

// 2,利用http.createServer()方法得到一个服务器实例
let server = http.createServer()

// 3,给服务器实例绑定 request 的事件处理函数
server.on('request',(req,res) => {
    // 当服务器被请求时，会触发请求事件，并传入请求对象和响应对象
    //console.log(req.url) // 获取到请求路径
    res.end('hello world')
})

// 4,绑定监听端口号，开启服务器
server.listen(3000,()=>{
    console.log('服务器开启成功，可通过 http://127.0.0.1:3000/ 来获取数据')
})