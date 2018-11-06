var express = require('express')
   app = express();
   mongoose = require('mongoose')
   path = require ('path')
   session = require('express-session')
   bodyparser = require('body-parser')
   port = process.env.PORT || 4000
  //  config = require('./config/database')
   require('dotenv').config()

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use (express.static(path.join(__dirname,'./client/dist/goluckycat/')));


app.use(require('./routes/routes'))

mongoose.connect(process.env.CONFIG_DB,{
    useNewUrlParser: true
  }).then(res=>{
    console.log('Successfully connected to DB!')
  }).catch(err=>{
    res.send(401).send({error:true, msg:'error connecting to DB'})
  })


app.all("*", (req, res) => {
    res.sendFile(path.resolve('./client/dist/goluckycat/index.html'));
  });

app.listen(port, ()=> console.log('Listening on Port 4000!!'))