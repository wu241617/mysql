// puppeteer 库的使用(无头浏览器)
let puppeteer = require('puppeteer')
// 打开浏览器
async function test(){
    // puppeteer.launch(options) 实例开启浏览器
    // 可以传入一个options对象，配置为无界面浏览器（性能更高，更快），也可以配置为有界面浏览器（一般用于调试开发）
    let options = {
        // 设置为有界面，为true，为无界面
        headless:false,
        // 设置视窗的宽高
        defaultViewport:{
            width:1200,
            height:800
        }
    }
    let browser = await puppeteer.launch(options)
    // 打开页面,返回新的页面对象
    let page = await browser.newPage()
    // 访问页面
    await page.goto('https://www.dytt8.net/index.htm')
    // 截屏
    await page.screenshot({path:'screenshot.png'})
    // 获取页面内容
    page.$$eval('#menu li a',(elements) => {
        elements.forEach((item,index) => {
            console.log(item.innerHTML)
        })
    })
    page.on('console',(e) => {
        console.log(e)
    })
}
test()
