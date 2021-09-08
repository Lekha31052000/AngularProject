const mongoose=require("mongoose");

const   ProfileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const Profile = mongoose.model('Register',ProfileSchema);

module.exports={Profile}