const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

const user_collection = model("user_collection", userSchema);

// Model ko export karein
module.exports = user_collection;
