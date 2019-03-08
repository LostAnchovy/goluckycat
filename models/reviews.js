var mongoose = require('mongoose')
var Schema = mongoose.Schema
const reviewsSchema = mongoose.Schema({
    date:{
        type: Date,
    },
    rate:{
        type: Number,
    },
    review:{
        type: String,
    },
    Provider: [{ type: Schema.Types.ObjectId, ref: 'User' }]
},{timestamps: true });
var Reviews = mongoose.model('Reviews', reviewsSchema)
module.exports = Reviews;



// var mongoose = require('mongoose');
// var Schema = mongoose.Schema
// const reviewsSchema = mongoose.Schema({
//     date:{
//         type: Date,
//     },
//     rate:{
//         type: Number,
//     },
//     review:{
//         type: String,
//     },
//     User: [{ type: Schema.Types.ObjectId, ref: 'User' }]
// },{timestamps: true });

// var Review = mongoose.model('Review', reviewsSchema)
// module.exports = Review;