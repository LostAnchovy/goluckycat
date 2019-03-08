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
    password:{
        type: String,        
    },
    phone:{
        type: Number,        
    },
    category:{
        type: String,
        enum:['user', 'provider', 'admin'],
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
    rating:{
        type: Number,
        default: null
    },
    bio:{
        type: String,
        default: null
    },
    bio2:{
        type: String,
        default: null
    },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Tasks' }],
    reviews:[{type: Schema.Types.ObjectId, ref: 'Reviews'}]
},{timestamps: true });

var User = mongoose.model('User', userSchema)
module.exports = User;
