import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, ChevronRight, ArrowRight, MessageSquare, CheckCircle, Globe, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const MetasiteRegistration = () => {
  const [formData, setFormData] = useState({
    // Organization Information
    organizationName: '',
    organizationType: '',
    website: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    
    // Primary Contact
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    
    // Site Experience
    yearsExperience: '',
    activeTrials: '',
    therapeuticAreas: [] as string[],
    patientDatabase: '',
    
    // Technical Capabilities
    hasEMR: false,
    hasEDC: false,
    hasVideoConferencing: false,
    hasRemoteMonitoring: false,
    
    // Additional Information
    additionalInfo: '',
    howHeard: '',
    newsletter: true
  });

  const [state, handleSubmit] = useForm("mqapqddo");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleTherapeuticAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      therapeuticAreas: checked 
        ? [...prev.therapeuticAreas, value]
        : prev.therapeuticAreas.filter(area => area !== value)
    }));
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Organization types
  const organizationTypes = [
    'Academic Medical Center',
    'Hospital',
    'Private Practice',
    'Dedicated Research Site',
    'Community Health Center',
    'Other'
  ];

  // Therapeutic areas
  const therapeuticAreas = [
    'Oncology',
    'Cardiology',
    'Neurology',
    'Immunology',
    'Endocrinology',
    'Psychiatry',
    'Dermatology',
    'Rare Diseases',
    'Other'
  ];

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-white">
        <AccessibilityMenu />
        <Header />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 md:px-8 py-16">
            <motion.div 
              className="bg-white rounded-lg p-8 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center justify-center bg-green-100 p-3 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Registration Submitted!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your interest in becoming a Metasite™. Our team will review your application and contact you within 2-3 business days to discuss the next steps.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/solutions/metasite">
                  <motion.button 
                    className="bg-purple-700 text-white px-6 py-3 rounded-md font-semibold inline-flex items-center hover:bg-purple-800"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Return to Metasite™
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

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
                <Building className="h-5 w-5 mr-2" />
                <span className="font-semibold">METASITE™ REGISTRATION</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Register Your Site</h1>
              <p className="text-xl mb-8">
                Join our global network of research sites and transform your clinical trial capabilities
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/solutions/metasite">
                  <motion.button 
                    className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </Link>
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

        {/* Benefits Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "Access patients beyond your local area through our decentralized platform"
                },
                {
                  icon: Users,
                  title: "Increased Capacity",
                  description: "Handle more trials without expanding physical infrastructure"
                },
                {
                  icon: Clock,
                  title: "Faster Enrollment",
                  description: "Accelerate recruitment with our AI-powered matching technology"
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-purple-100 rounded-full p-4 inline-flex mb-4">
                    <benefit.icon className="h-8 w-8 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Site Registration Form</h2>
                <p className="text-xl text-gray-600">
                  Complete the form below to begin your Metasite™ registration process
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-sm">
                {/* Organization Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-6">Organization Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Organization Name *
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Organization Type *
                      </label>
                      <select
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Select Organization Type</option>
                        {organizationTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State/Province *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Primary Contact */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-6">Primary Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Site Experience */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-6">Site Experience</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Years of Research Experience *
                      </label>
                      <select
                        name="yearsExperience"
                        value={formData.yearsExperience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Select Experience</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Active Trials *
                      </label>
                      <select
                        name="activeTrials"
                        value={formData.activeTrials}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Select Number of Trials</option>
                        <option value="0">0</option>
                        <option value="1-5">1-5</option>
                        <option value="6-10">6-10</option>
                        <option value="11-20">11-20</option>
                        <option value="20+">20+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Therapeutic Areas (Select all that apply) *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {therapeuticAreas.map(area => (
                        <div key={area} className="flex items-start">
                          <input
                            type="checkbox"
                            id={`area-${area}`}
                            name="therapeuticAreas"
                            value={area}
                            checked={formData.therapeuticAreas.includes(area)}
                            onChange={handleTherapeuticAreaChange}
                            className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`area-${area}`} className="ml-2 block text-sm text-gray-700">
                            {area}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Patient Database Size *
                    </label>
                    <select
                      name="patientDatabase"
                      value={formData.patientDatabase}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select Database Size</option>
                      <option value="<1000">Less than 1,000</option>
                      <option value="1000-5000">1,000 - 5,000</option>
                      <option value="5001-10000">5,001 - 10,000</option>
                      <option value="10001-50000">10,001 - 50,000</option>
                      <option value="50000+">More than 50,000</option>
                    </select>
                  </div>
                </div>

                {/* Technical Capabilities */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-6">Technical Capabilities</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="hasEMR"
                        name="hasEMR"
                        checked={formData.hasEMR}
                        onChange={handleCheckboxChange}
                        className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="hasEMR" className="ml-2 block text-sm text-gray-700">
                        Electronic Medical Record (EMR) System
                      </label>
                    </div>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="hasEDC"
                        name="hasEDC"
                        checked={formData.hasEDC}
                        onChange={handleCheckboxChange}
                        className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="hasEDC" className="ml-2 block text-sm text-gray-700">
                        Electronic Data Capture (EDC) Experience
                      </label>
                    </div>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="hasVideoConferencing"
                        name="hasVideoConferencing"
                        checked={formData.hasVideoConferencing}
                        onChange={handleCheckboxChange}
                        className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="hasVideoConferencing" className="ml-2 block text-sm text-gray-700">
                        Video Conferencing Capabilities
                      </label>
                    </div>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="hasRemoteMonitoring"
                        name="hasRemoteMonitoring"
                        checked={formData.hasRemoteMonitoring}
                        onChange={handleCheckboxChange}
                        className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="hasRemoteMonitoring" className="ml-2 block text-sm text-gray-700">
                        Remote Monitoring Experience
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-6">Additional Information</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Comments
                      </label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Please share any additional information about your site..."
                      />
                      <ValidationError 
                        prefix="Message" 
                        field="additionalInfo"
                        errors={state.errors}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        How did you hear about us?
                      </label>
                      <select
                        name="howHeard"
                        value={formData.howHeard}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Please select</option>
                        <option value="Search">Search Engine</option>
                        <option value="Social">Social Media</option>
                        <option value="Event">Industry Event</option>
                        <option value="Referral">Referral</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div>
                  <div className="flex items-start mb-6">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleCheckboxChange}
                      className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                      I would like to receive updates about Metasite™ platform and clinical trial opportunities
                    </label>
                  </div>

                  <div className="flex items-start mb-6">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the <Link to="/terms" className="text-purple-700 hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-purple-700 hover:underline">Privacy Policy</Link>
                    </label>
                  </div>

                  <motion.button 
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-purple-800 transition disabled:opacity-75 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Registration <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MetasiteRegistration;