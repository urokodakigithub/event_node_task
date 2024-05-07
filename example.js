const express=require("express");
const todo=require("./todosModel")
const router=express.Router()

// creating a user
router.post('/create', async(req, res) => {
  try{
    const {name,email,number} = req.body;
    console.log(req.body)
    const data = await todo.create({name,email,number} );
    console.log("Request",req.body)
    res.status(201).json({
      success:true,
      data:data,
    });
  }
  catch(err){
    res.status(500).json({
      success:false,
      msg:"Errror in create "
    })
  }
  
});

// get all user data
router.get('/all',async(req,res)=>{
  try{
    const data=await todo.find({})
    res.status(200).json({
      success:true,
      data:data,
    })
  }
  catch(err){
    res.status(500).json({
      success:false,
      msg:"Errror in getting user"
    })
  }
})

// find by id and delete

router.put("/delete/:id",async(req,res)=>{
  try{
    const id=req.params.id;
    const user= await todo.findByIdAndDelete(id)
    res.status(500).json({
      success:true,
      data:user,
    })
  }
  catch(err){
    res.status(500).json({
      success:false,
      msg:"Errror in deletion"
    })
  }
})

//find by id and update
router.put("/update/:id",async(req,res)=>{
  try{
    const id=req.params.id;
    const {name,email,number}=req.body;
    const user=await todo.findByIdAndUpdate(id,{name,email,number})
    res.status(200).json({
      success:true,
      data:user,
      msg:"User data Updated"
    })
  }
  catch(err){
    res.status(500).json({
      success:false,
      msg:"Errror in update"
    })
  }
})
module.exports=router