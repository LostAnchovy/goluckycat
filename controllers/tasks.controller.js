var Tasks = require('../models/task.js')
var jwt = require('jsonwebtoken');
var User = require('../models/user')
var decoded = require('jwt-decode');

exports.create = (req, res) =>{
    // Grabs the person who is currently logged in from the headers and assigns the creator id to the task
    var token =  getToken(req.headers)
    var dtoken = jwt.decode(token)
    var id = dtoken._id
    console.log('tasks', id)
    Tasks.create({
        title: req.body.title,
        location: req.body.location,
        description: req.body.description,
        cost: req.body.costs,
        creator: id
    }).then(newTask=>{
        res.json(newTask)
    }).catch(err=>{
        res.status(501).send({ success: false, msg: 'Tasks could not entered into DB' })
    })
}

exports.findAll = (req,res)=>{
    Tasks.find()
    .then((tasks)=>{
        res.json(tasks)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'could not retrieve tasks'})
    })
}

exports.delete = (req, res)=>{
    // only the creator or the admin should be the one who is able to delete the task.
    var id = req.params.taskId
    Tasks.remove({_id: req.params.taskId}).then(()=>{
        res.status(200).send({success: true, msg:`tasks ${id} was successfully deleted`})
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'can not remove tasks from DB'})
    })
}

exports.addProvider = (req, res)=>{
    var id = {_id: req.params.taskId}
    var token =  getToken(req.headers)
    var dtoken = decoded(token)
    var providerId = dtoken._id
    Tasks.findByIdAndUpdate(id, {$push: {Providers: providerId}}, { new: true }).then(user=>{
        res.json(user)
    })
    
}

exports.update = (req, res) => {
    var id = {_id: req.params.taskId}
	Tasks.findByIdAndUpdate(id,req.body,{new:true}) 
	.then((updatedTasks) => {
		res.json(updatedTasks)
	}).catch((err)=>{
        res.status(501).send({ success: false, msg:'error updating tasks'})
    })
};

exports.findTasks = (req, res) =>{
    var token = getToken(req.headers)
    var dtoken = jwt.decode(token)
    var creatorId = dtoken._id
    var id ={creator: creatorId}
    Tasks.find(id).populate('Providers').then(result=>{
        res.json(result)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'error finding user tasks'})
    })
}

exports.findOneTask = (req, res) =>{
    var id ={_id: req.params.taskId}
    Tasks.findOne(id).then(result=>{
        res.json(result)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'error finding user tasks'})
    })
}


getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};