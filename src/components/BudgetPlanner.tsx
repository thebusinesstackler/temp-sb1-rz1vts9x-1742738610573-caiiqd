import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, DollarSign, Calculator, Download, Save, Trash2 } from 'lucide-react';

interface BudgetPlannerProps {
  onClose: () => void;
}

const BudgetPlanner: React.FC<BudgetPlannerProps> = ({ onClose }) => {
  const [budget, setBudget] = useState({
    studySetup: {
      irb: 0,
      regulatory: 0,
      training: 0,
      equipment: 0,
    },
    perPatient: {
      screening: 0,
      visits: 0,
      procedures: 0,
      compensation: 0,
    },
    staffing: {
      coordinator: 0,
      investigator: 0,
      nurses: 0,
      dataManager: 0,
    },
    overhead: {
      facilities: 0,
      admin: 0,
      other: 0,
    }
  });

  const [patientCount, setPatientCount] = useState(0);

  const calculateTotal = () => {
    const setupTotal = Object.values(budget.studySetup).reduce((a, b) => a + b, 0);
    const perPatientTotal = Object.values(budget.perPatient).reduce((a, b) => a + b, 0) * patientCount;
    const staffingTotal = Object.values(budget.staffing).reduce((a, b) => a + b, 0);
    const overheadTotal = Object.values(budget.overhead).reduce((a, b) => a + b, 0);
    return setupTotal + perPatientTotal + staffingTotal + overheadTotal;
  };

  const handleInputChange = (category: keyof typeof budget, item: string, value: string) => {
    setBudget(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [item]: parseFloat(value) || 0
      }
    }));
  };

  const resetBudget = () => {
    setBudget({
      studySetup: { irb: 0, regulatory: 0, training: 0, equipment: 0 },
      perPatient: { screening: 0, visits: 0, procedures: 0, compensation: 0 },
      staffing: { coordinator: 0, investigator: 0, nurses: 0, dataManager: 0 },
      overhead: { facilities: 0, admin: 0, other: 0 }
    });
    setPatientCount(0);
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
                <Calculator className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-2xl font-bold">Study Budget Planner</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Study Setup Costs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Study Setup Costs</h3>
              <div className="space-y-4">
                {Object.entries(budget.studySetup).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <label className="w-1/2 capitalize">{key}:</label>
                    <div className="relative flex-1">
                      <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => handleInputChange('studySetup', key, e.target.value)}
                        className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Per Patient Costs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Per Patient Costs</h3>
              <div className="mb-4">
                <label className="block mb-2">Number of Patients:</label>
                <input
                  type="number"
                  value={patientCount}
                  onChange={(e) => setPatientCount(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="space-y-4">
                {Object.entries(budget.perPatient).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <label className="w-1/2 capitalize">{key}:</label>
                    <div className="relative flex-1">
                      <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => handleInputChange('perPatient', key, e.target.value)}
                        className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Staffing Costs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Staffing Costs</h3>
              <div className="space-y-4">
                {Object.entries(budget.staffing).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <label className="w-1/2 capitalize">{key}:</label>
                    <div className="relative flex-1">
                      <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => handleInputChange('staffing', key, e.target.value)}
                        className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overhead Costs */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Overhead Costs</h3>
              <div className="space-y-4">
                {Object.entries(budget.overhead).map(([key, value]) => (
                  <div key={key} className="flex items-center">
                    <label className="w-1/2 capitalize">{key}:</label>
                    <div className="relative flex-1">
                      <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => handleInputChange('overhead', key, e.target.value)}
                        className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Total Budget</h3>
                <p className="text-gray-600">Including all costs and overhead</p>
              </div>
              <div className="text-2xl font-bold text-purple-700">
                ${calculateTotal().toLocaleString()}
              </div>
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
                Save Budget
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
              onClick={resetBudget}
              className="text-red-600 px-6 py-2 rounded-md font-semibold flex items-center hover:bg-red-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Reset
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BudgetPlanner;