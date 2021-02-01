// Node 中核心模块，url 网络路径
// url 核心模块在为我们解析url地址时提供了非常方便的API，常见包含有查询字符串的url地址解析
let url = require('url')
console.log('内置url模块', url)
let httpUrl = 'https://www.bilibili.com/video/BV1i7411G7kW?p=9'
let urlObj = url.parse(httpUrl)
console.log('解析出来的路径对象', urlObj)

let targetUrl = 'http://www.com/'
let oldUrl = './sxt/qianduan/laochen.html'
let newUrl = url.resolve(targetUrl, oldUrl)
console.log('路径合成', newUrl)