const passport = require("passport");
const User = require("../models/User");
const dotenv = require('dotenv');
const JwtStrategy =  require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
dotenv.config();
const options ={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_JWT
};
const strategy = new JwtStrategy(options, (payload, done) =>{
   User.findOne({ _id: payload.sub }).then((user) => {
     if (user) {
         return done(null, user);
     } else {
         return done(null, false);
     }
   }).catch(err => done(err, null));
})
module.exports = (passport) => {
  passport.use(strategy);
}