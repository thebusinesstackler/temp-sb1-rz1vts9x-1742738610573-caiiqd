import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, FileText, Plus, Trash2, Download, Save, ChevronRight } from 'lucide-react';

interface ConsentBuilderProps {
  onClose: () => void;
}

const ConsentBuilder: React.FC<ConsentBuilderProps> = ({ onClose }) => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: 'Introduction',
      content: '',
      required: true
    },
    {
      id: 2,
      title: 'Purpose of the Study',
      content: '',
      required: true
    },
    {
      id: 3,
      title: 'Study Procedures',
      content: '',
      required: true
    }
  ]);

  const [studyInfo, setStudyInfo] = useState({
    title: '',
    sponsor: '',
    principalInvestigator: '',
    contactInfo: ''
  });

  const addSection = () => {
    const newId = Math.max(...sections.map(s => s.id)) + 1;
    setSections([...sections, {
      id: newId,
      title: 'New Section',
      content: '',
      required: false
    }]);
  };

  const removeSection = (id: number) => {
    setSections(sections.filter(section => section.id !== id));
  };

  const updateSection = (id: number, field: 'title' | 'content', value: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, [field]: value } : section
    ));
  };

  const handleStudyInfoChange = (field: keyof typeof studyInfo, value: string) => {
    setStudyInfo(prev => ({
      ...prev,
      [field]: value
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
                <FileText className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-2xl font-bold">Informed Consent Builder</h2>
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
                  onChange={(e) => handleStudyInfoChange('title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter study title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sponsor
                </label>
                <input
                  type="text"
                  value={studyInfo.sponsor}
                  onChange={(e) => handleStudyInfoChange('sponsor', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter sponsor name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Principal Investigator
                </label>
                <input
                  type="text"
                  value={studyInfo.principalInvestigator}
                  onChange={(e) => handleStudyInfoChange('principalInvestigator', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter PI name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Information
                </label>
                <input
                  type="text"
                  value={studyInfo.contactInfo}
                  onChange={(e) => handleStudyInfoChange('contactInfo', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter contact information"
                />
              </div>
            </div>
          </div>

          {/* Consent Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1 mr-4">
                    <input
                      type="text"
                      value={section.title}
                      onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md font-semibold"
                      placeholder="Section Title"
                    />
                  </div>
                  {!section.required && (
                    <button 
                      onClick={() => removeSection(section.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
                <textarea
                  value={section.content}
                  onChange={(e) => updateSection(section.id, 'content', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md h-32"
                  placeholder="Enter section content..."
                />
                {section.required && (
                  <div className="mt-2 text-sm text-gray-500">
                    This is a required section
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Add Section Button */}
          <motion.button
            onClick={addSection}
            className="mt-6 w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-200 transition"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Section
          </motion.button>

          {/* Preview Section */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Document Preview</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h1 className="text-2xl font-bold mb-4">{studyInfo.title || 'Study Title'}</h1>
              <div className="mb-6">
                <p><strong>Sponsor:</strong> {studyInfo.sponsor || '[Sponsor Name]'}</p>
                <p><strong>Principal Investigator:</strong> {studyInfo.principalInvestigator || '[PI Name]'}</p>
                <p><strong>Contact:</strong> {studyInfo.contactInfo || '[Contact Information]'}</p>
              </div>
              {sections.map((section) => (
                <div key={section.id} className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                  <p className="whitespace-pre-wrap">{section.content || '[Section Content]'}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-between">
            <div className="space-x-4">
              <motion.button
                className="bg-purple-700 text-white px-6 py-2 rounded-md font-semibold flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </motion.button>
              <motion.button
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md font-semibold flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2 h-4 w-4" />
                Export as PDF
              </motion.button>
            </div>
            <motion.button
              className="text-purple-700 px-6 py-2 rounded-md font-semibold flex items-center hover:bg-purple-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Preview <ChevronRight className="ml-2 h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ConsentBuilder;