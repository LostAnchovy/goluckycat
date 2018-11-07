var express = require('express')
var router = express.Router()
var Tasks = require('../controllers/tasks.controller')
var Users = require('../controllers/user.controller')
// import controllers on to routes

router.post('/api/newtasks', Tasks.create)
router.get('/api/tasks/all', Tasks.findAll)
router.delete('/api/task/:taskId', Tasks.delete)
router.put('/api/task/:taskId', Tasks.update)

router.post('/api/newuser', Users.create)
router.get('/api/users/all', Users.findAll)
router.delete('/api/user/:userId', Users.delete);


module.exports = router