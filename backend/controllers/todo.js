const Todo = require('../models/todo');

exports.getTodos = (req, res, next) => {
    Todo.findAll()
        .then(todos => {
        res
            .status(200)
            .json({ message: 'Fetched todos successfully.', todos: todos });
        })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
}

exports.getTodo = (req, res, next) => {
    const todoId = req.params.id;
    Todo.findByPk(todoId)
        .then(todo => {
            if(!todo){
                const error = new Error("Not found");
                error.status = 404;
                next(error);
            }
            res
            .status(200)
            .json({ todo: todo });
        })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
}

exports.saveTodo = (req, res, next) => {
    const name = req.body.name;
    const title = req.body.title;
    const todo = Todo.build({
        title: title,
        name: name
    });
    todo
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Todo created successfully!',
        todo: result
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
}

exports.updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const { name, title, completed } = req.body;
    const todo = Todo.update({
        name:name,
        title: title,
        completed: completed
    },{ where : { id: todoId } })
    .then(result => {
      res.status(200).json({
        message: 'Todo updated successfully!',
        updated_id: todoId
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
}

exports.updateStatus = (req, res, next) => {
  const todoId = req.params.id;
  const { completed } = req.body;
  const todo = Todo.update({
      completed: completed
  },{ where : { id: todoId } })
  .then(result => {
    res.status(200).json({
      message: 'Todo updated successfully!',
      updated_id: todoId,
      completed: completed
    });
  })
  .catch(err => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
}

exports.deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    Todo.destroy({
      where : {
        id: todoId
      }
    }).then(result => {
      res.status(200).json({
        message: 'Todo deleted successfully!',
        deleted_id: todoId
      })
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
}