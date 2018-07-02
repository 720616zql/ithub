const express = require('express')
const router = express.Router()
// 挂载路由
module.exports = router

const index = require('../controllers/index.js')
const user = require('../controllers/user.js')
const topic = require('../controllers/topic.js')

//首页路由器
router.get('/', index.showIndex)

// 用户路由
router
    .get('/signin', user.showSignin)
    .post('/signin', user.handleSignin)
    .get('/signup', user.showSignup)
    .post('/signup', user.handleSignup)
    .post('/signout', user.handleSignout)
    
// 话题路由
router
    .get('/topic/create', topic.showTopic)
    .post('/topic/create', topic.handleTopic)
    .get('/topic/:topicID', topic.showTopicID)
    .get('/topic/:topicID/edit', topic.showEdit)
    .post('/topic/:topicID/edit', topic.handleTopicID)
    .post('/topic/:topicID/delete', topic.hanleDelete)