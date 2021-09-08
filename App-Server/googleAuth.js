const passport=require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID="972794358823-086tkmotjm3q53oeuloppe9558nri1j4.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="wpS9QQaNVkQg7_noMtyYKFc4"

passport.use(new GoogleStrategy({ 
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    // clinetId:"",
    // clientSecret:"c63b_wdc4yJxh1zNxfJFZ5XY" ,
    callbackURL: "https://localhost:3000/google/callback",
    passReqToCallback:true
  },
  function(request,accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, profile);
    // });
  }
));

passport.serializeUser(function(user,done){
    done(null,user);
});

passport.deserializeUser(function(user,done){
    done(null,user);
});