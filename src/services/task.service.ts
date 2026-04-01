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

  tasks.push(newTask);
  await writeTasksToFile(tasks);

  return newTask;
};

// Update an existing task
export const updateTask = async (
  id: number,
  completed: boolean
): Promise<Task | null> => {
  const tasks = await readTasksFromFile();

  const task = tasks.find((t: Task) => t.id === id);

  if (!task) return null;

  task.completed = completed;

  await writeTasksToFile(tasks);

  return task;
};

// Delete a task
export const deleteTask = async (id: number): Promise<boolean> => {
  const tasks = await readTasksFromFile();

  const filtered = tasks.filter((t: Task) => t.id !== id);

  if (tasks.length === filtered.length) return false;

  await writeTasksToFile(filtered);

  return true;
};