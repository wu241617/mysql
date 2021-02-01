// 目录的读取
const { rejects } = require('assert')
const fs = require('fs')
fs.readdir('../11_node输入与输出/', function(err, files) {
        err ? console.log('存在错误', err) : console.log('输出目录', files)
    })
    // promise 封装
function readDir(path) {
    return new Promise(function(resolve, reject) {
        fs.readdir(path, function(err, files) {
            if (err) {
                reject(err)
            } else {
                resolve(files)
            }
        })
    })
}
readDir('../01_Node简介/').then(function(res) {
        console.log('res:', res)
    })
    // await 和 async 简化 promise 异步操作
async function read_dir(path) {
    let pathArr = await readDir(path)
    console.log('目录为:', pathArr)
}
read_dir('../08_文件写入/')
    // 删除目录
    // 语法：fs.rmdir(path,callback),callback中没有接收参数