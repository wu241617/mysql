// 导入 fs 模块
let fs = require('fs')
    // 创建写入流
    // 1, 新建一个 WritStream 对象, 语法：fs.createWriteStream(path,{配置操作})
console.log('ws', ws)
    // 2, 文件流式写入
ws.write('写入的内容_1', function(err) {
    err ? console.log(err) : console.log('内容_1流入完成')
})
ws.write('写入的内容_2', function(err) {
        err ? console.log(err) : console.log('内容_2流入完成')
    })
    // 3,文件写入完成
ws.end(function() {
        console.log('文件写入关闭')
    })
    // 4,添加事件的监听,监听文件打开事件
ws.on('open', function() {
        console.log('文件打开！')
    })
    // 5,添加事件的监听,监听文件准备事件
ws.on('ready', function() {
        console.log('文件写入已准备就绪')
    })
    // 6,添加事件的监听,监听文件关闭事件
ws.on('close', function() {
    console.log('文件写入完成，关闭')
})