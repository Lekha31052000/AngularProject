const mongoose=require("mongoose");

const ListSchema=new mongoose.Schema({
    id:Number,
    title:String,
    completed:Boolean,
    email:String 
   
})

const List = mongoose.model('List',ListSchema);

module.exports={List}