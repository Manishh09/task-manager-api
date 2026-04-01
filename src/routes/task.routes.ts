import { Router } from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/task.controller';
import { asyncHandler } from '../utils/async-handler';

// Create a router for task-related routes
const router = Router();

// Define routes for task management
// asyncHandler(getTasks) allows us to use async/await in our route handlers and automatically catch any errors that occur, passing them to the next middleware (error handler).
router.get('/tasks', asyncHandler(getTasks));
router.post('/tasks', asyncHandler(createTask));
router.put('/tasks/:id', asyncHandler(updateTask));
router.delete('/tasks/:id', asyncHandler(deleteTask));

export default router;