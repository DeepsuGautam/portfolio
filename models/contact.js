const { Schema, models, model } = require("mongoose");

const schema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    subject:{
       type:String,
       required:true
    },
    message:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true,
        default: function(){
            const year = new Date().getFullYear();
            return year;
        }
    },
    month:{
        type:String,
        required:true,
        default: function(){
            const month = new Date().getMonth() + 1;
            return month;
        }
    },
    date:{
        type:String,
        required:true,
        default: function(){
            const date = new Date().getDate();
            return date;
        }
    }
},{timeseries:true, timestamps:true});

const contact = models?.contact || model("contact", schema);
module.exports = contact;
