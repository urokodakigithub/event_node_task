/*
   tasks are easy to do so try on your own first 
   then look for the answers any where else

   
   note: this is just a route example the route  can be diff from this 
         this is just to give you some idea how to do it
*/

app.get('/todos', (req, res) => {
    res.json(todos);
  });
  app.get('/todos/id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
      res.status(404).send();
    } else {
      res.json(todo);
    }
  });

// example 2 will be=>
  
app.delete('/todos/id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      todos.splice(todoIndex, 1);
      res.status(200).send();
    }
  });