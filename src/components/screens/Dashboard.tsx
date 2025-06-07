import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Plus, TrendingUp, Users } from 'lucide-react';
import AgentGlobe from '../3d/AgentGlobe';
import StatusBar from '../ui/StatusBar';
import AgentCard from '../ui/AgentCard';
import QuickActions from '../ui/QuickActions';

const Dashboard: React.FC = () => {
  const agents = [
    { id: 1, name: 'Athena', role: 'Creative', status: 'active', latency: 45 },
    { id: 2, name: 'Logos', role: 'Analytical', status: 'idle', latency: 32 },
    { id: 3, name: 'Ethos', role: 'Ethical', status: 'alert', latency: 78 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pb-20 px-4 pt-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-3xl font-light text-white mb-2">Agent Nexus</h1>
          <p className="text-gray-400">Real-time system overview and agent management</p>
        </motion.div>

        {/* Status Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <StatusBar />
        </motion.div>

        {/* 3D Agent Globe */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 h-64 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden"
        >
          <AgentGlobe agents={agents} />
        </motion.div>

        {/* Agent Snapshots */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-400" />
            Active Agents
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <AgentCard agent={agent} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <QuickActions />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;