// axios请求库
let axios = require('axios')
    //let request = require('request')
    // console.log('axios库', axios)
let httpUrl = "https://www.dytt8.net/index.htm"
axios.get(httpUrl).then(function(res) {
    console.log(res)
})