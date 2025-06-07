import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Shield, HelpCircle, FileText, Globe, Moon, Sun } from 'lucide-react';
import MenuSection from '../ui/MenuSection';

const Menu: React.FC = () => {
  const menuSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Profile & Credentials', action: () => {} },
        { icon: Settings, label: 'App Settings', action: () => {} },
        { icon: Globe, label: 'Language', action: () => {} },
      ]
    },
    {
      title: 'Privacy & Security',
      items: [
        { icon: Shield, label: 'Privacy Center', action: () => {} },
        { icon: FileText, label: 'GDPR Controls', action: () => {} },
        { icon: Settings, label: 'Data Management', action: () => {} },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', action: () => {} },
        { icon: FileText, label: 'Developer Docs', action: () => {} },
        { icon: Settings, label: 'Feedback', action: () => {} },
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pb-20 px-4 pt-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-light text-white mb-2">Command Core</h1>
          <p className="text-gray-400">Settings, documentation, and support</p>
        </motion.div>

        {/* User Profile */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 rounded-2xl border border-slate-700/50 p-6 mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-2xl">
              🧠
            </div>
            <div>
              <h2 className="text-xl font-medium text-white">Neural Architect</h2>
              <p className="text-gray-400">Premium Account • 47 Active Agents</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Online</span>
                </div>
                <div className="text-sm text-gray-400">Last active: Now</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Menu Sections */}
        <div className="space-y-6">
          {menuSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <MenuSection section={section} />
            </motion.div>
          ))}
        </div>

        {/* App Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          <p>Synth3sis v1.0.0</p>
          <p className="mt-1">Powered by Or4cl3 AI Solutions</p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Support</a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Menu;