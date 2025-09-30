import { useState, useEffect } from 'react';

function useDarkMode(): [boolean, () => void] {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme in localStorage, or default to system preference
    return localStorage.theme === 'dark' || 
           (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;