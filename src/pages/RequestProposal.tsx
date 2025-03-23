import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, ChevronRight, Check, ArrowRight, Calendar, Clock, Users, Clipboard, FileCheck, Send 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const RequestProposal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, handleFormspreeSubmit] = useForm("mzzervkg");
  const [formData, setFormData] = useState({
    // Step 1: Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    
    // Step 2: Project Details
    projectTitle: '',
    therapeuticArea: '',
    phase: '',
    studyType: '',
    timeline: '',
    budget: '',
    
    // Step 3: Services Needed
    services: [] as string[],
    patientPopulation: '',
    patientCount: '',
    locations: [] as string[],
    
    // Step 4: Additional Information
    additionalInfo: '',
    howHeard: '',
    contactPreference: 'email'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    
    if (checked) {
      setFormData(prevState => ({
        ...prevState,
        [name]: [...(prevState[name as keyof typeof prevState] as string[]), value]
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: (prevState[name as keyof typeof prevState] as string[]).filter(item => item !== value)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleFormspreeSubmit(formData);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  // Animation variants
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

  // Therapeutic areas
  const therapeuticAreas = [
    'Oncology',
    'Cardiology',
    'Neurology',
    'Immunology',
    'Infectious Disease',
    'Endocrinology',
    'Gastroenterology',
    'Respiratory',
    'Dermatology',
    'Rare Disease',
    'Other'
  ];

  // Study phases
  const phases = [
    'Phase I',
    'Phase II',
    'Phase III',
    'Phase IV',
    'Observational',
    'Registry',
    'Other'
  ];

  // Study types
  const studyTypes = [
    'Interventional',
    'Observational',
    'Expanded Access',
    'Registry',
    'Other'
  ];

  // Services
  const services = [
    'Patient Recruitment',
    'Site Selection',
    'Protocol Development',
    'Regulatory Submission',
    'Clinical Monitoring',
    'Data Management',
    'Biostatistics',
    'Medical Writing',
    'Project Management',
    'Full Service CRO',
    'Other'
  ];

  // Locations
  const locationOptions = [
    'United States',
    'Canada',
    'Europe',
    'Asia-Pacific',
    'Latin America',
    'Middle East',
    'Africa',
    'Global'
  ];

  if (formState.succeeded) {
    return (
      <div className="min-h-screen bg-white">
        <AccessibilityMenu />
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 md:px-8 py-16">
            <motion.div 
              className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-8 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center justify-center bg-green-100 p-3 rounded-full mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Thank You for Your Request!</h3>
              <p className="text-lg mb-6">
                We've received your proposal request and will review it promptly. One of our team members will contact you within 1-2 business days to discuss your needs in more detail.
              </p>
              <div className="flex justify-center">
                <Link to="/">
                  <motion.button 
                    className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold inline-flex items-center hover:bg-green-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Return to Home
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
                <FileText className="h-5 w-5 mr-2" />
                <span className="font-semibold">PROPOSAL REQUEST</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Proposal</h1>
              <p className="text-xl mb-8">
                Tell us about your clinical trial needs, and we'll create a customized proposal to help you achieve your research goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="#proposal-form" 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Request <ChevronRight className="ml-2 h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="#how-it-works" 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  How It Works
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-white">
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
                Our streamlined proposal process is designed to get you the information you need quickly
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div 
                className="bg-purple-50 p-6 rounded-lg relative"
                variants={itemFadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="absolute -top-4 -left-4 bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                  <FileText className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Submit Request</h3>
                <p className="text-gray-600">
                  Complete our proposal request form with details about your clinical trial needs and requirements.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-purple-50 p-6 rounded-lg relative"
                variants={itemFadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="absolute -top-4 -left-4 bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                  <Users className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Initial Consultation</h3>
                <p className="text-gray-600">
                  Our team will review your request and schedule a consultation to discuss your needs in detail.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-purple-50 p-6 rounded-lg relative"
                variants={itemFadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="absolute -top-4 -left-4 bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                  <Clipboard className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Proposal Development</h3>
                <p className="text-gray-600">
                  We'll create a customized proposal tailored to your specific clinical trial requirements and objectives.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-purple-50 p-6 rounded-lg relative"
                variants={itemFadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="absolute -top-4 -left-4 bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                  <FileCheck className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Proposal Delivery</h3>
                <p className="text-gray-600">
                  Receive your comprehensive proposal and schedule a follow-up discussion to review and refine as needed.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Proposal Request Form Section */}
        <section id="proposal-form" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Your Proposal</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Please provide the details below to help us create a customized proposal for your clinical trial needs
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          currentStep === step 
                            ? 'bg-purple-700 text-white' 
                            : currentStep > step 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {currentStep > step ? <Check className="h-5 w-5" /> : step}
                      </div>
                      <span className={`text-sm mt-2 ${currentStep >= step ? 'text-purple-700 font-medium' : 'text-gray-500'}`}>
                        {step === 1 ? 'Contact Info' : 
                         step === 2 ? 'Project Details' : 
                         step === 3 ? 'Services' : 'Additional Info'}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative mt-2">
                  <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full"></div>
                  <div 
                    className="absolute top-0 left-0 h-1 bg-purple-700 transition-all duration-300"
                    style={{ width: `${(currentStep - 1) * 33.33}%` }}
                  ></div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <ValidationError 
                          prefix="First Name" 
                          field="firstName"
                          errors={formState.errors}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <ValidationError 
                          prefix="Last Name" 
                          field="lastName"
                          errors={formState.errors}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <ValidationError 
                          prefix="Email" 
                          field="email"
                          errors={formState.errors}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <ValidationError 
                          prefix="Phone" 
                          field="phone"
                          errors={formState.errors}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company/Organization *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <ValidationError 
                          prefix="Company" 
                          field="company"
                          errors={formState.errors}
                        />
                      </div>
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <ValidationError 
                          prefix="Job Title" 
                          field="jobTitle"
                          errors={formState.errors}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-8">
                      <motion.button 
                        type="button"
                        onClick={nextStep}
                        className="bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center hover:bg-purple-800 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Next Step <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 2: Project Details */}
                {currentStep === 2 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold mb-6">Project Details</h3>
                    
                    <div className="mb-6">
                      <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Title/Name *
                      </label>
                      <input
                        type="text"
                        id="projectTitle"
                        name="projectTitle"
                        value={formData.projectTitle}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <ValidationError 
                        prefix="Project Title" 
                        field="projectTitle"
                        errors={formState.errors}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="therapeuticArea" className="block text-sm font-medium text-gray-700 mb-1">
                          Therapeutic Area *
                        </label>
                        <select
                          id="therapeuticArea"
                          name="therapeuticArea"
                          value={formData.therapeuticArea}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">Select Therapeutic Area</option>
                          {therapeuticAreas.map((area) => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                        </select>
                        <ValidationError 
                          prefix="Therapeutic Area" 
                          field="therapeuticArea"
                          errors={formState.errors}
                        />
                      </div>
                      <div>
                        <label htmlFor="phase" className="block text-sm font-medium text-gray-700 mb-1">
                          Study Phase *
                        </label>
                        <select
                          id="phase"
                          name="phase"
                          value={formData.phase}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">Select Study Phase</option>
                          {phases.map((phase) => (
                            <option key={phase} value={phase}>{phase}</option>
                          ))}
                        </select>
                        <ValidationError 
                          prefix="Phase" 
                          field="phase"
                          errors={formState.errors}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="studyType" className="block text-sm font-medium text-gray-700 mb-1">
                          Study Type *
                        </label>
                        <select
                          id="studyType"
                          name="studyType"
                          value={formData.studyType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">Select Study Type</option>
                          {studyTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        <ValidationError 
                          prefix="Study Type" 
                          field="studyType"
                          errors={formState.errors}
                        />
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                          Anticipated Timeline *
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">Select Timeline</option>
                          <option value="Less than 6 months">Less than 6 months</option>
                          <option value="6-12 months">6-12 months</option>
                          <option value="12-18 months">12-18 months</option>
                          <option value="18-24 months">18-24 months</option>
                          <option value="More than 24 months">More than 24 months</option>
                        </select>
                        <ValidationError 
                          prefix="Timeline" 
                          field="timeline"
                          errors={formState.errors}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Estimated Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="Less than $100,000">Less than $100,000</option>
                        <option value="$100,000 - $500,000">$100,000 - $500,000</option>
                        <option value="$500,000 - $1 million">$500,000 - $1 million</option>
                        <option value="$1 million - $5 million">$1 million - $5 million</option>
                        <option value="More than $5 million">More than $5 million</option>
                      </select>
                      <ValidationError 
                        prefix="Budget" 
                        field="budget"
                        errors={formState.errors}
                      />
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <motion.button 
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-300 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Previous
                      </motion.button>
                      <motion.button 
                        type="button"
                        onClick={nextStep}
                        className="bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center hover:bg-purple-800 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Next Step <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 3: Services Needed */}
                {currentStep === 3 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold mb-6">Services Needed</h3>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Services Required (Select all that apply) *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <div key={service} className="flex items-start">
                            <input
                              type="checkbox"
                              id={`service-${service}`}
                              name="services"
                              value={service}
                              checked={formData.services.includes(service)}
                              onChange={handleCheckboxChange}
                              className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`service-${service}`} className="ml-2 block text-sm text-gray-700">
                              {service}
                            </label>
                          </div>
                        ))}
                      </div>
                      <ValidationError 
                        prefix="Services" 
                        field="services"
                        errors={formState.errors}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="patientPopulation" className="block text-sm font-medium text-gray-700 mb-1">
                        Target Patient Population *
                      </label>
                      <textarea
                        id="patientPopulation"
                        name="patientPopulation"
                        value={formData.patientPopulation}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder="Please describe your target patient population, including key inclusion/exclusion criteria."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      ></textarea>
                      <ValidationError 
                        prefix="Patient Population" 
                        field="patientPopulation"
                        errors={formState.errors}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="patientCount" className="block text-sm font-medium text-gray-700 mb-1">
                          Estimated Patient Count *
                        </label>
                        <input
                          type="text"
                          id="patientCount"
                          name="patientCount"
                          value={formData.patientCount}
                          onChange={handleChange}
                          required
                          placeholder="e.g., 100, 250, 500"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <ValidationError 
                          prefix="Patient Count" 
                          field="patientCount"
                          errors={formState.errors}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Geographic Locations *
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {locationOptions.map((location) => (
                            <div key={location} className="flex items-start">
                              <input
                                type="checkbox"
                                id={`location-${location}`}
                                name="locations"
                                value={location}
                                checked={formData.locations.includes(location)}
                                onChange={handleCheckboxChange}
                                className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                              />
                              <label htmlFor={`location-${location}`} className="ml-2 block text-sm text-gray-700">
                                {location}
                              </label>
                            </div>
                          ))}
                        </div>
                        <ValidationError 
                          prefix="Locations" 
                          field="locations"
                          errors={formState.errors}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <motion.button 
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-300 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Previous
                      </motion.button>
                      <motion.button 
                        type="button"
                        onClick={nextStep}
                        className="bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center hover:bg-purple-800 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Next Step <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 4: Additional Information */}
                {currentStep === 4 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold mb-6">Additional Information</h3>
                    
                    <div className="mb-6">
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Please provide any additional information that would help us understand your project needs better."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      ></textarea>
                      <ValidationError 
                        prefix="Additional Info" 
                        field="additionalInfo"
                        errors={formState.errors}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="howHeard" className="block text-sm font-medium text-gray-700 mb-1">
                        How did you hear about us?
                      </label>
                      <select
                        id="howHeard"
                        name="howHeard"
                        value={formData.howHeard}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Please select</option>
                        <option value="Search Engine">Search Engine</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Industry Event">Industry Event</option>
                        <option value="Referral">Referral</option>
                        <option value="Publication">Publication</option>
                        <option value="Other">Other</option>
                      </select>
                      <ValidationError 
                        prefix="How Heard" 
                        field="howHeard"
                        errors={formState.errors}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Preferred Contact Method
                      </label>
                      <div className="flex space-x-6">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="contact-email"
                            name="contactPreference"
                            value="email"
                            checked={formData.contactPreference === 'email'}
                            onChange={handleChange}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                          />
                          <label htmlFor="contact-email" className="ml-2 block text-sm text-gray-700">
                            Email
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="contact-phone"
                            name="contactPreference"
                            value="phone"
                            checked={formData.contactPreference === 'phone'}
                            onChange={handleChange}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                          />
                          <label htmlFor="contact-phone" className="ml-2 block text-sm text-gray-700">
                            Phone
                          </label>
                        </div>
                      </div>
                      <ValidationError 
                        prefix="Contact Preference" 
                        field="contactPreference"
                        errors={formState.errors}
                      />
                    </div>
                    
                    <div className="flex items-start mb-8">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                        I agree to the <Link to="/privacy" className="text-purple-700 hover:underline">Privacy Policy</Link> and consent to the processing of my personal data for the purpose of receiving a proposal.
                      </label>
                    </div>
                    
                    <div className="flex justify-between mt-8">
                      <motion.button 
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-300 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Previous
                      </motion.button>
                      <motion.button 
                        type="submit"
                        disabled={formState.submitting}
                        className="bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center hover:bg-purple-800 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Submit Request <Send className="ml-2 h-4 w-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Opulent Trials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional clinical trial services that accelerate your research and enhance patient experiences
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div 
                className="bg-purple-50 p-8 rounded-lg"
                variants={itemFadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                  <Clock className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Accelerated Timelines</h3>
                <p className="text-gray-600">
                  Our innovative Metasite™ model and patient-centric approach enable faster recruitment and enrollment, reducing study timelines by up to 30%.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-purple-50 p-8 rounded-lg"
                variants={itemFadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                  <Users className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enhanced Diversity</h3>
                <p className="text-gray-600">
                  We reach patient populations beyond traditional site catchment areas, ensuring greater diversity and representation in your clinical trials.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-purple-50 p-8 rounded-lg"
                variants={itemFadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                  <Calendar className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Flexible Solutions</h3>
                <p className="text-gray-600">
                  Our customizable services adapt to your specific needs, whether you require full-service support or targeted solutions for specific challenges.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from sponsors who have experienced the Opulent Trials difference
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  quote: "Opulent Trials delivered exceptional results for our Phase III oncology trial. Their patient recruitment strategies helped us exceed our enrollment targets two months ahead of schedule.",
                  name: "Dr. Sarah Johnson",
                  title: "Clinical Research Director, Leading Pharmaceutical Company"
                },
                {
                  quote: "The Metasite™ model transformed our approach to clinical trials. We were able to reach diverse patient populations that would have been impossible with traditional site-based methods.",
                  name: "Michael Chen",
                  title: "VP of Clinical Operations, Biotech Innovator"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Clinical Research?</h2>
              <p className="text-xl mb-8">
                Submit your proposal request today and discover how Opulent Trials can transform your clinical trial experience.
              </p>
              <motion.a 
                href="#proposal-form" 
                className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Your Proposal Now
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RequestProposal;