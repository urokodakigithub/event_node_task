
  const express = require('express');
  const dbConnect=require("./fileServer")
  const router=require("./example")
  const bodyParser = require('body-parser');
  
  const app = express();
  
  app.use(bodyParser.json());
  
  const ToDos = [];
  
  app.get("/todos", (req, res) => {
    res.status(200).json(ToDos);
  });
  
  app.get("/todos/:id", (req, res) => {
    const currToDoId = parseInt(req.params.id);
    const currToDo = ToDos.find((item) => item.id === currToDoId);
  
    if (currToDo) {
      res.json(currToDo);
    } else {
      res.status(404).json({ msg: "Not Found" });
    }
  });
  
  app.post("/todos", (req, res) => {
    id_count++;
    const newToDO = {
      id: id_count,
      title: req.body.title,
      completed: req.body.completed,
      description: req.body.description,
    };
    ToDos.push(newToDO);
    res.status(201).json({ id: newToDO.id });
  });
  
  app.put("/todos/:id", (req, res) => {
    const currToDoId = parseInt(req.params.id);
    const currToDoIndex = ToDos.findIndex((item) => item.id === currToDoId);
    if (currToDoIndex !== -1) {
      ToDos[currToDoIndex].title = req.body.title;
      ToDos[currToDoIndex].completed = req.body.completed;
      res.status(200).json(ToDos[currToDoIndex]);
    } else {
      res.status(404).json({ msg: "Not Found" });
    }
  });
  
  app.delete("/todos/:id", (req, res) => {
    const currToDoId = parseInt(req.params.id);
    const currToDoIndex = ToDos.findIndex((item) => item.id === currToDoId);
  
    if (currToDoIndex !== -1) {
      ToDos.splice(currToDoIndex, 1);
      res.status(200).json({ msg: "toDo deleted" });
    } else {
      res.status(404).send();
    }
  });
  
  // app.listen(3000);
  
  module.exports = app;
  app.use("/user",router)
  app.listen(4000,()=>{
    console.log("App is listening at port 4000")
  })
  dbConnect();
  // module.exports = app;
