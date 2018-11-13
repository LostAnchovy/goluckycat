var Tasks = require('../models/task.js')
var jwt = require('jsonwebtoken');
var User = require('../models/user')

exports.create = (req, res) =>{
    var token = req.body.token || req.query.token || getToken(req.headers)
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
        // need to referenece the creator of the tasks and push it into the created field
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
    var id = req.params.taskId
    Tasks.remove({_id: req.params.taskId}).then(()=>{
        res.status(200).send({success: true, msg:`tasks ${id} was successfully deleted`})
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'can not remove tasks from DB'})
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
    var id ={creator: req.params.id}
    Tasks.find(id).then(result=>{
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