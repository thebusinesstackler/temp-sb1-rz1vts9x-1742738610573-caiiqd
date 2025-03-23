import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, GraduationCap, Calendar, AlertCircle, Download, Save, Plus, Trash2, Search, Filter, Clock, CheckCircle, XCircle } from 'lucide-react';

interface TrainingTrackerProps {
  onClose: () => void;
}

interface TrainingRecord {
  id: number;
  name: string;
  type: string;
  completionDate: string;
  expirationDate: string;
  status: 'active' | 'expired' | 'expiring';
  certificateUrl?: string;
  notes: string;
}

const TrainingTracker: React.FC<TrainingTrackerProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Training types
  const trainingTypes = [
    'All',
    'GCP',
    'Human Subjects Protection',
    'HIPAA',
    'Protocol Specific',
    'Safety Training',
    'Lab Safety',
    'Data Management',
    'Other'
  ];

  // Sample training records
  const [records, setRecords] = useState<TrainingRecord[]>([
    {
      id: 1,
      name: "John Smith",
      type: "GCP",
      completionDate: "2024-12-15",
      expirationDate: "2025-12-15",
      status: "active",
      notes: "CITI Program GCP for Clinical Trials with Investigational Drugs and Medical Devices (ICH Focus)"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      type: "Human Subjects Protection",
      completionDate: "2024-11-01",
      expirationDate: "2025-11-01",
      status: "active",
      notes: "NIH Human Subjects Protection Training"
    },
    {
      id: 3,
      name: "Michael Chen",
      type: "HIPAA",
      completionDate: "2024-06-15",
      expirationDate: "2025-06-15",
      status: "expiring",
      notes: "Annual HIPAA Compliance Training"
    }
  ]);

  // Filter records based on search and filters
  const filteredRecords = records.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || record.type === selectedType;
    const matchesStatus = selectedStatus === 'All' || record.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const addRecord = () => {
    const newId = Math.max(...records.map(r => r.id)) + 1;
    setRecords([...records, {
      id: newId,
      name: '',
      type: selectedType === 'All' ? 'GCP' : selectedType,
      completionDate: '',
      expirationDate: '',
      status: 'active',
      notes: ''
    }]);
  };

  const removeRecord = (id: number) => {
    setRecords(records.filter(record => record.id !== id));
  };

  const updateRecord = (id: number, field: keyof TrainingRecord, value: string) => {
    setRecords(records.map(record =>
      record.id === id ? { ...record, [field]: value } : record
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'expired':
        return 'text-red-600 bg-red-100';
      case 'expiring':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
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
                <GraduationCap className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-2xl font-bold">Training Tracker</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Search and Filters */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search training records..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none bg-white"
                >
                  {trainingTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none bg-white"
                >
                  <option value="All">All Status</option>
                  <option value="active">Active</option>
                  <option value="expiring">Expiring Soon</option>
                  <option value="expired">Expired</option>
                </select>
              </div>
            </div>
          </div>

          {/* Training Records */}
          <div className="space-y-4">
            {filteredRecords.map((record) => (
              <motion.div 
                key={record.id}
                className="bg-gray-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={record.name}
                      onChange={(e) => updateRecord(record.id, 'name', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md font-semibold"
                      placeholder="Enter name"
                    />
                  </div>
                  <select
                    value={record.type}
                    onChange={(e) => updateRecord(record.id, 'type', e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md"
                  >
                    {trainingTypes.filter(t => t !== 'All').map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(record.status)}`}>
                    {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                  </div>
                  <button
                    onClick={() => removeRecord(record.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Completion Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        value={record.completionDate}
                        onChange={(e) => updateRecord(record.id, 'completionDate', e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        value={record.expirationDate}
                        onChange={(e) => updateRecord(record.id, 'expirationDate', e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    value={record.notes}
                    onChange={(e) => updateRecord(record.id, 'notes', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    rows={2}
                    placeholder="Add notes..."
                  />
                </div>
                {record.status === 'expiring' && (
                  <div className="mt-4 flex items-center text-yellow-600 bg-yellow-50 p-3 rounded-md">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>Training will expire soon. Please schedule renewal.</span>
                  </div>
                )}
                {record.status === 'expired' && (
                  <div className="mt-4 flex items-center text-red-600 bg-red-50 p-3 rounded-md">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>Training has expired. Renewal required.</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Add Record Button */}
          <motion.button
            onClick={addRecord}
            className="mt-6 w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-200 transition"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Training Record
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
                Save Records
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
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrainingTracker;