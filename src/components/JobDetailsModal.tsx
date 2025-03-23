import React from 'react';
import { motion } from 'framer-motion';
import { X, Building, MapPin, Clock, ArrowRight } from 'lucide-react';

interface JobListing {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  featured?: boolean;
}

interface JobDetailsModalProps {
  job: JobListing;
  onClose: () => void;
}

const JobDetailsModal: React.FC<JobDetailsModalProps> = ({ job, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div 
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              {job.featured && (
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full mb-2">
                  Featured Position
                </div>
              )}
              <h2 className="text-2xl font-bold">{job.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center text-gray-600">
              <Building className="h-5 w-5 mr-2" />
              {job.department}
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              {job.location}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              {job.type}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Position Overview</h3>
              <p className="text-gray-600">{job.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Key Requirements</h3>
              <ul className="list-disc pl-5 space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="text-gray-600">{requirement}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">What We Offer</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Competitive salary and benefits package</li>
                <li>Professional development opportunities</li>
                <li>Flexible work arrangements</li>
                <li>Collaborative and innovative work environment</li>
                <li>Opportunity to make a meaningful impact in healthcare</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">How to Apply</h3>
              <p className="text-gray-600 mb-4">
                Ready to join our team? Submit your application by clicking the button below. Please include your resume and a cover letter explaining why you would be a great fit for this role.
              </p>
              <motion.button 
                className="bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center hover:bg-purple-800 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default JobDetailsModal;