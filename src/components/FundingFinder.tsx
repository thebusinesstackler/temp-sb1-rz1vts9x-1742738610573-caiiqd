import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Search, Filter, DollarSign, Calendar, Globe, ChevronRight, ExternalLink, BookmarkPlus, Share2 } from 'lucide-react';

interface FundingFinderProps {
  onClose: () => void;
}

interface FundingOpportunity {
  id: number;
  title: string;
  organization: string;
  amount: string;
  deadline: string;
  description: string;
  category: string;
  location: string;
  eligibility: string[];
  url: string;
}

const FundingFinder: React.FC<FundingFinderProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [amountRange, setAmountRange] = useState({ min: '', max: '' });

  // Categories
  const categories = [
    'All',
    'Clinical Trials',
    'Medical Research',
    'Equipment Grants',
    'Infrastructure',
    'Training & Education',
    'Innovation',
    'Diversity & Inclusion'
  ];

  // Locations
  const locations = [
    'All',
    'United States',
    'Europe',
    'Asia-Pacific',
    'Global'
  ];

  // Sample funding opportunities
  const opportunities: FundingOpportunity[] = [
    {
      id: 1,
      title: "Clinical Trial Innovation Grant",
      organization: "National Health Foundation",
      amount: "$250,000 - $500,000",
      deadline: "2025-06-30",
      description: "Funding for innovative approaches to clinical trial design and execution, with a focus on improving patient recruitment and retention.",
      category: "Clinical Trials",
      location: "United States",
      eligibility: [
        "Research institutions",
        "Academic medical centers",
        "Independent research organizations"
      ],
      url: "#"
    },
    {
      id: 2,
      title: "Diversity in Research Initiative",
      organization: "Global Health Alliance",
      amount: "$100,000 - $300,000",
      deadline: "2025-07-15",
      description: "Supporting research sites in implementing strategies to increase diversity in clinical trial participation.",
      category: "Diversity & Inclusion",
      location: "Global",
      eligibility: [
        "Clinical research sites",
        "Healthcare providers",
        "Community organizations"
      ],
      url: "#"
    },
    {
      id: 3,
      title: "Research Equipment Modernization Grant",
      organization: "Medical Technology Foundation",
      amount: "$50,000 - $150,000",
      deadline: "2025-08-01",
      description: "Grants for upgrading or purchasing new research equipment to enhance clinical trial capabilities.",
      category: "Equipment Grants",
      location: "United States",
      eligibility: [
        "Research laboratories",
        "Clinical trial facilities",
        "Medical centers"
      ],
      url: "#"
    }
  ];

  // Filter opportunities based on search criteria
  const filteredOpportunities = opportunities.filter(opportunity => {
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || opportunity.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All' || opportunity.location === selectedLocation;
    
    let matchesAmount = true;
    if (amountRange.min || amountRange.max) {
      const amount = parseInt(opportunity.amount.replace(/[^0-9]/g, ''));
      if (amountRange.min && parseInt(amountRange.min) > amount) matchesAmount = false;
      if (amountRange.max && parseInt(amountRange.max) < amount) matchesAmount = false;
    }
    
    return matchesSearch && matchesCategory && matchesLocation && matchesAmount;
  });

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
                <DollarSign className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-2xl font-bold">Funding Finder</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search funding opportunities..."
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
              <div className="relative">
                <Globe className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none bg-white"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Minimum Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={amountRange.min}
                    onChange={(e) => setAmountRange({ ...amountRange, min: e.target.value })}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Min amount"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={amountRange.max}
                    onChange={(e) => setAmountRange({ ...amountRange, max: e.target.value })}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Max amount"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {filteredOpportunities.length > 0 ? (
              filteredOpportunities.map((opportunity) => (
                <motion.div 
                  key={opportunity.id}
                  className="bg-gray-50 rounded-lg p-6"
                  whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                      <p className="text-gray-600">{opportunity.organization}</p>
                    </div>
                    <div className="flex space-x-2">
                      <motion.button
                        className="p-2 text-gray-500 hover:text-purple-700 rounded-full hover:bg-purple-50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <BookmarkPlus className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        className="p-2 text-gray-500 hover:text-purple-700 rounded-full hover:bg-purple-50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share2 className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Amount:</p>
                      <p className="font-semibold text-purple-700">{opportunity.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Deadline:</p>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                        <p className="font-semibold">{opportunity.deadline}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Category:</p>
                      <p className="font-semibold">{opportunity.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location:</p>
                      <p className="font-semibold">{opportunity.location}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Eligibility:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {opportunity.eligibility.map((item, index) => (
                        <li key={index} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <motion.a
                      href={opportunity.url}
                      className="text-purple-700 font-semibold flex items-center hover:text-purple-900"
                      whileHover={{ x: 5 }}
                    >
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </motion.a>
                    <motion.a
                      href={opportunity.url}
                      className="bg-purple-700 text-white px-4 py-2 rounded-md font-semibold flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                    </motion.a>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No funding opportunities found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedLocation('All');
                    setAmountRange({ min: '', max: '' });
                  }}
                  className="mt-4 text-purple-700 font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FundingFinder;