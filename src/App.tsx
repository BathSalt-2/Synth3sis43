import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/screens/LoadingScreen';
import LandingPage from './components/screens/LandingPage';
import Dashboard from './components/screens/Dashboard';
import Agents from './components/screens/Agents';
import Workflows from './components/screens/Workflows';
import Metrics from './components/screens/Metrics';
import Menu from './components/screens/Menu';
import Navigation from './components/navigation/Navigation';
import { useAppState } from './hooks/useAppState';

function App() {
  const { isLoading, currentScreen, setCurrentScreen } = useAppState();

  if (isLoading) {
    return <LoadingScreen onComplete={() => setCurrentScreen('landing')} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/metrics" element={<Metrics />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </AnimatePresence>
        
        {currentScreen !== 'landing' && <Navigation />}
      </div>
    </Router>
  );
}

export default App;