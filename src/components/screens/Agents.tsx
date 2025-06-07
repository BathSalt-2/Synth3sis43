import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Filter, Grid, List, Search } from 'lucide-react';
import AgentCard from '../ui/AgentCard';
import CreateAgentModal from '../ui/CreateAgentModal';

const Agents: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const agents = [
    { id: 1, name: 'Athena', role: 'Creative', status: 'active', latency: 45, avatar: '🧠' },
    { id: 2, name: 'Logos', role: 'Analytical', status: 'idle', latency: 32, avatar: '📊' },
    { id: 3, name: 'Ethos', role: 'Ethical', status: 'alert', latency: 78, avatar: '⚖️' },
    { id: 4, name: 'Prometheus', role: 'Creative', status: 'active', latency: 56, avatar: '🎨' },
    { id: 5, name: 'Minerva', role: 'Analytical', status: 'active', latency: 41, avatar: '🔍' },
    { id: 6, name: 'Themis', role: 'Ethical', status: 'idle', latency: 67, avatar: '🛡️' },
  ];

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          className="mb-6"
        >
          <h1 className="text-3xl font-light text-white mb-2">Intelligence Arsenal</h1>
          <p className="text-gray-400">Manage and configure your AI agents</p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
        >
          <div className="flex gap-3 items-center">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search agents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            <button className="p-2 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-400 hover:text-white transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-3 items-center">
            <div className="flex bg-slate-800/50 border border-slate-700 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-l-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-r-lg transition-colors ${
                  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Add Agent
            </button>
          </div>
        </motion.div>

        {/* Agents Grid/List */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`grid gap-4 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {filteredAgents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <AgentCard agent={agent} viewMode={viewMode} />
            </motion.div>
          ))}
        </motion.div>

        {/* Create Agent Modal */}
        <CreateAgentModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
        />
      </div>
    </motion.div>
  );
};

export default Agents;