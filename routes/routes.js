var express = require('express')
var router = express.Router()
var Tasks = require('../controllers/tasks.controller')
var Users = require('../controllers/user.controller')
// import controllers on to routes

router.post('/api/newtasks', Tasks.create)
router.get('/api/tasks/all', Tasks.findAll)
router.delete('/api/task/:taskId', Tasks.delete)
router.put('/api/task/:taskId', Tasks.update)
router.get('/api/task/:id', Tasks.findTasks)

router.post('/api/newuser', Users.create)
router.get('/api/users/all', Users.findAll)
router.delete('/api/user/:userId', Users.delete);
// router.get('/api/user/:id', Users.findOne)



router.post('/signin', Users.signin)
router.post('/resetpassword', Users.reset)
router.post ('/reset/:token', Users.resetconfirm)
router.get ('/user/:token', Users.reset_password)

module.exports = router