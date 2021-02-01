let puppeteer = require('puppeteer')
let axios = require('axios')
let url = require('url')
let httpUrl = 'https://sobooks.cc/';

(async function(){
    // 开发测试阶段浏览器配置
let debugOptions = {
    // 设置视窗的宽高
    defaultViewport:{
        width:1200,
        height:800
    },
    // 设置为有界面，如果为true,即为无界面
    headless:false,
    // 设置放慢每个步骤的毫秒数
    slowMo:250
}
// 无头浏览器配置，效率更高（开发完后使用）
let options = {
    headless:true
}
// 开启一个浏览器 
let browser = await puppeteer.launch(debugOptions)

// 目标: 获取https://sobooks.cc/ 所有书名和电子书的链接
// 进入网站，获取整个网站列表页的页数
async function getAllNum(){
    let page = await browser.newPage()
      // 截取谷歌请求
      await page.setRequestInterception(true)
      // 监听请求事件，并对请求进行拦截
      page.on('request',interceptedRequest => {
          // 通过url模块对请求的地址进行解析
          let urlObj = url.parse(interceptedRequest.url())
          if(urlObj.hostname == "googleads.g.doubleclick.net"){
              // 如果是谷歌的广告请求，放弃此次请求
              interceptedRequest.abort()
          }else{
              interceptedRequest.continue()
          }
      })
    await page.goto(httpUrl)
    // 设置选择器，获取总页数
    let pageNum = await page.$eval('.pagination li:last-child span',(element) => {
        let text = element.innerHTML
        text = text.substring(1,text.length-2).trim()
        return text
    })
    page.close()
    return pageNum
}

let pageNum = await getAllNum()

// 获取列表页的所有链接
async function pageList(num){
    let pageListUrl = 'https://sobooks.cc/page/'+num
    let page = await browser.newPage()
      // 截取谷歌请求
      await page.setRequestInterception(true)
      // 监听请求事件，并对请求进行拦截
      page.on('request',interceptedRequest => {
          // 通过url模块对请求的地址进行解析
          let urlObj = url.parse(interceptedRequest.url())
          if(urlObj.hostname == "googleads.g.doubleclick.net"){
              // 如果是谷歌的广告请求，放弃此次请求
              interceptedRequest.abort()
          }else{
              interceptedRequest.continue()
          }
      })
    await page.goto(pageListUrl)
    // $eval 找一个符合条件的元素，$$eval 找所有符合条件的元素
    let arrList = await page.$$eval('.card .card-item .thumb-img>a',(elements) => {
       let arr = []
        elements.forEach((element,index) => {
            var obj = {
                href:element.getAttribute('href'),
                title:element.getAttribute('title')
            }
            arr.push(obj)
        })
        return arr
    })
    page.close()
    // 通过获取的数组的地址和标题去请求书籍的详情页
    arrList.forEach((pageObj,i) => {
        //getPageInfo(pageObj)
    })
    //return arrList
}
let pageArr = await pageList(1)
//console.log('pageArr',pageArr)
// 进入每个电子书的详情页获取下载电子书的网盘地址
async function getPageInfo(pageObj){
    let page = await browser.newPage()
    // 截取谷歌请求
    await page.setRequestInterception(true)
    // 监听请求事件，并对请求进行拦截
    page.on('request',interceptedRequest => {
        // 通过url模块对请求的地址进行解析
        let urlObj = url.parse(interceptedRequest.url())
        if(urlObj.hostname == "googleads.g.doubleclick.net"){
            // 如果是谷歌的广告请求，放弃此次请求
            interceptedRequest.abort()
        }else{
            interceptedRequest.continue()
        }
    })
    await page.goto(pageObj.href)
    //$() 只能获取属性，不能获取文本
    let eleA = await page.$('.dltable tr:nth-child(3) a:last-child')
    let aHref = await eleA.getProperty('href')
    aHref = aHref._remoteObject.value
    console.log('aHref',aHref)
}
getPageInfo({href:"https://sobooks.cc/books/14620.html"})
//
})()
