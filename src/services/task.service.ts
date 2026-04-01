import { Task } from '../models/task.model';
import {
  readTasksFromFile,
  writeTasksToFile
} from '../utils/file.util';

// Service functions for task management

// Get all tasks
export const getTasks = async (): Promise<Task[]> => {
  return await readTasksFromFile();
};

// Create a new task
export const createTask = async (title: string): Promise<Task> => {
  const tasks = await readTasksFromFile();
  
  const newTask: Task = {
    id: tasks.length + 1,
    title,
    completed: false,
    createdAt: new Date()
  };

  await writeTasksToFile([...tasks, newTask]);

  return newTask;
};

// Update an existing task
export const updateTask = async (
  id: number,
  updates: Task
): Promise<Task | null> => {
  const tasks = await readTasksFromFile();

  const index = tasks.findIndex((t: Task) => t.id === id);

  if (index === -1) return null;

  const updatedTask: Task = {
    ...tasks[index],
    ...updates
  };

  tasks[index] = updatedTask;

  await writeTasksToFile(tasks);

  return updatedTask;
};

// Delete a task
export const deleteTask = async (id: number): Promise<boolean> => {
  const tasks = await readTasksFromFile();

  const filtered = tasks.filter((t: Task) => t.id !== id);

  if (tasks.length === filtered.length) return false;

  await writeTasksToFile(filtered);

  return true;
};