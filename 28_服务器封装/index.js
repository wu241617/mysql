// 封装目标：
// 1,构造函数能够实例化app对象
// 2,app.on(url,(req,res)=>{}),可以添加路由的事件（根据请求的路径去执行不同的内容）
// 3,app.run(port,callback),让服务器运行起来
let http = require('http')
let path = require('url')
class App {
    constructor(){
        this.server = http.createServer()
        this.reqEvent = {}
        this.server.on('request',(req,res) => {
            // 解析路径
            let pathObj = path.parse(req.url)
            if(pathObj.path in this.reqEvent){
                this.reqEvent[pathObj.path](req,res)
            }else{
                res.setHeader('content-type','text/html;charset=utf-8')
                res.end('<h4>404页面找不到</h4>')
            }
        })
    }
    on(url,fn){
        this.reqEvent[url] = fn
    }
    run(port,callback){
        this.server.listen(port,callback)
    }
}

module.exports = App