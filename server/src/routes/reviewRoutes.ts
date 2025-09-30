import { Router } from 'express';
import { getReviews, addReview } from '../controllers/reviewController';

const router = Router();
router.route('/reviews').get(getReviews).post(addReview);

export default router;