import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import type { College } from '../types';
import CollegeCard from '../components/CollegeCard';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const FavoritesPage = () => {
  const [favoriteColleges, setFavoriteColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<College[]>(`${API_BASE_URL}/favorites`);
      setFavoriteColleges(data);
    } catch (error) {
      toast.error("Failed to fetch favorites.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (collegeId: string) => {
    try {
      await axios.delete(`${API_BASE_URL}/favorites/${collegeId}`);
      setFavoriteColleges(prev => prev.filter(college => college._id !== collegeId));
      toast.success('Removed from favorites!');
    } catch (error) {
      toast.error('Failed to remove favorite.');
    }
  };

  if (loading) return <p className="dark:text-gray-300">Loading your favorites...</p>;

  return (
    <div className="animate-fade-in bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your Favorite Colleges</h2>
      {favoriteColleges.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteColleges.map((college) => (
            <CollegeCard
              key={college._id}
              college={college}
              isFavorite={true}
              onToggleFavorite={() => handleRemoveFavorite(college._id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          You haven't added any colleges to your favorites yet.
        </p>
      )}
    </div>
  );
};

export default FavoritesPage;