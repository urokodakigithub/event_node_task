
  const express = require('express');
  const dbConnect=require("./fileServer")
  const router=require("./example")
  const bodyParser = require('body-parser');
  
  const app = express();
  
  app.use(bodyParser.json());
  app.use("/user",router)
  app.listen(4000,()=>{
    console.log("App is listening at port 4000")
  })
  dbConnect();
  // module.exports = app;