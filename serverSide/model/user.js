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

module.exports.insertUser = function(condition, cb){
	condition.save(cb);
}




module.exports.findUser = async function(condition, cb){
	return new Promise((resolve, reject) =>{
		UserSchema.findOne(condition).then((res) =>{
			if(res){ resolve(res);}
		}).catch((err)=>{
			reject(err);
		})
	})
}
