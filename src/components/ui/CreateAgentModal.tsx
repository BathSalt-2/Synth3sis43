import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Brain, BarChart, Shield } from 'lucide-react';

interface CreateAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateAgentModal: React.FC<CreateAgentModalProps> = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [agentName, setAgentName] = useState('');

  const agentTypes = [
    {
      type: 'Creative',
      icon: Brain,
      color: 'purple',
      description: 'Generates innovative ideas and creative solutions'
    },
    {
      type: 'Analytical',
      icon: BarChart,
      color: 'blue',
      description: 'Processes data and provides insights'
    },
    {
      type: 'Ethical',
      icon: Shield,
      color: 'green',
      description: 'Ensures compliance and ethical guidelines'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agentName && selectedType) {
      // Handle agent creation
      console.log('Creating agent:', { name: agentName, type: selectedType });
      onClose();
      setAgentName('');
      setSelectedType('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-light text-white">Create New Agent</h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Agent Name
                </label>
                <input
                  type="text"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  placeholder="Enter agent name..."
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Agent Type
                </label>
                <div className="space-y-3">
                  {agentTypes.map((type) => (
                    <motion.div
                      key={type.type}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedType(type.type)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedType === type.type
                          ? 'border-cyan-400 bg-cyan-500/10'
                          : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <type.icon className={`w-6 h-6 text-${type.color}-400 mt-0.5`} />
                        <div>
                          <h3 className="text-white font-medium">{type.type}</h3>
                          <p className="text-sm text-gray-400 mt-1">{type.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-gray-300 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!agentName || !selectedType}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                >
                  Create Agent
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CreateAgentModal;