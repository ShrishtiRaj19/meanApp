var express = require('express');
var router = express.Router();
var userCtrl = require('../controller/user.js')

module.exports = function(passport){
// console.log("passport0", passport)
console.log(router);
	router.post('/signup', userCtrl.createUser);
	// router.post('/login', passport.authenticate('local', {
 //        failureRedirect: '/login',
 //        successRedirect: '/profile',
 //    }), function (req, res) {
 //        res.send('hey')
 //    })
    return router;

}