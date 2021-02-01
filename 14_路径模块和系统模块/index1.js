let path = require('path')
    // 获取当前目录文件路径
let currentFilePath = __filename
console.log('currentFilePath', currentFilePath)
console.log(path.extname(__filename))
    // 路径解析，可以将路径信息直接解析出来（根路径，目录，扩展名，文件名称，文件名称）
console.log(path.parse(__filename))