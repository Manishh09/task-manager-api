import { Request, Response } from 'express';
// Import the task service to handle business logic
import * as taskService from '../services/task.service';

// Controller functions for task routes

// Get all tasks
export const getTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.getTasks();

  res.status(200).json({
    data: tasks,
    message: 'Tasks fetched successfully'
  });
};

// Create a new task
export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const task = await taskService.createTask(title);

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
    return res.status(404).json({ message: 'Task not found' });
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
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json({
    message: 'Task deleted successfully'
  });
};