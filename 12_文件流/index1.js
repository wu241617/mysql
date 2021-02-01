// 导入相关模块
let fs = require('fs')
let ws = fs.createWriteStream('xiner_new.mp4', { flag: 'w' })
    // 从流中读取数据
    // 创建一个读取流,语法：fs.createReadStream(path,{可选配置项})
let rs = fs.createReadStream('xiner.mp4', { flags: 'r' })
    //console.log(rs)

rs.on('open', function() {
        console.log('打开读取文件')
    })
    // 每一批数据流入完后读取
rs.on('data', function(chunk) {
    console.log('读取的单批数据为:', chunk)
    ws.write(chunk, function() {
        console.log('写入的单批数据!', chunk)
    })
})
rs.on('close', function() {
    ws.end()
    console.log('读取流结束，关闭')
})