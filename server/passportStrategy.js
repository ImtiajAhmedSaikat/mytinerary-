const JwtStrategy = require("passport-jwt").Strategy;

const ExtractJwt = require("passport-jwt").ExtractJwt;

const mongoose = require("mongoose");

const User = require("./model/userModel");
const passport=require("passport")

const key = require("./keys");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey= key.secretOrKey;
module.exports = passport.use(

        new JwtStrategy(opts, (jwt_payload, done) => {
    
            User.findById(jwt_payload.id)
    
            .then(user => {
    
              if (user) {
    
                return done(null, user);
    
              }
    
              return done(null, false);
    
            })
    
            .catch(err => console.log(err));
    
        })
    
      );

    
        
        

passport.use(new GoogleStrategy({
    clientID: key.clientID,
    clientSecret: key.clientSecret,
    callbackURL: "http://localhost:5000/auth/google/redirect"
  },
  function(accessToken, refreshToken, email, done) {
      console.log( email.emails[0].value)
      User.findOne({ email: email.emails[0].value }).then(currentUser => {
        if (currentUser) {
          //login with google
          console.log("user already exists");
          
          
          currentUser.save().then(res =>{
            
             done(null, res)
            

          } )
          .catch(err=>console.log(err.message))
      }
      else{
            const newUser = new User({
              name: email.displayName,
              email: email.emails[0].value,
              image: email.photos[0].value,
              googleAuth: true,
              
              
            });
          newUser.save().then(user => {
            done(null, user);
          });
      }
   });
 }
));

    
    