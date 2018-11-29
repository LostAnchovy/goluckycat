var express = require('express')
var router = express.Router()
var Tasks = require('../controllers/tasks.controller')
var Users = require('../controllers/user.controller')
// import controllers on to routes

router.post('/api/newtasks', Tasks.create)
router.get('/api/tasks/all', Tasks.findAll)
router.delete('/api/task/:taskId', Tasks.delete)
router.put('/api/task/:taskId', Tasks.update)
router.put('/api/accept/:taskId', Tasks.accepted)
router.put('/api/reactivate/:taskId', Tasks.reactivate)
router.get('/api/task/:creatorId', Tasks.findTasks)
router.get('/api/onetask/:taskId', Tasks.findOneTask)
router.post('/api/task/:taskId', Tasks.addProvider)

router.post('/api/newuser', Users.create)
router.get('/api/users/all', Users.findAll)
router.delete('/api/user/:userId', Users.delete);
router.get('/api/user/:id', Users.findOne)
router.put('/api/user/:userId', Users.update)

router.post('/signin', Users.signin)
router.post('/resetpassword', Users.reset)
router.post ('/reset/:token', Users.resetconfirm)
router.get ('/user/:token', Users.reset_password)

module.exports = router