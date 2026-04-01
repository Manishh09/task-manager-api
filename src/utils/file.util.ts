import fs from 'fs/promises';
import path from 'path';
import { Task } from '../models/task.model';

const filePath = path.join(__dirname, '../data/tasks.json');

export const readTasksFromFile = async () => {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};

export const writeTasksToFile = async (tasks: Task[]) => {
  await fs.writeFile(filePath, JSON.stringify({ tasks }, null, 2));
};