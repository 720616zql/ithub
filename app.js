// 搭建服务器
const express = require('express')
var bodyParser = require('body-parser')
var art = require('express-art-template')
const router = require('./route/router')
const app = express()
// 设置路由
app.listen(3000, ()=>{
    console.log('监听 3000')

})
// 静态资源管理 开放
app.use('/public', express.static('./public'))
app.use('/node_modules', express.static('./node_modules'))

app.engine('html', require('express-art-template'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)