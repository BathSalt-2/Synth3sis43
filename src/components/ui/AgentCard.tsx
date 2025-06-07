import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, Activity } from 'lucide-react';

interface Agent {
  id: number;
  name: string;
  role: string;
  status: string;
  latency: number;
  avatar?: string;
}

interface AgentCardProps {
  agent: Agent;
  viewMode?: 'grid' | 'list';
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, viewMode = 'grid' }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'idle': return 'bg-yellow-500';
      case 'alert': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Creative': return 'text-purple-400 bg-purple-500/20';
      case 'Analytical': return 'text-blue-400 bg-blue-500/20';
      case 'Ethical': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-all cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-xl">
              {agent.avatar || '🤖'}
            </div>
            <div>
              <h3 className="text-white font-medium">{agent.name}</h3>
              <span className={`px-2 py-1 rounded text-xs ${getRoleColor(agent.role)}`}>
                {agent.role}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${getStatusColor(agent.status)}`}></div>
              <span className="text-sm text-gray-400 capitalize">{agent.status}</span>
            </div>
            <div className="text-sm text-gray-400">
              {agent.latency}ms
            </div>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-xl">
          {agent.avatar || '🤖'}
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${getStatusColor(agent.status)}`}></div>
          <button className="p-1 text-gray-400 hover:text-white transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <h3 className="text-white font-medium mb-1">{agent.name}</h3>
      <span className={`px-2 py-1 rounded text-xs ${getRoleColor(agent.role)}`}>
        {agent.role}
      </span>
      
      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex items-center gap-2 text-gray-400">
          <Activity className="w-4 h-4" />
          <span>{agent.latency}ms</span>
        </div>
        <span className="text-gray-400 capitalize">{agent.status}</span>
      </div>
    </motion.div>
  );
};

export default AgentCard;