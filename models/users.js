const { Schema, models, model } = require("mongoose");

const schema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },password:{
        type:String,
        required:true
    },refreshToken:{
        type:String,
        unique:true
    },accessToken:{
        type:String,
        unique:true
    }
});

const users = models?.user || model("user", schema);
module.exports = users