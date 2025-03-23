import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, FileText, Send, Info } from 'lucide-react';

interface GuestPostFormProps {
  onClose: () => void;
  onSubmit: (data: {
    title: string;
    author: string;
    authorTitle: string;
    content: string;
  }) => void;
}

const GuestPostForm: React.FC<GuestPostFormProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    authorTitle: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div 
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-full p-2 mr-3">
                <FileText className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-2xl font-bold">Submit a White Paper</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-blue-500 mt-1 mr-3" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Formatting Guidelines</h3>
                <p className="text-blue-800 text-sm">
                  Your content supports markdown formatting:
                </p>
                <ul className="text-blue-800 text-sm mt-2 list-disc ml-4">
                  <li># Header 1, ## Header 2, ### Header 3</li>
                  <li>**Bold text**</li>
                  <li>*Italic text*</li>
                  <li>- Bullet points</li>
                  <li>1. Numbered lists</li>
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your white paper title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author Name *
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author Title/Position *
                </label>
                <input
                  type="text"
                  value={formData.authorTitle}
                  onChange={(e) => setFormData({ ...formData, authorTitle: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., Clinical Research Director"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content *
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                  rows={15}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
                  placeholder="# Your White Paper Title

## Executive Summary
[Your summary here...]

## Introduction
[Your introduction here...]"
                />
              </div>

              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  className="bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center hover:bg-purple-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit White Paper <Send className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default GuestPostForm;