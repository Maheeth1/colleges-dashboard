import { Request, Response } from 'express';
import Favorite from '../models/Favorite';
import College from '../models/College';

// ... (addFavorite and removeFavorite functions remain the same) ...
export const addFavorite = async (req: Request, res: Response) => {
  try {
    const { collegeId } = req.body;
    const existing = await Favorite.findOne({ where: { collegeId } });
    if (existing) {
      return res.status(400).json({ message: 'Already in favorites' });
    }
    const favorite = await Favorite.create({ collegeId });
    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ message: 'Error adding favorite', error });
  }
};


export const getFavorites = async (req: Request, res: Response) => {
  try {
    const favorites = await Favorite.findAll({
      include: [{ model: College, as: 'college' }],
    });

    // ✨ THIS IS THE CORRECTED LOGIC
    const favoriteColleges = favorites
      .map(fav => fav.college) // Get the nested college object
      .filter(Boolean)       // Safely filter out any null/undefined results
      .map(college => ({ ...college!.get(), _id: college!.id.toString() })); // Format for the frontend

    res.status(200).json(favoriteColleges);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching favorites', error });
  }
};


export const removeFavorite = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Favorite.destroy({ where: { collegeId: id } });
    if (!result) {
      return res.status(404).json({ message: 'Favorite not found' });
    }
    res.status(200).json({ message: 'Favorite removed' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing favorite', error });
  }
};