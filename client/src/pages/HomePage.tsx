import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const HomePage = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Entrance animations for the page content
    gsap.from(titleRef.current, { duration: 1, y: -50, opacity: 0, ease: 'power3.out' });
    gsap.from(textRef.current, { duration: 1, y: -30, opacity: 0, delay: 0.3, ease: 'power3.out' });
    gsap.from(buttonRef.current, { duration: 1, y: -20, opacity: 0, delay: 0.6, ease: 'power3.out' });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center h-[calc(100vh-12rem)] animate-fade-in bg-gray-100 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
      <h1 ref={titleRef} className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 drop-shadow-lg transition-colors duration-300">
        Welcome to AspireNext
      </h1>
      {/* The only change is in the line below */}
      <p ref={textRef} className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-200 drop-shadow-md transition-colors duration-300">
        Your one-stop dashboard to discover, compare, and review colleges. Find your perfect fit with our powerful filters and community reviews.
      </p>
      <div ref={buttonRef} className="mt-8">
        <Link
          to="/colleges"
          className="inline-block bg-blue-900 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;