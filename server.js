var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require("./routes/routes.js");
var auth = require("./routes/auth.js");
var passport = require("passport");
require("./passport")(passport)
var app = express();
mongoose.connect("mongodb://localhost:27017/login")
var db = mongoose.connection;


app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session());
// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', routes);
app.use('/auth', auth);
app.listen(3000, function(){
	console.log('Server started on port 3000 ');
});