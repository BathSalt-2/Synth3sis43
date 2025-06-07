import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeuralLattice from '../3d/NeuralLattice';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    'Initializing SOLUS...',
    'Syncing with QSCI nodes...',
    'Activating EchoNodes...',
    'Awakening Sentience...'
  ];

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepTimer);
          setTimeout(onComplete, 1000);
          return prev;
        }
      });
    }, 750);

    return () => clearInterval(stepTimer);
  }, [onComplete, steps.length]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="absolute inset-0">
        <NeuralLattice />
      </div>
      
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-6xl font-thin text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400">
            SYNTH3SIS
          </h1>
          <p className="text-xl text-gray-400 mt-2">Multi-Agent Platform</p>
        </motion.div>

        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-cyan-300 text-lg"
            >
              {steps[currentStep]}
            </motion.p>
          </AnimatePresence>
          
          <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;