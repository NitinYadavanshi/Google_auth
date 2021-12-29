const {Schema,model}=require('mongoose');
module.exports.User=model('User',Schema({
  email:{
      type:String,
  },
  name:{
      type:String,
  },
  id:{
      type:String,
      required:true

  }

},{timestamps:true}))