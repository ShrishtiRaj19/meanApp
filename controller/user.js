var express = require('express');
var user = require('../model/user.js');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;

// module.exports.insertUser = function(req, res){
// 	var condition = new user({
// 		name:req.body.name,
// 		email:req.body.email,
// 		password:req.body.password
// 	});
// 	user.insertData(condition, function(err, data){
// 		res.send(data)
// 	})
// }


module.exports.createUser = function(req, res){
	console.log("createUser", req.body)
	user.findUser({email:req.body.email},function(err,doc){
		if(err) {
			res.status(500).send('err')
		}else{
			if(doc){
				res.status(500).send('already exists')	
			}else{
				var user = new user({
					name:req.body.name,
					email:req.body.email,
					password:req.body.password
				});
				user.insertUser(user, function(err, data){
					if(err){
						console.log("erroor", err)
					}else{
						res.status(200).send("user created", data)
					}
				})
			}
		}
	})
}


