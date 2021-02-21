let express = require('express')
let cors = require('cors')

let app = express()
app.use(cors())


app.get('/login', function(req, res) {
    console.log(req.query)
    res.json(req.query)
})

app.listen(3000, function() {
    console.log('服务器启动成功，可通过 http://127.0.0.1:3000 访问')
})