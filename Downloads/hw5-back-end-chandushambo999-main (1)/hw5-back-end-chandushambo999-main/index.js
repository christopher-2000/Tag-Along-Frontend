const app = express()
var User = require('./user');
const mongoose = require('mongoose');
const mul = require("multer")
var upload=mul({dest:"public/uploads/"});
const express = require('express');
const fs = require("fs")
const bodyParser = require("body-parser")
var url = "mongodb+srv://swadesh:reddy@cluster0.ldofq.mongodb.net/User?retryWrites=true&w=majority";


mongoose.connect(url, { useNewUrlParser: true });

mongoose.connection.on('connected', () => { console.log("DB Connectedd.........") })

mongoose.connection.on('error', (err) => { console.log(err) });

app.post('/userlogin',async (req,res)=>{
  const user = await User.find({"username": req.body.username,"password":req.body.password});
  if (user.length <= 0) {
    res.json({ message: "Not authenticated. Check username password", code: 401 })
      return 
    }
   res.json({
    code:200,
    data:"Login Successfull....."
  })
})

app.post('/uploadfile' , upload.single("file"), (req , res)=>{
    res.json(req.file)
})

app.get('/retreivefile' , (req , res)=>{
  const file = `${__dirname}/${req.query.filepath}`;
  res.download(file);
})

app.listen(8888 , ()=> console.log('Server: http://localhost:8888'))