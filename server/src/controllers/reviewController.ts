import { Request, Response } from 'express';
import Review from '../models/Review';

export const addReview = async (req: Request, res: Response) => {
  try {
    const { collegeName, rating, comment } = req.body;
    if (!collegeName || !rating || !comment) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newReview = await Review.create({ collegeName, rating, comment });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: 'Error adding review', error });
  }
};

export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};