import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import type { Review } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const ReviewsPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({ collegeName: '', rating: 3, comment: '' });

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/reviews`);
      setReviews(data);
    } catch (error) {
      toast.error("Failed to load reviews.");
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.collegeName || !formData.comment) {
      return toast.error("Please fill all fields.");
    }
    try {
      await axios.post(`${API_BASE_URL}/reviews`, formData);
      toast.success("Review submitted!");
      setFormData({ collegeName: '', rating: 3, comment: '' });
      fetchReviews(); // Re-fetch reviews to show the new one
    } catch (error) {
      toast.error("Submission failed.");
    }
  };

  return (
    <div className="animate-fade-in bg-gray-50 dark:bg-gray-900 min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Form */}
      <div className="lg:col-span-1">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Add a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="collegeName" className="block text-sm font-medium dark:text-gray-300">College Name</label>
              <input type="text" id="collegeName" value={formData.collegeName} onChange={(e) => setFormData({...formData, collegeName: e.target.value})} className="mt-1 w-full rounded-md dark:bg-gray-700 border-gray-300 dark:border-gray-600" required />
            </div>
            <div>
              <label htmlFor="rating" className="block text-sm font-medium dark:text-gray-300">Rating: {formData.rating} ★</label>
              <input type="range" id="rating" min="1" max="5" value={formData.rating} onChange={(e) => setFormData({...formData, rating: Number(e.target.value)})} className="mt-1 w-full" />
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium dark:text-gray-300">Comment</label>
              <textarea id="comment" rows={4} value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} className="mt-1 w-full rounded-md dark:bg-gray-700 border-gray-300 dark:border-gray-600" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-semibold">Submit Review</button>
          </form>
        </div>
      </div>

      {/* Reviews List */}
      <div className="lg:col-span-2">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Community Reviews</h2>
        <div className="space-y-4">
          {reviews.length > 0 ? reviews.map(review => (
            <div key={review.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-gray-800 dark:text-gray-200">{review.collegeName}</h4>
                <span className="text-yellow-400">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{review.comment}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-right">{new Date(review.createdAt).toLocaleDateString()}</p>
            </div>
          )) : (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-8">No reviews yet. Be the first!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;