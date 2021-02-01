const fs = require('fs')
fs.unlink('../08_文件写入/content.txt', function() {
    console.log('删除文件成功！！！')
})