import { Router } from 'express';
import { getFavorites, addFavorite, removeFavorite } from '../controllers/favoriteController';

const router = Router();
router.route('/favorites').get(getFavorites).post(addFavorite);
router.delete('/favorites/:id', removeFavorite);

export default router;