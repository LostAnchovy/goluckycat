var mongoose = require('mongoose')
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
    // tasks: [{ type: Schema.Types.ObjectId, ref: 'Tasks' }]
},{timestamps: true });

var Tasks = mongoose.model('Tasks', tasksSchema)
module.exports = Tasks;