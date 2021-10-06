const mongoose=require("mongoose");

const RegisterSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:String,
    // hash:String,
     salt:String
})

const Register = mongoose.model('Register',RegisterSchema);

module.exports={Register}