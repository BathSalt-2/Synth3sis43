import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, TrendingUp, BarChart3, Activity } from 'lucide-react';
import MetricCard from '../ui/MetricCard';
import PerformanceChart from '../ui/PerformanceChart';

const Metrics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('24h');

  const metrics = [
    {
      title: 'Creativity Index',
      value: 87.3,
      change: +5.2,
      icon: Brain,
      color: 'purple',
      description: 'Neural novelty and adaptive range'
    },
    {
      title: 'Ethical Alignment',
      value: 94.1,
      change: +2.1,
      icon: Shield,
      color: 'green',
      description: 'Bias mitigation and compliance'
    },
    {
      title: 'Performance Score',
      value: 78.9,
      change: -1.5,
      icon: Zap,
      color: 'blue',
      description: 'Latency and accuracy metrics'
    }
  ];

  const timeRanges = [
    { value: '1h', label: '1H' },
    { value: '24h', label: '24H' },
    { value: '7d', label: '7D' },
    { value: '30d', label: '30D' }
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
          className="mb-6 flex justify-between items-start"
        >
          <div>
            <h1 className="text-3xl font-light text-white mb-2">Insight Matrix</h1>
            <p className="text-gray-400">Analytics and performance scoring</p>
          </div>
          
          <div className="flex bg-slate-800/50 border border-slate-700 rounded-lg">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  timeRange === range.value
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white'
                } ${range.value === '1h' ? 'rounded-l-lg' : ''} ${range.value === '30d' ? 'rounded-r-lg' : ''}`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Metric Cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <MetricCard metric={metric} />
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Chart */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="bg-slate-900/50 rounded-2xl border border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                Real-time Performance
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span>Latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Token Usage</span>
                </div>
              </div>
            </div>
            <PerformanceChart timeRange={timeRange} />
          </div>
        </motion.div>

        {/* Agent Performance Breakdown */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-slate-900/50 rounded-2xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              Agent Activity Heatmap
            </h3>
            <div className="space-y-3">
              {['Athena', 'Logos', 'Ethos', 'Prometheus'].map((agent, index) => (
                <div key={agent} className="flex items-center justify-between">
                  <span className="text-gray-300">{agent}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 24 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-sm ${
                          Math.random() > 0.3 
                            ? `bg-cyan-${400 + Math.floor(Math.random() * 200)}` 
                            : 'bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-2xl border border-slate-700/50 p-6">
            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              Key Insights
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white text-sm font-medium">Creativity spike detected</p>
                  <p className="text-gray-400 text-xs">Athena generated 23% more novel concepts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white text-sm font-medium">Latency optimization needed</p>
                  <p className="text-gray-400 text-xs">Ethos showing 15% slower response times</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white text-sm font-medium">Ethical compliance perfect</p>
                  <p className="text-gray-400 text-xs">Zero bias incidents in the last 48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Metrics;