// Node 爬取表情包
// cheerio 是 jquery 核心功能的一个快速灵活而又简单的实现，主要是为了在服务器端需要对DOM元素进行操作的地方
// cheerio 是 node.js 的提取页面模块，为服务器特别定制
// 1，安装 npm i cheerio 
// 2, 导入 require('cheerio)
const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

let httpUrl = 'https://www.doutula.com/article/list/?page=1'
axios.get(httpUrl).then((res) => {
    // cheerio 解析 html
    let $ = cheerio.load(res.data)
    $('#home .col-sm-9>a').each((index,item) => {
        let pageUrl = $(item).attr('href')
       // let title = $(item).find('.random_title').text()
        // fs.mkdir('./img/pic-'+index,(err) => {
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log('图片路径创建成功'+'./img/pic-'+index)
        //     }
        // })
        parsePage(pageUrl,index)
    })
})

async function parsePage(url,index){
    let res = await axios.get(url)
    let $ = cheerio.load(res.data)
    $('.pic-content img').each((i,item) => {
        let imgUrl = $(item).attr('src')
        let extName = path.extname(imgUrl)
        let imgPath = './img/pic-'+index+'-'+'M'+'-'+i+extName
        // 创建写入图片流
        let ws =  fs.createWriteStream(imgPath)
        axios.get(imgUrl,{responseType:'stream'}).then((res) => {
           res.data.pipe(ws)
           res.data.on('close',()=>{
               ws.close()
           })
        })
    })
}