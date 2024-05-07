const mongoose=require("mongoose")

    const express = require('express');
    const fs = require('fs');
    const path = require('path');
    const app = express();
    
        app.get("/files", (_, res) => {
      fs.readdir("./files", (_, data) => {
        console.log({ data });
        if (data !== null) res.status(200).send(data);
        else res.status(500).send({});
      });
    });
    
    app.get("/file/:filename", (req, res) => {
      const filename = req.params.filename;
      const filepath = `./files/${filename}`;
    
      fs.readFile(filepath, "utf-8", (err, data) => {
        if (err === null) {
          res.status(200).send(data);
        } else {
          res.status(404).send("File not found");
        }
      });
    });
    
    app.get("*", (req, res) => {
      res.status(404).send("Route not found");
    });
    
    module.export
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

