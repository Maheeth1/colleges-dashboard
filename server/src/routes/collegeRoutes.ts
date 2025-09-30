import { Router } from 'express';
import { getColleges } from '../controllers/collegeController';

const router = Router();
router.get('/colleges', getColleges);

export default router;