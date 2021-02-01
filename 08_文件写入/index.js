const { rejects } = require('assert')
const fs = require('fs')

// fs.writeFile('content.txt', '我很喜欢你！', { flag: 'a', encoding: 'utf-8' }, function(err) {
//     err ? console.log('写入失败！！！', err) : console.log('写入内容成功！')
// })

function WriteFile(path, data) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(path, data, { flag: 'a', encoding: 'utf-8' }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

// WriteFile('content.txt', '我也喜欢你！\n').then(function() {
//     console.log('写入成功！！！')
// })

async function WriteList() {
    await WriteFile('content.txt', '这是一个悲伤的故事 \n')
    await WriteFile('content.txt', '我喜欢你 \n')
    await WriteFile('content.txt', '但是你不喜欢我 \n')
    await WriteFile('content.txt', 'OMG !!! \n')
}

WriteList()

//fs.unlink(path,callback) 删除文件

module.exports.WriteFile = WriteFile