// ========================数据库操作===============================
// mysql 封装
// 【1】,引入库============================================
let mysql = require('mysql')

// 【2】,连接数据库========================================
// 2.1,创建配置对象
let options = {
        host: 'localhost',
        port: '3306', // 可选,默认3306
        user: 'root',
        password: 'wu05241617',
        database: 'mydbNew'
    }
    // 2.2,创建连接对象 (返回连接对象)
let con = mysql.createConnection(options)
    // 2.3建立连接
con.connect((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('数据库连接成功')
        }
    })
    // 【3】,执行数据库语句========================================
    // sql语句执行封装
function sqlQuery(strSql, arr) {
    return new Promise(function(resolve, reject) {
        con.query(strSql, arr, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}
// ===========================================================


// 引入包文件
let express = require('express')
    // 实例化一个 express 对象
let app = express()
    // 1，配置路由，发送请求实现页面逻辑 （字符串模式的路由）
    // 匹配 login 路径
app.get('/login', async(req, res) => {
    let strSql = 'select * from login'
    let result = await sqlQuery(strSql)
    res.json(Array.from(result))
    res.send('这是 login 页面')
})

// 2，配置路由，发送请求实现页面逻辑 （类字符串模式的路由）
// 匹配 abcd 或者 acd 路径, [？ 可有可无，+ 至少一个,* 任意多个]
app.get('/ab?cd', (req, res) => {
    res.send('这是 abcd / acd 页面')
})

// 3，配置路由，发送请求实现页面逻辑 （正则表达式的路由）
// 匹配 a后面至少10个数字 路径
app.get(/\/a\d{10}/, (req, res) => {
    res.send('这是 newPage 页面')
})

// 设置端口，开启服务
app.listen(8080, () => {
    console.log('设置端口，开启服务', 'http://127.0.0.1:8080')
})