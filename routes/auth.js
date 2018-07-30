var express = require('express');
var router = express.Router();
var userCtrl = require('../controller/user.js')
var passport = require("passport");


router.post('/signup', userCtrl.createUser);
// router.post('/login', passport.authenticate('local', {
//     failureRedirect: '/login',
//     successRedirect: '/profile',
// }), function (req, res) {
// 	console.log("res", res)
//     res.send('hey')
// })
// 
router.post('/login', userCtrl.passAuthenticate);

router.post('/logout', userCtrl.logout)
module.exports = router;