import { Request, Response } from 'express';
// Import the task service to handle business logic
import * as taskService from '../services/task.service';

// Controller functions for task routes

// Get all tasks
export const getTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.getTasks();

  if (!tasks) {
    throw { status: 500, message: 'Tasks could not be fetched' };
  }

  res.status(200).json({
    data: tasks,
    message: 'Tasks fetched successfully'
  });
};

// Create a new task
export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body;
  
  if (!title) {
    throw { status: 400, message: 'Title is required' };
  }

  const task = await taskService.createTask(title);

  if (!task) {
    throw { status: 500, message: 'Task could not be created' };
  }

  res.status(201).json({
    data: task,
    message: 'Task created successfully'
  });
};

// Update an existing task
export const updateTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { completed } = req.body;

  const updatedTask = await taskService.updateTask(id, completed);

  if (!updatedTask) {
    throw { status: 404, message: 'Task not found' };
  }

  res.json({
    data: updatedTask,
    message: 'Task updated successfully'
  });
};

// Delete a task
export const deleteTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const deleted = await taskService.deleteTask(id);

  if (!deleted) {
    throw { status: 404, message: 'Task is not deleted' };
  }

  res.json({
    message: 'Task deleted successfully'
  });
};