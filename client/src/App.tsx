import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import CollegesPage from './pages/CollegesPage';
import ReviewsPage from './pages/ReviewsPage';
import FavoritesPage from './pages/FavoritesPage';
import LogoutPage from './pages/LogoutPage';

function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{
        className: 'dark:bg-gray-700 dark:text-white',
      }} />
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/colleges" element={<CollegesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;