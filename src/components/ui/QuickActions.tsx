import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Play, TrendingUp, Zap } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: Plus,
      label: 'Create Agent',
      description: 'Add a new AI agent to your team',
      color: 'from-cyan-500 to-blue-600',
      action: () => console.log('Create Agent')
    },
    {
      icon: Play,
      label: 'Launch Workflow',
      description: 'Start a new collaboration session',
      color: 'from-purple-500 to-pink-600',
      action: () => console.log('Launch Workflow')
    },
    {
      icon: TrendingUp,
      label: 'View Insights',
      description: 'Analyze performance metrics',
      color: 'from-green-500 to-emerald-600',
      action: () => console.log('View Insights')
    },
    {
      icon: Zap,
      label: 'Quick Deploy',
      description: 'Deploy agents to production',
      color: 'from-yellow-500 to-orange-600',
      action: () => console.log('Quick Deploy')
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-medium text-white mb-4">Quick Actions</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={action.action}
            className={`p-4 rounded-xl bg-gradient-to-br ${action.color} text-white text-left group transition-all duration-200 hover:shadow-lg`}
          >
            <action.icon className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-medium mb-1">{action.label}</h3>
            <p className="text-sm opacity-90">{action.description}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;