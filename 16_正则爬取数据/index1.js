// 0,------------------方法封装----------------------------------
let request = require('request')

function req(path) {
    return new Promise(function(resolve, reject) {
        request.get(path, function(err, response, body) {
            if (err) {
                reject(err)
            } else {
                resolve({ response, body })
            }
        })
    })
}

// 1,获取起始页的所有分类
let httpUrl = 'https://www.1905.com/vod/list/n_1_t_1/o3p1.html'

async function getClassUrl() {
    // 请求拿到爬取数据
    let { response, body } = await req(httpUrl)
        //console.log(body)
        // 解析正文内容
    let reg = /<span class="search-index-L">类型(.*?)<div class="grid-12x">/igs
    let result = reg.exec(body)[1]
    let reg1 = /<a href="javascript\:void\(0\);" onclick="location\.href='(.*?)';return false;" >(.*?)<\/a>/igs
    var res;
    while (res = reg1.exec(result)) {
        getMovies(res[1], res[2])
    }
}

getClassUrl()

// 2,获取分类里的电影链接
async function getMovies(url, movieType) {
    let { response, body } = await req(url)
    let reg = /<a class="pic-pack-outer" target="_blank" href="(.*?)" .*?><img/igs
    let arrList = []
    var res;
    while (res = reg.exec(body)) {
        arrList.push(res[1])
        getInfo(res[1])
    }
    //console.log(movieType, arrList)
}

// 3,根据电影链接获取电影的详细信息
async function getInfo(url) {
    let { response, body } = await req(url)
    console.log('--', body)
    let reg = /<span id="playerBoxIntroCon" class="active">(.*?)<a/igs
        //console.log('--', reg.exec(body))
    var res;
    let arrList = []
    while (res = reg.exec(body)) {
        arrList.push(res[1])
    }
    //console.log(arrList)
}