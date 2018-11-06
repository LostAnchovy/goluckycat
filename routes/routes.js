var express = require('express')
var router = express.Router()
var Tasks = require('../controllers/tasks.controller')
// import controllers on to routes

router.post('/api/newtasks', Tasks.create)
router.get('/api/tasks/all', Tasks.findAll)
router.delete('/api/task/:taskId', Tasks.delete)


module.exports = router