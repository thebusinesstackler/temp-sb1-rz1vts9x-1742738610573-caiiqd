import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Shield, Upload, Download, Eye, EyeOff, RefreshCw, Check } from 'lucide-react';

interface DataAnonymizerProps {
  onClose: () => void;
}

const DataAnonymizer: React.FC<DataAnonymizerProps> = ({ onClose }) => {
  const [inputData, setInputData] = useState('');
  const [anonymizedData, setAnonymizedData] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [settings, setSettings] = useState({
    names: true,
    dates: true,
    addresses: true,
    phoneNumbers: true,
    emails: true,
    ids: true,
    customPatterns: ''
  });

  const handleAnonymize = () => {
    // This is a simplified example. In a real application, you would use more sophisticated
    // anonymization techniques and patterns
    let processed = inputData;

    if (settings.names) {
      processed = processed.replace(/[A-Z][a-z]+ [A-Z][a-z]+/g, '[NAME]');
    }
    if (settings.dates) {
      processed = processed.replace(/\d{2}\/\d{2}\/\d{4}/g, '[DATE]');
      processed = processed.replace(/\d{4}-\d{2}-\d{2}/g, '[DATE]');
    }
    if (settings.phoneNumbers) {
      processed = processed.replace(/\d{3}[-.]?\d{3}[-.]?\d{4}/g, '[PHONE]');
    }
    if (settings.emails) {
      processed = processed.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[EMAIL]');
    }
    if (settings.ids) {
      processed = processed.replace(/\b\d{6,}\b/g, '[ID]');
    }

    setAnonymizedData(processed);
  };

  const handleSettingChange = (setting: keyof typeof settings, value: boolean | string) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
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
                <Shield className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-2xl font-bold">Data Anonymizer</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Input Section */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Input Data</h3>
                <textarea
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                  className="w-full h-64 px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Paste your data here..."
                />
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Anonymized Output</h3>
                <div className="relative">
                  <textarea
                    value={anonymizedData}
                    readOnly
                    className="w-full h-64 px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                    placeholder="Anonymized data will appear here..."
                  />
                  <button 
                    onClick={() => setShowPreview(!showPreview)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  >
                    {showPreview ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Settings Panel */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Anonymization Settings</h3>
              <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.names}
                      onChange={(e) => handleSettingChange('names', e.target.checked)}
                      className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                    />
                    Names
                  </label>
                  <Check className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.dates}
                      onChange={(e) => handleSettingChange('dates', e.target.checked)}
                      className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                    />
                    Dates
                  </label>
                  <Check className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.addresses}
                      onChange={(e) => handleSettingChange('addresses', e.target.checked)}
                      className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                    />
                    Addresses
                  </label>
                  <Check className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.phoneNumbers}
                      onChange={(e) => handleSettingChange('phoneNumbers', e.target.checked)}
                      className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                    />
                    Phone Numbers
                  </label>
                  <Check className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.emails}
                      onChange={(e) => handleSettingChange('emails', e.target.checked)}
                      className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                    />
                    Email Addresses
                  </label>
                  <Check className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.ids}
                      onChange={(e) => handleSettingChange('ids', e.target.checked)}
                      className="rounded text-purple-600 focus:ring-purple-500 mr-2"
                    />
                    ID Numbers
                  </label>
                  <Check className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Custom Patterns
                  </label>
                  <textarea
                    value={settings.customPatterns}
                    onChange={(e) => handleSettingChange('customPatterns', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    placeholder="Enter custom regex patterns..."
                    rows={3}
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <motion.button
                  onClick={handleAnonymize}
                  className="w-full bg-purple-700 text-white px-4 py-2 rounded-md font-semibold flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Anonymize Data
                </motion.button>
                <motion.button
                  className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-semibold flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Import Data
                </motion.button>
                <motion.button
                  className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-semibold flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export Anonymized Data
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DataAnonymizer;