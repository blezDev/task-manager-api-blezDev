const express = require('express');

const { allTasks, taskByTitleOrDescription, taskById, taskByPriority, updateTask, deleteTask } = require('../controlller/task.controller');
const catchAsync = require('../middleware/catchAsync');
const { inputValidation } = require('../middleware/inputValidation');


const taskRouter = express.Router();

// Wrap async handlers with catchAsync so thrown/rejected errors go to next(err)
taskRouter.get('/', catchAsync(allTasks));

taskRouter.get('/:id', catchAsync(taskById));

taskRouter.get('/priority/:priorityLevel', catchAsync(taskByPriority));

taskRouter.post('/', inputValidation, catchAsync(taskByTitleOrDescription));

taskRouter.put('/:id', inputValidation, catchAsync(updateTask));

taskRouter.delete('/:id', catchAsync(deleteTask));

module.exports = taskRouter;