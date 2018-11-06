var mongoose = require('mongoose')
var Schema = mongoose.Schema
const userSchema = mongoose.Schema({
    first_name:{
        type: String,
    },
    last_name:{
        type: String,
    },
    email:{
        type: String,
        unique: true
    },
    user_name:{
        type: String,
        unique: true 
    },
    password:{
        type: String,        
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    resetPasswordToken:{
        type: String
    },
    resetPasswordExpires:{
        type: Date
    },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Tasks' }]
},{timestamps: true });

var User = mongoose.model('User', userSchema)
module.exports = User;
