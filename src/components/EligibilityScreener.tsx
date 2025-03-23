import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, CheckCircle, XCircle, ChevronRight, Code, Copy, 
  Plus, Trash2, Save, Download, Eye, Settings
} from 'lucide-react';

interface EligibilityScreenerProps {
  onClose: () => void;
}

interface Criterion {
  id: number;
  question: string;
  type: 'yesno' | 'number' | 'select';
  options?: string[];
  required: boolean;
  disqualifying?: boolean;
  minValue?: number;
  maxValue?: number;
  unit?: string;
}

const EligibilityScreener: React.FC<EligibilityScreenerProps> = ({ onClose }) => {
  const [studyInfo, setStudyInfo] = useState({
    title: '',
    description: '',
    sponsorName: '',
    contactEmail: '',
    primaryColor: '#6B21A8', // Default purple color
    buttonText: 'Check Your Eligibility'
  });

  const [criteria, setCriteria] = useState<Criterion[]>([
    {
      id: 1,
      question: 'Are you 18 years or older?',
      type: 'yesno',
      required: true,
      disqualifying: false
    }
  ]);

  const [showEmbedCode, setShowEmbedCode] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const addCriterion = () => {
    const newId = Math.max(...criteria.map(c => c.id)) + 1;
    setCriteria([...criteria, {
      id: newId,
      question: '',
      type: 'yesno',
      required: true,
      disqualifying: false
    }]);
  };

  const removeCriterion = (id: number) => {
    setCriteria(criteria.filter(c => c.id !== id));
  };

  const updateCriterion = (id: number, updates: Partial<Criterion>) => {
    setCriteria(criteria.map(c => 
      c.id === id ? { ...c, ...updates } : c
    ));
  };

  const generateEmbedCode = () => {
    // Create a minified version of the screener data
    const screenerData = {
      info: studyInfo,
      criteria: criteria
    };
    
    // Generate the embed code
    return `
<!-- TheraNovex Eligibility Screener -->
<div id="theranovex-screener"></div>
<script>
  window.theranovexScreener = ${JSON.stringify(screenerData)};
</script>
<script src="https://screener.theranovex.com/embed.js"></script>
    `.trim();
  };

  const copyEmbedCode = () => {
    const embedCode = generateEmbedCode();
    navigator.clipboard.writeText(embedCode);
    // Show success message
  };

  const saveScreener = () => {
    // Save screener configuration
    console.log('Saving screener:', { studyInfo, criteria });
    // Show success message
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
                <CheckCircle className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-2xl font-bold">Eligibility Screener Builder</h2>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => setPreviewMode(!previewMode)}
                className={`p-2 rounded-md ${previewMode ? 'bg-purple-100 text-purple-700' : 'text-gray-500 hover:bg-gray-100'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="h-5 w-5" />
              </motion.button>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {!previewMode ? (
            <div className="space-y-8">
              {/* Study Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Study Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Study Title *
                    </label>
                    <input
                      type="text"
                      value={studyInfo.title}
                      onChange={(e) => setStudyInfo({ ...studyInfo, title: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter study title"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sponsor Name *
                    </label>
                    <input
                      type="text"
                      value={studyInfo.sponsorName}
                      onChange={(e) => setStudyInfo({ ...studyInfo, sponsorName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter sponsor name"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Study Description *
                    </label>
                    <textarea
                      value={studyInfo.description}
                      onChange={(e) => setStudyInfo({ ...studyInfo, description: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      rows={3}
                      placeholder="Enter study description"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      value={studyInfo.contactEmail}
                      onChange={(e) => setStudyInfo({ ...studyInfo, contactEmail: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter contact email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Button Text
                    </label>
                    <input
                      type="text"
                      value={studyInfo.buttonText}
                      onChange={(e) => setStudyInfo({ ...studyInfo, buttonText: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Check Your Eligibility"
                    />
                  </div>
                </div>
              </div>

              {/* Screening Criteria */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Screening Criteria</h3>
                  <motion.button
                    onClick={addCriterion}
                    className="text-purple-700 px-4 py-2 rounded-md font-semibold flex items-center hover:bg-purple-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Criterion
                  </motion.button>
                </div>

                <div className="space-y-4">
                  {criteria.map((criterion) => (
                    <div key={criterion.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="flex-1 mr-4">
                          <div className="mb-4">
                            <input
                              type="text"
                              value={criterion.question}
                              onChange={(e) => updateCriterion(criterion.id, { question: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md"
                              placeholder="Enter screening question"
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Answer Type
                              </label>
                              <select
                                value={criterion.type}
                                onChange={(e) => updateCriterion(criterion.id, { type: e.target.value as 'yesno' | 'number' | 'select' })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                              >
                                <option value="yesno">Yes/No</option>
                                <option value="number">Number</option>
                                <option value="select">Multiple Choice</option>
                              </select>
                            </div>
                            {criterion.type === 'number' && (
                              <>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Range
                                  </label>
                                  <div className="flex items-center space-x-2">
                                    <input
                                      type="number"
                                      value={criterion.minValue}
                                      onChange={(e) => updateCriterion(criterion.id, { minValue: parseInt(e.target.value) })}
                                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                      placeholder="Min"
                                    />
                                    <span>to</span>
                                    <input
                                      type="number"
                                      value={criterion.maxValue}
                                      onChange={(e) => updateCriterion(criterion.id, { maxValue: parseInt(e.target.value) })}
                                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                      placeholder="Max"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Unit
                                  </label>
                                  <input
                                    type="text"
                                    value={criterion.unit}
                                    onChange={(e) => updateCriterion(criterion.id, { unit: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    placeholder="e.g., years, kg"
                                  />
                                </div>
                              </>
                            )}
                            {criterion.type === 'select' && (
                              <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Options (one per line)
                                </label>
                                <textarea
                                  value={criterion.options?.join('\n')}
                                  onChange={(e) => updateCriterion(criterion.id, { options: e.target.value.split('\n') })}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                  rows={3}
                                  placeholder="Enter options..."
                                />
                              </div>
                            )}
                          </div>
                          <div className="mt-4 flex items-center space-x-6">
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                checked={criterion.required}
                                onChange={(e) => updateCriterion(criterion.id, { required: e.target.checked })}
                                className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                              />
                              Required
                            </label>
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                checked={criterion.disqualifying}
                                onChange={(e) => updateCriterion(criterion.id, { disqualifying: e.target.checked })}
                                className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                              />
                              Disqualifying if No
                            </label>
                          </div>
                        </div>
                        <button
                          onClick={() => removeCriterion(criterion.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between">
                <div className="space-x-4">
                  <motion.button
                    onClick={saveScreener}
                    className="bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save Screener
                  </motion.button>
                  <motion.button
                    onClick={() => setShowEmbedCode(true)}
                    className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code className="mr-2 h-4 w-4" />
                    Get Embed Code
                  </motion.button>
                </div>
                <motion.button
                  onClick={() => setPreviewMode(true)}
                  className="text-purple-700 px-6 py-3 rounded-md font-semibold flex items-center hover:bg-purple-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Preview <Eye className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </div>
          ) : (
            // Preview Mode
            <div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">{studyInfo.title || 'Study Title'}</h3>
                <p className="text-gray-600 mb-6">{studyInfo.description || 'Study description'}</p>
                
                <div className="space-y-6">
                  {criteria.map((criterion, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium mb-3">{criterion.question}</p>
                      {criterion.type === 'yesno' && (
                        <div className="flex space-x-4">
                          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">Yes</button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">No</button>
                        </div>
                      )}
                      {criterion.type === 'number' && (
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            className="px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter value"
                          />
                          {criterion.unit && <span className="text-gray-600">{criterion.unit}</span>}
                        </div>
                      )}
                      {criterion.type === 'select' && criterion.options && (
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                          <option value="">Select an option</option>
                          {criterion.options.map((option, i) => (
                            <option key={i} value={option}>{option}</option>
                          ))}
                        </select>
                      )}
                    </div>
                  ))}
                </div>

                <motion.button 
                  className="mt-6 w-full bg-purple-700 text-white px-6 py-3 rounded-md font-semibold"
                  style={{ backgroundColor: studyInfo.primaryColor }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {studyInfo.buttonText}
                </motion.button>
              </div>

              <div className="mt-6 flex justify-between">
                <motion.button
                  onClick={() => setPreviewMode(false)}
                  className="text-gray-600 px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Edit Screener
                </motion.button>
                <motion.button
                  onClick={() => setShowEmbedCode(true)}
                  className="bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code className="mr-2 h-4 w-4" />
                  Get Embed Code
                </motion.button>
              </div>
            </div>
          )}

          {/* Embed Code Modal */}
          {showEmbedCode && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <motion.div 
                className="bg-white rounded-lg p-6 max-w-2xl w-full m-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Embed Code</h3>
                  <button 
                    onClick={() => setShowEmbedCode(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-gray-600 mb-4">
                  Copy and paste this code into your website where you want the screener to appear:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <pre className="whitespace-pre-wrap text-sm font-mono">
                    {generateEmbedCode()}
                  </pre>
                </div>
                <div className="flex justify-end">
                  <motion.button
                    onClick={copyEmbedCode}
                    className="bg-purple-700 text-white px-6 py-2 rounded-md font-semibold flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Code
                  </motion.button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EligibilityScreener;