const express=require('express');
const app=express();
const https = require('https');
// const router=express();
const { mongoose }=require("./db/mongoose");
const { Register } = require('./db/models/register.model');

const fs=require("fs");

 const { Login } = require('./db/models/login.model');
const passport = require('passport');
const jwt=require("passport-jwt");
var jsonwebtoken = require('jsonwebtoken');
// const cors=require("cors");
const path=require('path');
require('./setUp');
const session=require('express-session');
const pass=require('./passport-config')(passport);
const utils=require('./utils/utils');
const passportConfig = require('./passport-config');
// app.use(cors());
const axios=require('axios');
require("./googleAuth");
const { getMaxListeners } = require('process');
require('dotenv').config();

// router.use(session({secret:"cats"}));
// router.use(passport.initialize());
app.use(passport.initialize());
app.use(session({secret:"cats"}));
// router.use(passport.session());
app.use(passport.session());
// router.use(express.json());
app.use(express.json());
// router.use(express.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));







app.use(function(req,res,next){
    req.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Headers", 'Origin, Content-Type, X-Auth-Token');
    next();
})





// let query={email:req.body.email,pass:req.body.pass};
//         db.collection("form_details").find(query).toArray(function(err,result){
//            if(err)
//            throw err;
           
          
//            if(!result.length)
          
//     {

//            db.collection("form_details").insertOne(newNote,function(err,db){
//              if(err)
//              {
//                  throw err;
//              }
//               newNote.save();
//              console.log("new data inserted");
//               res.redirect("/login");
          
           

//            })
//        }
//        else{
//            console.log("data exists");
//            res.redirect("/reg");
//        }
          

         
//        })  


function isLoggedIn(req,res,next){
    req.user?next():res.sendStatus(401);
}


// let saltHash;
 let salt="";
let hash;
let name;
let changeName;
app.post('/register',(req,res)=>{
   // res.send('<a href="/auth/google">Authenticate</a>')
    saltHash=utils.genPassword(req.body.password);
    salt=saltHash.salt;
    hash=saltHash.hash;
     name=req.body.name;

    const newUser=new Register({
        name:name,
        email:req.body.email,
       // password:req.body.password,
        password:hash,
        // hash:hash,
         salt:salt
    });
   // const userData = Register.findById({name})
   
      
       

    newUser.save()
    .then((user)=>{
        console.log(user);
        changeName=user.name;
        const jwt=utils.issueJWT(user);
        res.json({success:true,user:user,token:jwt.token,expiresIn:jwt.expires});
    })
    .catch(err=>console.log(err));


   
       

    // newUser.save()
    // .then((user)=>{
    //     console.log("success");
    //     const jwt=utils.issueJWT(user);
    //     res.json({success:true,user:user,token:jwt.token,expiresIn:jwt.expires});
    // })
    // .catch(err=>console.log(err));
})

let id;
app.post('/login',(req,res,next)=>{
    
    id={name:req.body.name}
    Register.findOne(id)
 
    
    .then((user)=>{
     
        console.log(user);
        if(!user){
            res.status(401).json({success:false,msg:"could not find user"});
        }
         const isValid=utils.validPassword(req.body.password,user.password,user.salt);
        //const isValid=utils.validPassword(req.body.password,hash,salt);
   
        if(isValid){
            
            const tokenObject=utils.issueJWT(user);
            res.status(200).json({success:true,user:user,token:tokenObject.token,expiresIn:tokenObject.expires});
            // res.redirect("auth/google");
           
        }
        else{
            res.status(401).json({success:false,msg:"you entered the wrong password"});
        }
    })
    .catch(err=>{
        next(err);
    })
   
   })
   app.get('/profile',passport.authenticate('jwt',{session:false}),(req,res)=>{
    // localStorage.getItem("NAME");
    // localStorage.getItem("PASSWORD");
  
    console.log(id);
    Register.findOne(id).then(user=>{
        res.send(user);
    })
    //res.json(id.name);
    console.log("profile");
    
   app.post('/profile-edit',(req,res)=>{
       console.log(req.params.name);
    // let newup=new update({
        
    //     myName:req.body.name,
    //     email:req.body.email,
    //     password:req.body.password
        
    // })
    //    let email=req.body.email;
    //    let newname=changeName;
    //    const name=req.body.name;
       console.log("profile-edit");
      // var newvalues = { $set: {name:req.body.name} };
     
       Register.findOne({ email:req.body.email})
       .then(res=>{
           console.log(res);
          res="helloothere";
           
       })
   })
    
   
})


// app.use(function(req,res,next){
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Accept-Control-Allow-Origin","*");
//     res.header("Accept-Control-Allow-Methods","GET,POST,OPTIONS,DELETE,PUT");
//     res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
//     res.header("Access-Control-Allow-Headers", 'Origin, Content-Type, X-Auth-Token');
//     next();
// })

//  app.get('/googleSignIn',(req,res)=>{
    //  res.setHeader("Access-Control-Allow-Origin","https://localhost/4200/googleSignIn");
    // axios.get("http://localhost:5000/auth/google",passport.authenticate('google',{scope:['email','profile',"https://mail.google.com/"]}))
    //   res.redirect("/google")
    
    //  console.log("Signin");
    //  res.render("/auth/google",{})
//    res.send('<a href="/auth/google">Authenticate</a>')
  // res.send("auth");
//  })

app.get("/google",passport.authenticate('google',{scope:['email','profile']}))


app.get('/protected',isLoggedIn,(req,res)=>{
    res.send(`Hello ${req.user.displayName}`);
})


app.get("/google/callback",
passport.authenticate('google',{
    successRedirect:"/protected",
    failureRedirect:"/auth/failure"
}));

app.get("/auth/failure",(req,res)=>{
    res.send("Something went wrong");
})

app.get("/logout",(req,res)=>{
    req.logout();
    req.session.destroy();
    res.send("Logged Out!!");
})



// app.set('port',process.env.PORT||3000||4200);
// app.set('port',3000||4200);


// app.listen(app.get('port'));
// https.listen(4200,()=>{
//     console.log("running on port 4200");
// })
// app.listen
const httpsOptions={
    cert:fs.readFileSync(path.join(__dirname,'server.crt')),
    key:fs.readFileSync(path.join(__dirname,'server.key'))
}
const server=https.createServer(httpsOptions,app);
    server.listen(3000);
