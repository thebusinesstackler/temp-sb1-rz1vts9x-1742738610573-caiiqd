import React from 'react';
import { motion } from 'framer-motion';
import { X, Lock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ToolAccessPopupProps {
  onClose: () => void;
}

const ToolAccessPopup: React.FC<ToolAccessPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div 
        className="bg-white rounded-lg shadow-xl max-w-lg w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-full p-2 mr-3">
                <Lock className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-2xl font-bold">Premium Tools</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4">
              Unlock Our Complete Suite of Research Tools
            </h3>
            <p className="text-gray-600 mb-6">
              Get access to our full range of clinical research tools by signing up for our patient recruitment services.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <ul className="space-y-3 text-left">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-700 mr-2" />
                  <span>Streamline your research workflow</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-700 mr-2" />
                  <span>Access premium features and templates</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-purple-700 mr-2" />
                  <span>Get dedicated support from our team</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={onClose}
              className="px-6 py-2 rounded-md font-semibold text-gray-700 hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Maybe Later
            </motion.button>
            <Link to="/pricing">
              <motion.button
                className="bg-purple-700 text-white px-6 py-2 rounded-md font-semibold flex items-center justify-center hover:bg-purple-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Pricing <ChevronRight className="ml-2 h-4 w-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ToolAccessPopup;