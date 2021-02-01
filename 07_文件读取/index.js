// 1,导入文件模块
//const { rejects } = require('assert')
var fs = require('fs')
    //const { resolve } = require('path')
    // node 读写文件有同步和异步的接口, 默认为异步
    // fd 打开的文件窗口，是一个标识
    // var fd = fs.openSync('hello.txt', 'r')
    // console.log('fd:', fd)
    // var buf = new Buffer.alloc(20)
    // 同步 Sync
var content = fs.readFileSync('hello.txt', { flag: 'r', encoding: 'utf-8' })
console.log('同步读取文件：', content)
    // 异步
fs.readFile('hello.txt', { flag: 'r', encoding: 'utf-8' }, function(err, data) {
        err ? console.log(err) : console.log('异步读取文件:', data)
    })
    // promise 封装
function fsRead(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, { flag: 'r', encoding: 'utf-8' }, function(err, data) {
            if (err) {
                // 失败执行的内容
                reject(err)
            } else {
                // 成功执行的内容
                resolve(data)
            }
        })
    })
}

var fs1 = fsRead('hello.txt')
fs1.then(function(res) {
    console.log('promise 封装异步读取文件:', res)
})

async function ReadList() {
    var content = await fsRead('hello.txt')
    console.log('async 和 await 简化:', content)
}

ReadList()