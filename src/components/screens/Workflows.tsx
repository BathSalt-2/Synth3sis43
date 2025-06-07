import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, Share, Import } from 'lucide-react';
import WorkflowCanvas from '../ui/WorkflowCanvas';

const Workflows: React.FC = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null);

  const workflows = [
    { id: 'creative-pipeline', name: 'Creative Pipeline', nodes: 8, status: 'active' },
    { id: 'data-analysis', name: 'Data Analysis Flow', nodes: 12, status: 'draft' },
    { id: 'ethical-review', name: 'Ethical Review Process', nodes: 6, status: 'active' },
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
          className="mb-6"
        >
          <h1 className="text-3xl font-light text-white mb-2">EchoNode Designer</h1>
          <p className="text-gray-400">Visual workflow designer for real-time collaboration</p>
        </motion.div>

        {/* Toolbar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6 flex gap-3 items-center justify-between"
        >
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg transition-all">
              <Plus className="w-4 h-4" />
              New Workflow
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 hover:text-white transition-colors">
              <Import className="w-4 h-4" />
              Import
            </button>
          </div>
          
          <div className="flex gap-3">
            <button className="p-2 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-400 hover:text-white transition-colors">
              <Share className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-colors">
              <Play className="w-4 h-4" />
              Simulate
            </button>
          </div>
        </motion.div>

        {/* Workflow List */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-xl font-medium text-white mb-4">Your Workflows</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {workflows.map((workflow, index) => (
              <motion.div
                key={workflow.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => setSelectedWorkflow(workflow.id)}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedWorkflow === workflow.id
                    ? 'bg-cyan-500/20 border-cyan-400'
                    : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                }`}
              >
                <h3 className="text-white font-medium mb-2">{workflow.name}</h3>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{workflow.nodes} nodes</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    workflow.status === 'active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {workflow.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workflow Canvas */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-96 bg-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden"
        >
          <WorkflowCanvas selectedWorkflow={selectedWorkflow} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Workflows;