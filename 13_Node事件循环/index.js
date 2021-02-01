// Node 事件循环
// Node 是单线程单进程的程序
// 1，引入event模块
let events1 = require('events')
let fs = require('fs')
// 2, 创建 eventEmitter 对象
let ee = new events1.EventEmitter()
// 3,事件绑定 (通过相同事件名称，去统一触发)
ee.on('helloSuccess',function(eventMsg){
    console.log('1,吃宵夜!!!',eventMsg)
})
ee.on('helloSuccess',function(eventMsg){
    console.log('2,打游戏!!!',eventMsg)
})
ee.on('helloSuccess',function(eventMsg){
    console.log('3,学习!!!',eventMsg)
})
// fs.readFile('hello.txt',{flag:'r',encoding:'utf-8'},function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//          // 4,事件的触发
//         ee.emit('helloSuccess',data)
//     } 
// })

// 操作封装
function ReadFile(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{flag:'r',encoding:'utf-8'},function(err,data){
            if(err){
               reject(err)
            }else{
                 // 4,事件的触发
                 resolve(data)
            } 
        })
    })
}

async function ReadFileList(){
    let data = await ReadFile('hello.txt')
    ee.emit('helloSuccess',data)
}
ReadFileList()