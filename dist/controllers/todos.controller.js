"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todo_model_1 = require("../models/todo.model");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_model_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'created the todo', createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    const todoId = req.params.id;
    console.log('todoId -> ', todoId);
    if (!todoId) {
        res.json({ todos: TODOS });
    }
    else {
        const retTodo = TODOS.find((todo) => todo.id === todoId);
        res.json({ todo: retTodo });
    }
};
exports.getTodo = getTodo;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS[todoIndex] = new todo_model_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: 'Updated!', updateTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    if (todoId === 'RESET-TODOS') {
        TODOS.length = 0;
        res.json({ message: 'Deleted all todos!' });
    }
    else {
        const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
        if (todoIndex < 0) {
            throw new Error('Could not find todo!');
        }
        TODOS.splice(todoIndex, 1);
        res.json({ message: 'Deleted!' });
    }
};
exports.deleteTodo = deleteTodo;
