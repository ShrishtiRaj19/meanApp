var mongoose = require('mongoose');
var schema = mongoose.Schema;

var User = new schema ({
	"name":{
		type:String,
		required:true
	},
	"email":{
		type:String,
		required:true
	},
	"phone":{
		type:Number,
		required:false
	},
	"password":{
		type:String,
		required:true
	}
});


var UserSchema = module.exports = mongoose.model('user',User);

module.exports.insertData = function(condition, cb){
	condition.save(cb);
}

module.exports.findUser = function(condition, cb){
	UserSchema.findOne(condition, function(err,data){
		if(err){

			cb(err);

		}
		else{

			cb(data);

		}
	})

}