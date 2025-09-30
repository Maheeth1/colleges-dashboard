import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';

// Define the College type if you haven't already in a types.ts file
export interface College {
  _id: string;
  name: string;
  location: string;
  course: string;
  fee: number;
}

interface Props {
  college: College;
  isFavorite: boolean;
  onToggleFavorite: (collegeId: string, isCurrentlyFavorite: boolean) => void;
}

const CollegeCard = ({ college, isFavorite, onToggleFavorite }: Props) => {
  const feeFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{college.name}</h3>
          <button onClick={() => onToggleFavorite(college._id, isFavorite)} className="p-1">
            {isFavorite ? (
              <StarIcon className="w-6 h-6 text-yellow-400" />
            ) : (
              <StarIconOutline className="w-6 h-6 text-gray-400 hover:text-yellow-400" />
            )}
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{college.location}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-3 rounded-full">
            {college.course}
          </span>
          <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
            {feeFormatter.format(college.fee)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;