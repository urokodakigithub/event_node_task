const mongoose=require("mongoose")
const todo=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    number:{
        type:Number,
    }
})
module.exports=mongoose.model("todos",todo)