import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, ChevronRight, Search, Filter, Calendar, Clock, 
  MapPin, ArrowRight, MessageSquare, CheckCircle, XCircle,
  Heart, Shield, Star, FileText, Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const ParticipateStudy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Medical conditions
  const conditions = [
    'All',
    'Diabetes',
    'Cancer',
    'Heart Disease',
    'Alzheimer\'s',
    'Arthritis',
    'Depression',
    'Multiple Sclerosis'
  ];

  // Locations
  const locations = [
    'All',
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Houston, TX',
    'Remote/Virtual'
  ];

  // Available studies
  const studies = [
    {
      id: 1,
      title: "Type 2 Diabetes Management Study",
      condition: "Diabetes",
      location: "Multiple Locations",
      compensation: "$750",
      duration: "12 weeks",
      status: "Recruiting",
      description: "Evaluating a new treatment approach for better blood sugar control in Type 2 Diabetes patients.",
      requirements: [
        "Age 18-65",
        "Diagnosed with Type 2 Diabetes",
        "Not currently on insulin"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Early Alzheimer's Detection Trial",
      condition: "Alzheimer's",
      location: "Boston, MA",
      compensation: "$1,000",
      duration: "6 months",
      status: "Recruiting",
      description: "Testing innovative approaches for early detection of Alzheimer's disease using advanced imaging techniques.",
      requirements: [
        "Age 55+",
        "Family history of Alzheimer's",
        "No current diagnosis"
      ]
    },
    {
      id: 3,
      title: "Rheumatoid Arthritis Treatment Study",
      condition: "Arthritis",
      location: "Multiple Locations",
      compensation: "$500",
      duration: "16 weeks",
      status: "Recruiting",
      description: "Investigating a novel treatment for reducing inflammation in Rheumatoid Arthritis patients.",
      requirements: [
        "Age 30-70",
        "Diagnosed RA",
        "Current treatment not adequate"
      ]
    }
  ];

  // Benefits of participation
  const benefits = [
    {
      title: "Access to New Treatments",
      description: "Get early access to innovative therapies before they become widely available.",
      icon: Star
    },
    {
      title: "Expert Medical Care",
      description: "Receive care from leading healthcare professionals and specialists.",
      icon: Heart
    },
    {
      title: "Contribute to Science",
      description: "Help advance medical research and improve future treatments.",
      icon: FileText
    },
    {
      title: "Financial Compensation",
      description: "Receive compensation for your time and participation.",
      icon: Shield
    }
  ];

  // Filter studies based on search and filters
  const filteredStudies = studies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCondition = selectedCondition === 'All' || study.condition === selectedCondition;
    const matchesLocation = selectedLocation === 'All' || study.location === selectedLocation;
    return matchesSearch && matchesCondition && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-white">
      <AccessibilityMenu />
      <Header />
      
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full mb-6">
                <Users className="h-5 w-5 mr-2" />
                <span className="font-semibold">PARTICIPATE IN RESEARCH</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join a Clinical Trial</h1>
              <p className="text-xl mb-8">
                Help advance medical science while gaining access to innovative treatments
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="#available-studies" 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Find a Study <ChevronRight className="ml-2 h-4 w-4" />
                </motion.a>
                <Link to="/contact-us">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Participate?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of participants who are helping to shape the future of medicine
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                    <benefit.icon className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Available Studies Section */}
        <section id="available-studies" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Studies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find clinical trials that match your interests and conditions
              </p>
            </motion.div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by condition or keyword..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={selectedCondition}
                    onChange={(e) => setSelectedCondition(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-md appearance-none bg-white"
                  >
                    {conditions.map((condition) => (
                      <option key={condition} value={condition}>
                        {condition}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-md appearance-none bg-white"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Studies Grid */}
            {filteredStudies.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {filteredStudies.map((study) => (
                  <motion.div 
                    key={study.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm"
                    variants={itemFadeIn}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          {study.status}
                        </span>
                        <span className="text-purple-700 font-semibold">{study.compensation}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                      <p className="text-gray-600 mb-4">{study.description}</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {study.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          Duration: {study.duration}
                        </div>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {study.requirements.map((req, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <motion.button 
                        className="w-full bg-purple-700 text-white px-4 py-2 rounded-md font-semibold flex items-center justify-center hover:bg-purple-800"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Learn More & Apply <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No studies found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCondition('All');
                    setSelectedLocation('All');
                  }}
                  className="mt-4 text-purple-700 font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your journey to participating in a clinical trial
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Search & Apply",
                  description: "Browse available studies and apply for those that match your interests and conditions."
                },
                {
                  step: 2,
                  title: "Initial Screening",
                  description: "Complete a brief questionnaire to determine your eligibility for the study."
                },
                {
                  step: 3,
                  title: "Medical Evaluation",
                  description: "Meet with the study team for a thorough medical evaluation and detailed discussion."
                },
                {
                  step: 4,
                  title: "Begin Participation",
                  description: "If eligible, begin your participation in the study with full support from our team."
                }
              ].map((phase, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start mb-8 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-6">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to frequently asked questions about participating in clinical trials
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {[
                  {
                    question: "What are clinical trials?",
                    answer: "Clinical trials are research studies that test new treatments, interventions, or devices to determine if they are safe and effective for humans."
                  },
                  {
                    question: "Is participation free?",
                    answer: "Yes, participation is free. All study-related care is provided at no cost, and you may receive compensation for your time and travel."
                  },
                  {
                    question: "Can I leave a study after it starts?",
                    answer: "Yes, you can withdraw from a study at any time for any reason. Your participation is completely voluntary."
                  },
                  {
                    question: "How is my safety ensured?",
                    answer: "All trials follow strict protocols approved by ethics committees. Your safety is monitored throughout the study by experienced healthcare professionals."
                  }
                ].map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm"
                    variants={itemFadeIn}
                  >
                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.div 
              className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white rounded-xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
              <p className="text-xl mb-8">
                Join thousands of participants who are helping advance medical research
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="#available-studies" 
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Find a Study <ChevronRight className="ml-2 h-4 w-4" />
                </motion.a>
                <Link to="/contact-us">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us <MessageSquare className="ml-2 h-4 w-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ParticipateStudy;