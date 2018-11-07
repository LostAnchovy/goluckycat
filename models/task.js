var mongoose = require('mongoose')
var User = require ('../models/user')
var Schema = mongoose.Schema
const tasksSchema = mongoose.Schema({
    title:{
        type: String,
    },
    location:{
        type: String,
    },
    description:{
        type: String,
    },
    cost:{
        type: Number,
    },
    User: [{ type: Schema.Types.ObjectId, ref: 'User' }]
},{timestamps: true });

var Tasks = mongoose.model('Tasks', tasksSchema)
module.exports = Tasks;