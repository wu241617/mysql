// node 操作数据库，使用 mysql 的JS库
// 【1】,引入库============================================
let mysql = require('mysql')

// 【2】,连接数据库========================================
// 2.1,创建配置对象
let options = {
    host:'localhost',
    port:'3306', // 可选,默认3306
    user:'root',
    password:'wu05241617',
    database:'mydbNew'
}
// 2.2,创建连接对象 (返回连接对象)
let con = mysql.createConnection(options)
// 2.3建立连接
con.connect((err) => {
    if(err){
        console.log(err)
    }else{
        console.log('数据库连接成功')
    }
})

// 【3】,执行数据库语句========================================
// 3.1,执行查询语句
// let strSql1 = 'select * from studet'
// con.query(strSql1,(err,results,fields) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(results)
//         console.log(fields)
//     }
// })

// 3.2,删除表
// let strSql2 = 'drop table studet'
// con.query(strSql2,(err,results) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('删除表操作成功')
//     }
// })

// // 3.3,删除库
// let strSql3 = 'drop database mydb'
// con.query(strSql3,(err,results) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('删除库操作成功')
//     }
// })

// // 3.4,创建库
// let strSql4 = 'create database mydbNew'
// con.query(strSql4,(err,results) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('创建库操作成功')
//     }
// })

// // 3.5,创建表
// let strSql5 = 'CREATE TABLE `studetNew` (`id`  int NOT NULL ,`name`  varchar(255) NOT NULL ,`password`  varchar(255) NOT NULL ,PRIMARY KEY (`id`));'
// con.query(strSql5,(err,results) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('创建表操作成功')
//     }
// })

// // 3.6.1,插入数据
// let strSql6 = 'insert into studetNew (id,name,password) value (2,"localhost","root123")'
// con.query(strSql6,(err,results) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('插入数据操作成功')
//     }
// })

// // 3.6.2,插入数据(数据不写死,?做占位符)
let strSql7 = 'insert into studetNew (id,name,password) value (?,?,?)'
con.query(strSql7,[3,'闻言','wenyan'],(err,results) =>{
    if(err){
        console.log(err)
    }else{
        console.log('插入数据操作成功')
    }
})