// schema 
//     col data validation 
// model 

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
    },otp:{
        type:String
    }
});
 

module.exports = mongoose.model("User",UserSchema)
//User -> singular 
//users  
