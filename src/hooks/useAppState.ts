import { useState, useEffect } from 'react';

export const useAppState = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentScreen, setCurrentScreen] = useState<string>('loading');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setCurrentScreen('landing');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return {
    isLoading,
    currentScreen,
    setCurrentScreen,
  };
};