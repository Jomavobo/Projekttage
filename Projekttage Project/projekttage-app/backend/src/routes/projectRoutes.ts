import { Router } from 'express';
import {
  createProject,
  updateProject,
  deleteProject,
  getProjects,
  getProjectById,
  getPupilsByProjectId,
} from '../controllers/projectController';
import { authenticate } from '../middleware/auth';

const router = Router();

// Route to create a new project
router.post('/', authenticate, createProject);

// Route to update an existing project
router.put('/:id', authenticate, updateProject);

// Route to delete a project
router.delete('/:id', authenticate, deleteProject);

// Route to get all projects
router.get('/', getProjects);

// Route to get a project by ID
router.get('/:id', getProjectById);

// Route to get pupils who voted for a specific project
router.get('/:id/pupils', getPupilsByProjectId);

export default router;