const mongoose=require("mongoose")

const dbConnect=()=>{
    mongoose.connect("mongodb://localhost:27017/todoBase",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DataBase Connection Stablished")
    })
    .catch((err)=>{
        console.log("Error in DB Connection !!!")
    })
}
module.exports=dbConnect