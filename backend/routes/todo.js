const express = require('express');

const todoController = require('../controllers/todo');

const router = express.Router();

const { body, validationResult } = require('express-validator');

router.get('/todos', todoController.getTodos);

router.get('/todos/:id', todoController.getTodo);

router.post('/todos',
    todoController.saveTodo);

router.put('/todos/:id', todoController.updateTodo);

router.patch('/todos/:id', todoController.updateStatus);

router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;