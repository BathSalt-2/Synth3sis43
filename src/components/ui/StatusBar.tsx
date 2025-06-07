import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, AlertCircle } from 'lucide-react';

const StatusBar: React.FC = () => {
  const metrics = [
    { label: 'System Health', value: '98.7%', icon: Activity, color: 'text-green-400' },
    { label: 'Agent Load', value: '23/50', icon: Zap, color: 'text-blue-400' },
    { label: 'Avg Latency', value: '45ms', icon: Clock, color: 'text-yellow-400' },
    { label: 'Alerts', value: '2', icon: AlertCircle, color: 'text-red-400' },
  ];

  return (
    <div className="bg-slate-900/50 rounded-xl border border-slate-700/50 p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3"
          >
            <metric.icon className={`w-5 h-5 ${metric.color}`} />
            <div>
              <p className="text-sm text-gray-400">{metric.label}</p>
              <p className="text-lg font-medium text-white">{metric.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatusBar;