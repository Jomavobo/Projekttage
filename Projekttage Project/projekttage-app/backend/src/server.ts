import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { json } from 'body-parser';
import authRoutes from './routes/authRoutes';
import projectRoutes from './routes/projectRoutes';
import pupilRoutes from './routes/pupilRoutes';
import db from './db';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
db.connect();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/pupils', pupilRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});