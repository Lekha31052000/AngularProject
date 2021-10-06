
const express=require('express');
const app=express();

const { mongoose }=require("./db/mongoose");
const { Register } = require('./db/models/register.model');
const { List } = require('./db/models/list.model');
const fs=require("fs");

 const { Login } = require('./db/models/login.model');
const passport = require('passport');
const jwt=require("passport-jwt");
var jsonwebtoken = require('jsonwebtoken');
const cors=require("cors");
const path=require('path');
require('./setUp');
const session=require('express-session');

app.use(cors({
    origin:"http://localhost:4200",
    credentials:true,
  
}));
const axios=require('axios');

const { getMaxListeners } = require('process');
const { get } = require('http');
require('dotenv').config();


const pass=require('./passport-config')(passport);
const utils=require('./utils/utils');
const passportConfig = require('./passport-config');
app.use(passport.initialize());
app.use(session({secret:"cats"}));

app.use(passport.session());

app.use(express.json());

app.use(express.urlencoded({extended:true}));







app.use(function(req,res,next){
    req.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Headers", 'Origin, Content-Type, X-Auth-Token');
  
    res.header("Access-Control-Max-Age: 86400")
    next();
})




 let salt="";
let hash;
let name;
let logmail;
app.post('/register',(req,res)=>{
 
    saltHash=utils.genPassword(req.body.password);
    salt=saltHash.salt;
    hash=saltHash.hash;
     name=req.body.name;

    const newUser=new Register({
        name:name,
        email:req.body.email,
        password:hash,
        age:req.body.age,
         salt:salt
    });
    newUser.save()
    .then((user)=>{
        console.log(user);
        changeName=user.name;
        emailId=user.email
        const jwt=utils.issueJWT(user);
        res.json({success:true,user:user,token:jwt.token,expiresIn:jwt.expires});
        
    })
    .catch(err=>console.log(err));

})









let myid;
app.post('/todoList',(req,res)=>{
     
        // if(myMail=="lekhal.17it@kongu.edu"){

            const newList =new List({
                id:req.body.id,
                title:req.body.title,
                completed:req.body.completed,
                email:myMail
                
            });
console.log(idd);
            newList.save()
            .then((list)=>{
                console.log("kk",list);
                res.send(list)
                myid=list._id;
                console.log(list._id)
                console.log(list.title);
                // res.send(list);
                
                
            })
            .catch(err=>console.log(err));
        
        // }
    
})





let val;
app.get('/display/:email',(req,res)=>{
    val=req.params.email;
     
    List.find({email:val}).then(value=>{

        res.json(value);
    })

})

app.get('/delete/:title',(req,res)=>{
    let tit=req.params.title
    List.findOneAndDelete({title:tit}).then(res=>{
        console.log("deleted");
       
    })
})
app.get('/updated/:title/:comp',(req,res)=>{
    console.log("update")
    let value=req.params.title;
    let completed=req.params.comp;
    console.log(completed);
    console.log(value)
    List.findOneAndUpdate({title:value},{completed:completed},{new:true},function(err,data){
        console.log("edit") 
        if(err){
            throw err;

        }
        if(data){
            console.log(data);
            console.log("editted")
            
              res.send(data)
        }
    })

})






let id;
let idd;
let token;

let valid=false;
app.post('/login',(req,res,next)=>{
    console.log("loginn");
    id={name:req.body.name}
    // let ltoken=localStorage.getItem("token");
    Register.findOne(id)
 
    
    .then((user)=>{
      
        console.log(user._id);
        idd=user._id;
        console.log(idd);
        token=user.token;
        if(!user){
            res.status(401).json({success:false,msg:"could not find user"});
        }
         const isValid=utils.validPassword(req.body.password,user.password,user.salt);
       
   
        if(isValid){
          valid=true;  
            const tokenObject=utils.issueJWT(user);
            res.status(200).json({success:true,user:user,token:tokenObject.token,expiresIn:tokenObject.expires});

           
        }
        else{
            res.status(401).json({success:false,msg:"you entered the wrong password"});

        }
    })
    .catch(err=>{
        next(err);
    })
   
  
})

let emailId;

let maill;

app.post("/user",(req,res)=>{
    console.log(req.body);
})
let myMail;
   app.get('/profile/:email',(req,res)=>{


console.log(req.params.email)
 myMail=req.params.email;

    Register.findOne({email:myMail}).then(user=>{
        res.send(user);
        maill=user.email;
        console.log(maill);
    })
  
    console.log("profile");
}) 
   


app.post('/profileEdit',(req,res)=>{
   
    console.log("hello");
    console.log(req.body);
    let name=req.body.name;
    let email=req.body.email;
    let age=req.body.age;

console.log(myMail);
  
    Register.findOneAndUpdate(maill,{name:name,email:email,age:age},{new:true},function(err,data){
        console.log("edit")
        if(err){
            throw err;

        }
        if(data){
            console.log(data);
            console.log("editted")
             res.send(data)
        }
    })

})


app.listen(3000,()=>{
    console.log("running on port 3000");
})

