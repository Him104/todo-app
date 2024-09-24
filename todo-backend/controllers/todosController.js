let todos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Express', completed: false },
  ];
  
  exports.getTodos = (req, res) => {
    res.json(todos);
  };
  
  exports.addTodo = (req, res) => {
    const newTodo = { id: Date.now(), ...req.body };
    todos.push(newTodo);
    res.json(newTodo);
  };
  
  exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const updatedTodo = todos.find(todo => todo.id === parseInt(id));
  
    if (updatedTodo) {
      updatedTodo.completed = req.body.completed;
      res.json(updatedTodo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  };
  
  exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id !== parseInt(id));
    res.json({ message: `Todo with id ${id} deleted` });
  };
  