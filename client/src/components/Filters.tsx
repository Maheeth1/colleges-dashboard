import type { ChangeEvent } from 'react';

interface FilterState {
    search: string;
    location: string;
    course: string;
    feeMax: number;
    sortBy: string;
}

interface Props {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
}

const Filters = ({ filters, onFilterChange }: Props) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onFilterChange({ [e.target.name]: e.target.value });
  };

  const feeFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });
  
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
      {/* Search & Filters */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Search Box */}
        <div className="sm:col-span-3">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Search by Name</label>
          <input type="text" name="search" id="search" value={filters.search} onChange={handleInputChange} className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm" />
        </div>

        {/* Location Filter */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
          <select name="location" id="location" value={filters.location} onChange={handleInputChange} className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm">
            <option value="">All</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>

        {/* Course Filter */}
        <div>
          <label htmlFor="course" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Course</label>
          <select name="course" id="course" value={filters.course} onChange={handleInputChange} className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm">
            <option value="">All</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="MBA">MBA</option>
            <option value="MBBS">MBBS</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sort by Fee</label>
          <select name="sortBy" id="sortBy" value={filters.sortBy} onChange={handleInputChange} className="mt-1 w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm">
            <option value="fee_asc">Low to High</option>
            <option value="fee_desc">High to Low</option>
          </select>
        </div>
      </div>

      {/* ✨ NEW: Fee Range Slider */}
      <div className="lg:col-span-1">
        <label htmlFor="feeMax" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Max Fee: <span className="font-bold">{feeFormatter.format(filters.feeMax)}</span>
        </label>
        <input 
          type="range" 
          name="feeMax" 
          id="feeMax" 
          min="50000" 
          max="500000" 
          step="10000"
          value={filters.feeMax} 
          onChange={handleInputChange} 
          className="mt-2 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" 
        />
      </div>
    </div>
  );
};
export default Filters;