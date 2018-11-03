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

// app.use(require('./routes/routes'))


app.all("*", (req, res) => {
    res.sendFile(path.resolve('./client/dist/goluckycat/'));
  });

app.listen(port, ()=> console.log('Listening on Port 4000!!'))