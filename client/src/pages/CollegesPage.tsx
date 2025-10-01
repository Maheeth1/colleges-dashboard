import { useState, useEffect, useCallback, useLayoutEffect, useRef } from 'react'; // 1. Add useLayoutEffect and useRef
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { gsap } from 'gsap';

import CollegeCard from '../components/CollegeCard';
import Filters from '../components/Filters';
import type { College } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const CollegesPage = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    course: '',
    feeMax: 500000,
    sortBy: 'fee_asc',
  });
  
  const main = useRef(null); // 2. Create a ref for the main container

  // ... (fetchColleges, fetchFavorites, handleFilterChange, handleToggleFavorite functions remain the same)
  const fetchColleges = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams(Object.entries(filters).filter(([, value]) => value !== '').map(([key, value]) => [key, String(value)]));
      const response = await axios.get(`${API_BASE_URL}/api/colleges`, { params });
      if (Array.isArray(response.data)) {
        setColleges(response.data);
      } else {
        setColleges([]);
        toast.error('Could not fetch college data.');
      }
    } catch (error) {
      toast.error('Failed to fetch colleges.');
      setColleges([]);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const fetchFavorites = async () => {
    try {
      const { data } = await axios.get<College[]>(`${API_BASE_URL}/api/favorites`);
      setFavorites(data.map((fav: College) => fav._id));
    } catch (error) {
      console.error("Could not fetch favorites"); // Changed to console.error
    }
  };

  useEffect(() => {
    fetchColleges();
    fetchFavorites();
  }, [fetchColleges]);

  // 3. ✨ Replace the old GSAP useEffect with this useLayoutEffect
  useLayoutEffect(() => {
    if (colleges.length > 0) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.college-card', 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' }
        );
      }, main); // Scope the animation to the main ref

      return () => ctx.revert(); // Cleanup function
    }
  }, [colleges]); // Re-run when colleges data changes

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleToggleFavorite = async (collegeId: string, isCurrentlyFavorite: boolean) => {
    try {
      if (isCurrentlyFavorite) {
        await axios.delete(`${API_BASE_URL}/favorites/${collegeId}`);
        setFavorites(prev => prev.filter(id => id !== collegeId));
        toast.success('Removed from favorites!');
      } else {
        await axios.post(`${API_BASE_URL}/favorites`, { collegeId });
        setFavorites(prev => [...prev, collegeId]);
        toast.success('Added to favorites!');
      }
    } catch (error) {
      toast.error('Something went wrong.');
    }
  };


  return (
    // 4. Attach the ref to the main container
    <div className="animate-fade-in bg-gray-50 dark:bg-gray-900 min-h-screen" ref={main}>
      <Filters filters={filters} onFilterChange={handleFilterChange} />

      {loading ? (
        <p className="text-center mt-10 dark:text-gray-300">Loading Colleges...</p>
      ) : colleges.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {colleges.map((college) => (
            <div className="college-card" key={college._id}>
                <CollegeCard
                college={college}
                isFavorite={favorites.includes(college._id)}
                onToggleFavorite={handleToggleFavorite}
                />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">No Colleges Found</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search filters.</p>
        </div>
      )}
    </div>
  );
};

export default CollegesPage;