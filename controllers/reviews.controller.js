const reviews = '../models/reviews.js'

exports.create = (req, res) =>{
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


