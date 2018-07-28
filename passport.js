 var LocalStrategy = require('passport-local').Strategy;
 module.exports = function(passport){
 	// used to serialize the user for the session
    passport.serializeUser(function(user, done) {
    	console.log("user", user)
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
    	console.log("user in deserialize", user)
        done(err, user);
    });

    passport.use(new LocalStrategy(function(email, password, cb){
    	console.log("email", email, password)
    }))
 }