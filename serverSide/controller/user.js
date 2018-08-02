var express = require('express');
var userModel = require('../model/user.js');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;


/**
 * [createUser new user Registration]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
// module.exports.createUser = function(req, res){
// 	userModel.findUser({email:req.body.email},function(err,doc){
// 		if(err) {
// 			res.status(500).send('err')
// 		}else{
// 			if(doc){
// 				res.status(500).json({"message":"Email Id already exists"})	
// 			}else{
// 				var user1 = new userModel({
// 					name:req.body.name,
// 					email:req.body.email,
// 					password:req.body.password
// 				});
// 				userModel.insertUser(user1, function(err, data){
// 					if(err){
// 						console.log("error", err)
// 					}else{
// 						res.status(200).json({"message":"User successfully register", "user": data})
// 					}
// 				})
// 			}
// 		}
// 	})
// }

module.exports.createUser = async function(req, res){
	var user = await userModel.findUser({email:req.body.email});
	console.log("user >>>>>>>>>>>", user)
	userModel.findUser({email:req.body.email},function(err,doc){
		if(err) {
			res.status(500).send('err')
		}else{
			if(doc){
				res.status(500).json({"message":"Email Id already exists"})	
			}else{
				var user1 = new userModel({
					name:req.body.name,
					email:req.body.email,
					password:req.body.password
				});
				userModel.insertUser(user1, function(err, data){
					if(err){
						console.log("error", err)
					}else{
						res.status(200).json({"message":"User successfully register", "user": data})
					}
				})
			}
		}
	})
}

/**
 * [passAuthenticate authenticate user using passport-local]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
module.exports.passAuthenticate = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) {res.status(200).json({"message":"Invalid password"}) }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      res.status(200).json({"messgae":"successfully loggId", "data": user})
      // return res.redirect('/users/' + user.name);
    });
  })(req, res, next);
}

/**
 * [logout description]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
module.exports.logout = function (req, res) {
	req.logout();
	res.status(200).json({message:"successfully LogOut"})
}


