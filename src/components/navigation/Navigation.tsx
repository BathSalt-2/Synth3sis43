import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Bot, Workflow, BarChart3, Menu } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, path: '/dashboard', label: 'Dashboard' },
    { icon: Bot, path: '/agents', label: 'Agents' },
    { icon: Workflow, path: '/workflows', label: 'Workflows' },
    { icon: BarChart3, path: '/metrics', label: 'Metrics' },
    { icon: Menu, path: '/menu', label: 'Menu' },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50"
    >
      <div className="bg-slate-900/90 backdrop-blur-lg border-t border-slate-700/50 px-4 py-2">
        <div className="max-w-md mx-auto">
          <div className="flex justify-around items-center">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="relative flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-200"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-xl border border-cyan-400/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <item.icon 
                    className={`w-6 h-6 transition-colors relative z-10 ${
                      isActive ? 'text-cyan-400' : 'text-gray-500'
                    }`} 
                  />
                  <span 
                    className={`text-xs font-medium transition-colors relative z-10 ${
                      isActive ? 'text-cyan-400' : 'text-gray-500'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;