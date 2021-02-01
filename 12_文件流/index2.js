// 管道流
// 导入相关模块
let fs = require('fs')
    // 创建一个可读流
let rs = fs.createReadStream('input.txt')
    // 创建一个可写流
let ws = fs.createWriteStream('output.txt')
    // 管道读写操作
rs.pipe(ws)
console.log('程序执行结束！！！')