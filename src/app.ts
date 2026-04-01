import express from 'express';
import taskRoutes from './routes/task.routes';
import healthRoutes from './routes/health.routes';
import { errorHandler } from './middlewares/error.middleware';

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.use('/', healthRoutes);

// Task routes
app.use('/api', taskRoutes);

// Error handling middleware
app.use(errorHandler);
// Export the app for use in other modules (e.g., for testing or server setup)
export default app;
