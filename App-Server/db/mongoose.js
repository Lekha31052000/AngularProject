const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/myApp",{useNewUrlParser:true}).then(()=>{
    // mongoose.connect("C:\Program Files\mongosh-1.0.5-win32-x64\bin",{useNewUrlParser:true}).then(()=>{
    console.log("connection successfull to mongodb");
}).catch((e)=>{
    console.log(e);
});

mongoose.set("useCreateIndex",true);
mongoose.set("useFindAndModify",false);

module.exports={
    mongoose
};