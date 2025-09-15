import { Router } from 'express';
import { 
  getPupilById, 
  getAllPupils, 
  voteForProject, 
  getPupilVotes 
} from '../controllers/pupilController';
import { authenticate } from '../middleware/auth';

const router = Router();

// Route to get a pupil by ID
router.get('/:id', authenticate, getPupilById);

// Route to get all pupils
router.get('/', authenticate, getAllPupils);

// Route for a pupil to vote for a project
router.post('/:id/vote', authenticate, voteForProject);

// Route to get all votes for a pupil
router.get('/:id/votes', authenticate, getPupilVotes);

export default router;