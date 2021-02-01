// cheerio 爬取音乐
// 目标：下载音乐
// 1，获取音乐相关的信息，通过音乐相关的信息获取 mp3 列表

let axios = require('axios')
let cheerio = require('cheerio')
let fs = require('fs')
// 选定的网页路径
let httpUrl = 'https://www.xiami.com/list?page=1&query=%7B%22dataType%22%3A%22recommend%22%7D&scene=main&type=collect'
// 拿到总的页面数据
axios.get(httpUrl).then((res) => {
    // 页面数据解析
    let $ = cheerio.load(res.data)
    let obj = {}
    $('.adaptive-list>.collect-item').each((index,item) => {
        let mp3Url = 'https://ww.xiami.com'+$(item).find('.wrapper>a').attr('href')
        let name = $(item).find('.info>.name>a').text()
        let author = $(item).find('.info>.author>a').text()
        obj.url = mp3Url
        obj.name = name
        obj.author = author
        console.log('数据:',obj)
        // 具体的文件下载保存
        downLoad(obj)
    })
})
// 文件下载，保存到指定目录下操作
function downLoad (obj){
    axios.get(obj.url,{responseType:'stream'}).then(function(res){
        // 写入流方式进行
        let ws = fs.createWriteStream('./mp3/'+obj.name+'.mp3')
        res.data.pipe(ws)
    })
}