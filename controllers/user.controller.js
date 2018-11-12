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
        res.status(501).send({ success: false, msg: 'Please check all fields or try another Email'})
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

exports.signin = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(401).send({ login: false, msg: 'please enter a email and password' })
    }
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) throw err
        if (!user) {
            res.status(403).send({ success: false, msg: 'Authentication failed. User not found.' })
        }
    }).then((user) => {
        let hash = user.password
        console.log(hash)
        //need to put in a check if user email is not found in the DB
        //error fix: npm rebuild bcrypt --build-from-source
        bcrypt.compare(req.body.password, hash, (err, result) => {
            console.log('forms password:', req.body.password)
            if (result) {
                var token = jwt.sign({ _id: user._id, firstName: user.first_name, isAdmin: user.isAdmin }, process.env.SECRET, { expiresIn: '1d' });
                res.json({ success: true, token: token, user: user })
            } else {
                res.status(403).send({ sucess: false, msg: 'Authentication failed. Wrong password' })
            }
        })
    })
}

exports.update = (req, res) => {
    var id = { _id: req.params.userId }
    User.findByIdAndUpdate(id, req.body, { new: true })
        .then((updatedUser) => {
            res.json(updatedUser)
        }).catch((err) => {
            res.status(404).send({ success: false, msg: 'can not update user' })
        })
};

// Need to pull all the task that are related to the user and display
