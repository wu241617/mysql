// Node 中输入和输出
// 1, 导入相关包
let { WriteFile } = require('../08_文件写入/index')
let readline = require('readline')
    // 2, 实例化接口对象
let r1 = readline.createInterface({
        output: process.stdout,
        input: process.stdin
    })
    // 3, question 事件方法
r1.question('你的姓名？', function(answer) {
        console.log('姓名是', answer)
            // 不加 close 程序不会结束
        r1.close()
    })
    // 4,close 结束事件
r1.on('close', function() {
        // 结束程序
        process.exit(0)
    })
    // promise 异步封装
function question1(title) {
    return new Promise(function(resolve, reject) {
        r1.question(title, function(answer) {
            resolve(answer)
        })
    })
}

async function createPackage() {
    let name = await question1('您的包名叫什么?')
    let description = await question1('您的包如何描述?')
    let version = await question1('程序版本是什么?')
    let author = await question1('您的包作者是谁?')
    let content = `{
        "name": "${name}",
        "version": "${version}",
        "author": "${author}",
        "description": "${description}",
        "scripts": {
          "serve": "vue-cli-service serve",
          "build": "vue-cli-service build",
          "lint": "vue-cli-service lint"
        }
      }
      `
    await WriteFile('package.json', content)
        // 最终写完内容，关闭输入进程
    r1.close()
}
createPackage()