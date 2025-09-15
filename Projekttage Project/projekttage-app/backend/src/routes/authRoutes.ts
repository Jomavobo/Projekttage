import { Router } from 'express';
import { loginTeacher, loginPupil, registerTeacher, registerPupil } from '../controllers/authController';

const router = Router();

// Teacher login
router.post('/login/teacher', loginTeacher);

// Pupil login
router.post('/login/pupil', loginPupil);

// Teacher registration
router.post('/register/teacher', registerTeacher);

// Pupil registration
router.post('/register/pupil', registerPupil);

export default router;