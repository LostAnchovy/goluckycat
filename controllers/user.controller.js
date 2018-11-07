var User = require('../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var decoded = require('jwt-decode');
var crypto = require('crypto');
var async = require('async');
var nodemailer = require('nodemailer')
var user = require('../models/user')

exports.create =(req, res) =>{
    user.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        category: req.body.category
    }).then(user=>{
        var token = jwt.sign({ _id: user._id, firstName: user.first_name, isAdmin: user.isAdmin }, process.env.SECRET, { expiresIn: '1d' });
        res.json({ success: true, token: token, user: user })
    }).catch(err=>{
        res.status(501).send({ success: false, msg: 'Please try another Email'})
    })
}

 exports.findAll = (req, res)=>{
     user.find().then(users=>{
         res.json(users)
     }).catch(err =>{
        res.status(404).send({ error: 'could not retrieve user' })
     })
 }

 exports.delete = (req, res) => {
    var id = req.params.userId
    user.remove({ _id: req.params.userId }).then(() => {
        res.status(200).send({ success: true, msg: `user id:${id} was successfully deleted` })
    }).catch((err) => {
        res.status(401).send({ success: false, msg: 'error could not remove user from DB' })
    })
}
