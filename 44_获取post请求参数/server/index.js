// express 中获取 post 请求参数，需要借助中间件 urlencoded
// 语法： app.use(express.urlencoded())  req.body 获取参数
let express = require('express')
let cors = require('cors')

let app = express()

app.use(cors())
app.use(express.urlencoded())

app.post('/login', function(req, res) {
    console.log(req.body)
    res.json(req.body)
})

app.listen(3000, function() {
    console.log('服务器启动成功，可通过 http://127.0.0.1:3000/login 访问！')
})