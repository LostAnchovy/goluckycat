var Tasks = require('../models/task.js')

exports.create = (req, res) =>{
    Tasks.create({
        title: req.body.title,
        location: req.body.location,
        description: req.body.description,
        cost: req.body.costs
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
        res.status(501).send({ success: false, msg:'error updating product'})
    })
};