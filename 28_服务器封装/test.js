let App = require('./index')
let app = new App()
app.on('/',(req,res) => {
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('<h4>---这是首页内容---</h4>')
})
app.on('/gnxw',(req,res) => {
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('<h4>===这是国内新闻内容===</h4>')
})
app.on('/usa',(req,res) => {
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('<h4>,,,这是美国新闻内容,,,</h4>')
})
app.run(80,() => {
    console.log('服务器启动成功，可通过 http://127.0.0.1 进行访问')
})