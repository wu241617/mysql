// path 模块获取路径相关的信息
let path = require('path')
let fs = require('fs')
let strPath = 'https://blog.csdn.net/weixin_44463441/article/details/111830910?utm_medium=distribute.pc_feed.477498.nonecase&depth_1-utm_source=distribute.pc_feed.477498.nonecase'
// 获取路径信息扩展名
let info = path.extname(strPath)
console.log('路径信息扩展名: ',info)
// 把一个路径或路径片段的序列解析为一个绝对路径
let arr = ['/sxt','qianduan','zhongji']
let info1 = path.resolve(...arr)
console.log('绝对路径: ',info1)
//__dirname 获取当前文件执行目录的完整路径
console.log(__dirname)
let info2 = path.join(__dirname,'sxt','qianduan','zhongji')
console.log('info2:',info2)
// 解析出请求目录 (静态页面返回)
let currentPath = 'http://www.sxt.com/xinwen/guonei.html'
let arr1 = currentPath.split('/')
let newArr = arr1.slice(arr1.length-2,arr1.length)
let filePath = path.join(__dirname,...newArr)
fs.readFile(filePath,{flag:'r',encoding:'utf-8'},function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log('文件内容为:',data)
    }
})