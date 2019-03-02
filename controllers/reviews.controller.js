var reviews = require('../models/reviews.js')

exports.create= (req, res) =>{
    // res.json({success:true, msg: 'this request worked!'})
    reviews.create({
        date: req.body.date,
        rate: req.body.rate,
        review: req.body.review,
    }).then(result=>{
        res.json(result)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg: 'Could not add review' })
    })
}

exports.findAll =(req,res)=>{
    reviews.find().then(result=>{
        res.json(result)
    }).catch((error)=>{
        res.status(501)
    })
}

exports.delete = (req, res)=>{
    var id = req.params.reviewId
    reviews.findByIdAndDelete({_id:req.params.reviewId}).then(()=>{
        res.status(200).send({success:true,msg:`review ${id} was successfully deleted` })
    }).catch((error)=>{
        if(error)throw err 
    })
}


