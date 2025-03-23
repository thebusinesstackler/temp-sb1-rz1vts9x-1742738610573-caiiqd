import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckSquare, Square, Download, Save, RefreshCw, AlertCircle, Search, Filter, Plus, Trash2 } from 'lucide-react';

interface IRBChecklistProps {
  onClose: () => void;
}

interface ChecklistItem {
  id: number;
  text: string;
  required: boolean;
  completed: boolean;
  category: string;
  notes: string;
  dueDate?: string;
}

const IRBChecklist: React.FC<IRBChecklistProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCompleted, setShowCompleted] = useState(true);
  const [studyInfo, setStudyInfo] = useState({
    title: '',
    piName: '',
    irbNumber: '',
    submissionDate: ''
  });

  // Default checklist items
  const [items, setItems] = useState<ChecklistItem[]>([
    {
      id: 1,
      text: "Protocol Document",
      required: true,
      completed: false,
      category: "Core Documents",
      notes: "Must include version number and date"
    },
    {
      id: 2,
      text: "Informed Consent Form",
      required: true,
      completed: false,
      category: "Core Documents",
      notes: "Include all versions in required languages"
    },
    {
      id: 3,
      text: "Investigator's Brochure",
      required: true,
      completed: false,
      category: "Core Documents",
      notes: "Most recent version"
    },
    {
      id: 4,
      text: "CV and Medical License of PI",
      required: true,
      completed: false,
      category: "Personnel Documents",
      notes: "Must be signed and dated within last 2 years"
    },
    {
      id: 5,
      text: "Financial Disclosure Forms",
      required: true,
      completed: false,
      category: "Personnel Documents",
      notes: "Required for all investigators"
    },
    {
      id: 6,
      text: "Study Budget",
      required: true,
      completed: false,
      category: "Administrative",
      notes: "Include detailed budget breakdown"
    },
    {
      id: 7,
      text: "Recruitment Materials",
      required: true,
      completed: false,
      category: "Study Materials",
      notes: "All advertisements and recruitment scripts"
    },
    {
      id: 8,
      text: "Case Report Forms",
      required: false,
      completed: false,
      category: "Study Materials",
      notes: "Template forms for data collection"
    }
  ]);

  // Categories
  const categories = ['All', 'Core Documents', 'Personnel Documents', 'Administrative', 'Study Materials'];

  // Filter items based on search, category, and completion status
  const filteredItems = items.filter(item => {
    const matchesSearch = item.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesCompletion = showCompleted || !item.completed;
    return matchesSearch && matchesCategory && matchesCompletion;
  });

  const addItem = () => {
    const newId = Math.max(...items.map(item => item.id)) + 1;
    setItems([...items, {
      id: newId,
      text: '',
      required: false,
      completed: false,
      category: selectedCategory === 'All' ? 'Core Documents' : selectedCategory,
      notes: ''
    }]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleItem = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const updateItem = (id: number, field: keyof ChecklistItem, value: string | boolean) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const calculateProgress = () => {
    const requiredItems = items.filter(item => item.required);
    const completedRequired = requiredItems.filter(item => item.completed);
    return {
      total: items.length,
      completed: items.filter(item => item.completed).length,
      requiredTotal: requiredItems.length,
      requiredCompleted: completedRequired.length,
      percentage: Math.round((completedRequired.length / requiredItems.length) * 100) || 0
    };
  };

  const progress = calculateProgress();

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
                <CheckSquare className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-2xl font-bold">IRB Submission Checklist</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Study Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Study Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Study Title
                </label>
                <input
                  type="text"
                  value={studyInfo.title}
                  onChange={(e) => setStudyInfo({ ...studyInfo, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter study title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Principal Investigator
                </label>
                <input
                  type="text"
                  value={studyInfo.piName}
                  onChange={(e) => setStudyInfo({ ...studyInfo, piName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter PI name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  IRB Number
                </label>
                <input
                  type="text"
                  value={studyInfo.irbNumber}
                  onChange={(e) => setStudyInfo({ ...studyInfo, irbNumber: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter IRB number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Submission Date
                </label>
                <input
                  type="date"
                  value={studyInfo.submissionDate}
                  onChange={(e) => setStudyInfo({ ...studyInfo, submissionDate: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Submission Progress</h3>
              <div className="text-sm text-gray-600">
                {progress.requiredCompleted}/{progress.requiredTotal} required items completed
              </div>
            </div>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-600 transition-all duration-300"
                style={{ width: `${progress.percentage}%` }}
              ></div>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-700">{progress.percentage}%</div>
                <div className="text-sm text-gray-600">Overall Progress</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-700">{progress.completed}</div>
                <div className="text-sm text-gray-600">Items Completed</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-700">{progress.total - progress.completed}</div>
                <div className="text-sm text-gray-600">Items Remaining</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-700">{progress.requiredTotal - progress.requiredCompleted}</div>
                <div className="text-sm text-gray-600">Required Remaining</div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search checklist items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showCompleted}
                  onChange={(e) => setShowCompleted(e.target.checked)}
                  className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                />
                Show Completed Items
              </label>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                className={`bg-gray-50 p-4 rounded-lg ${item.completed ? 'border-l-4 border-green-500' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="mt-1 mr-4 text-gray-400 hover:text-purple-600"
                  >
                    {item.completed ? (
                      <CheckSquare className="h-5 w-5 text-green-500" />
                    ) : (
                      <Square className="h-5 w-5" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <input
                        type="text"
                        value={item.text}
                        onChange={(e) => updateItem(item.id, 'text', e.target.value)}
                        className={`flex-1 bg-transparent font-medium ${item.completed ? 'line-through text-gray-500' : ''}`}
                        placeholder="Enter item description"
                      />
                      {!item.required && (
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-2 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <select
                        value={item.category}
                        onChange={(e) => updateItem(item.id, 'category', e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                      >
                        {categories.filter(c => c !== 'All').map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                      <input
                        type="date"
                        value={item.dueDate}
                        onChange={(e) => updateItem(item.id, 'dueDate', e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                      />
                      <input
                        type="text"
                        value={item.notes}
                        onChange={(e) => updateItem(item.id, 'notes', e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                        placeholder="Add notes..."
                      />
                    </div>
                    {item.required && (
                      <div className="mt-2 flex items-center text-sm text-red-600">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        Required item
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add Item Button */}
          <motion.button
            onClick={addItem}
            className="mt-6 w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-200 transition"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Item
          </motion.button>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-between">
            <div className="space-x-4">
              <motion.button
                className="bg-purple-700 text-white px-6 py-2 rounded-md font-semibold flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Checklist
              </motion.button>
              <motion.button
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md font-semibold flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2 h-4 w-4" />
                Export
              </motion.button>
            </div>
            <motion.button
              onClick={() => {
                setItems(items.map(item => ({ ...item, completed: false })));
                setStudyInfo({ title: '', piName: '', irbNumber: '', submissionDate: '' });
              }}
              className="text-red-600 px-6 py-2 rounded-md font-semibold flex items-center hover:bg-red-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset All
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IRBChecklist;