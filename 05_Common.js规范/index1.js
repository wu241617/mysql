let a = require('./index')
let $ = require('jquery')
    // 1,在没有任何内容导出去的情况下获取某个文件的内容，会得到一个空对象
    // 2,require 获取文件路径时，可以不加后缀名，默认为 js
    // 3，模块仅在第一次被使用时，执行一次，之后依赖于缓存
console.log(a)
console.log($)