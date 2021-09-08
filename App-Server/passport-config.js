

// var authModel = require('./models/auth-model');
// var JwtStrategy = require('passport-jwt').Strategy;
// var ExtractJwt = require('passport-jwt').ExtractJwt;

// var options = {};
// options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// options.secretOrKey = 'secret123'; 



// passport.use(new JwtStrategy(options, function(jwtPayload, done) {
//     authModel.findById(jwtPayload.sub, function(err, result) {
//         if (err) {
//             return done(err, false);
//         }

//         if (result.length === 0) {
//             return done(null, false);
//         }

//         return done(null, result[0]);
//     })
// }))













const fs=require('fs');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;

  
  const passport=require('passport');
  const jwt=require('jsonwebtoken');

// const JwtStrategy=require('passport-jwt').ExtractJwt;

// const  ExtractJwt  = require('passport-jwt').Strategy;


const path=require('path');
const  Register=require('mongoose').model('Register');

const pathToKey=path.join(__dirname,'/id_rsa_priv.pem');
const PUB_KEY=fs.readFileSync(pathToKey,'utf-8');

// const passportJWTOptions={
//     jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey:PUB_KEY||secret phrase,
//     issuer:"",
//     audience:"",
//     algorithms:['RS256'],
//     ignoreExpiration:false,
//     passReqToCallback:false,
//     jsonWebTokenOptions:{
//         complete:false,
//         clockTolerance:'',
//         maxAge:'2d',
//         clockTimestamp:'100',
//         nonce:'String here for OpenId'
//     }
// }


// const options={

    //jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
// jwtFromRequest:ExtractJwt.fromAuthHeaderWithScheme("jwt"),
//  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
// secretOrKey:PUB_KEY,
// secretOrKey:"lekha",
// algorithm:'RS256'

// };


// const strategy=new JwtStrategy(options,(jwt_payload,done)=>{
//     // Login.findOne({_id:payload.sub})
//     Login.findById({id: jwt_payload.sub}
//     .then((loggedUser)=>{
//         if(loggedUser){
//             return done(null,loggedUser);
//         }
//         else
//         {
//             return done(null,false);
//         }
//     })
//     .catch(err=>done(err,null)));
// })



// module.exports=(passport)=>{
//     passport.use(strategy);
// }





module.exports = function (passport) {
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
    //opts.secretOrKey = 'secret'
    opts.secretOrKey=PUB_KEY
    opts.algorithms=['RS256']

passport.use(new JwtStrategy(opts, (payload, done) => {

    Register.findOne({_id:payload.sub}, (err, user) => {

        if (err) {
            return done(err, false)
        }

        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }

    })

}))
}


