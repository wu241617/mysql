let http = require('http')
let server = http.createServer()
server.on('request',(req,res) => {
    // 设置请求头
    res.setHeader('Content-Type','text/html; charset=UTF-8')
    if(req.url == '/'){
        res.end('首页')
    }else if(req.url == '/gnxw'){
        res.end('国内新闻')
    }else if(req.url == '/ylxw'){
        res.end('娱乐新闻')
    }else{
        res.end('404')
    }
})
server.listen(3000,()=>{
    console.log('服务器开启成功，可通过 http://127.0.0.1:3000 访问')
})