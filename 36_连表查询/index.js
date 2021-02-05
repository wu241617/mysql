let http = require('http')
let server = http.createServer()
let mysql = require('mysql')
server.on('request',(req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", ' 3.2.1');
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    if(req.url == '/login'){
        let sqlStr = 'select * from studetnew'
        con.query(sqlStr,(err,results) => {
            if(err){
                console.log(err)
            }else{
                res.data = results
                console.log('数据为--->:',results)
                res.end('数据成功拿到')
            }
        })
    }else{ 
        res.end('欢迎来到本服务器')
    }
})
server.listen(80,() => {
    console.log('服务器开启成功，可通过 http://127.0.0.1/ 来获取数据')
})
let options = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'wu05241617',
    database:'mydbNew'
}
let con = mysql.createConnection(options)
con.connect((err) => {
    if(err){
        console.log(err)
    }else{
        console.log('数据库连接成功')
    }
})