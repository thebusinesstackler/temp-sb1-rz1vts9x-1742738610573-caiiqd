import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, Clock, ChevronRight, Filter, ArrowRight, Building, Users, Heart, Star, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';
import JobDetailsModal from '../components/JobDetailsModal';

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

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

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

  // Departments
  const departments = [
    'All',
    'Clinical Operations',
    'Research & Development',
    'Marketing',
    'Technology',
    'Human Resources',
    'Finance',
    'Administration'
  ];

  // Locations
  const locations = [
    'All',
    'Remote',
    'New York, NY',
    'San Francisco, CA',
    'Boston, MA',
    'London, UK',
    'Toronto, Canada',
    'Sydney, Australia'
  ];

  // Job listings data
  const jobListings: JobListing[] = [
    {
      id: 1,
      title: "Senior Clinical Trial Manager",
      department: "Clinical Operations",
      location: "Boston, MA",
      type: "Full-time",
      description: "Lead and oversee clinical trials from protocol development through study close-out, ensuring compliance with regulatory requirements and timelines.",
      requirements: [
        "Bachelor's degree in life sciences or related field",
        "5+ years of experience in clinical trial management",
        "Knowledge of GCP and ICH guidelines",
        "Strong project management skills"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Patient Recruitment Specialist",
      department: "Clinical Operations",
      location: "Remote",
      type: "Full-time",
      description: "Develop and implement patient recruitment and retention strategies for clinical trials across multiple therapeutic areas.",
      requirements: [
        "Bachelor's degree in healthcare, marketing, or related field",
        "3+ years of experience in patient recruitment",
        "Strong understanding of clinical trial processes",
        "Excellent communication and interpersonal skills"
      ]
    },
    {
      id: 3,
      title: "Clinical Research Associate",
      department: "Clinical Operations",
      location: "New York, NY",
      type: "Full-time",
      description: "Monitor clinical trial sites to ensure protocol compliance, data quality, and patient safety in accordance with GCP guidelines.",
      requirements: [
        "Bachelor's degree in life sciences or related field",
        "2+ years of experience as a CRA",
        "Knowledge of regulatory requirements",
        "Willingness to travel up to 60%"
      ]
    },
    {
      id: 4,
      title: "Senior Software Engineer",
      department: "Technology",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Design and develop innovative software solutions for our clinical trial management platform, focusing on user experience and system performance.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "5+ years of experience in software development",
        "Proficiency in React, Node.js, and cloud technologies",
        "Experience with healthcare or clinical trial software preferred"
      ],
      featured: true
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Research & Development",
      location: "Remote",
      type: "Full-time",
      description: "Analyze clinical trial data to identify patterns, trends, and insights that can improve trial design, patient recruitment, and outcomes.",
      requirements: [
        "Master's or PhD in Statistics, Data Science, or related field",
        "3+ years of experience in data analysis",
        "Proficiency in Python, R, and SQL",
        "Experience with healthcare data preferred"
      ]
    },
    {
      id: 6,
      title: "Marketing Manager",
      department: "Marketing",
      location: "London, UK",
      type: "Full-time",
      description: "Develop and execute marketing strategies to promote our clinical trial services to pharmaceutical companies, biotechs, and research institutions.",
      requirements: [
        "Bachelor's degree in Marketing or related field",
        "5+ years of experience in B2B marketing",
        "Experience in healthcare or life sciences industry",
        "Strong digital marketing skills"
      ]
    },
    {
      id: 7,
      title: "Clinical Project Coordinator",
      department: "Clinical Operations",
      location: "Toronto, Canada",
      type: "Full-time",
      description: "Support clinical trial managers in the planning, execution, and monitoring of clinical trials, ensuring efficient operations and compliance.",
      requirements: [
        "Bachelor's degree in life sciences or related field",
        "1-3 years of experience in clinical research",
        "Strong organizational and communication skills",
        "Knowledge of clinical trial processes"
      ]
    },
    {
      id: 8,
      title: "Regulatory Affairs Specialist",
      department: "Clinical Operations",
      location: "Boston, MA",
      type: "Full-time",
      description: "Prepare and submit regulatory documents to health authorities, ensuring compliance with global regulatory requirements for clinical trials.",
      requirements: [
        "Bachelor's degree in life sciences or related field",
        "3+ years of experience in regulatory affairs",
        "Knowledge of FDA, EMA, and other regulatory guidelines",
        "Attention to detail and strong writing skills"
      ]
    },
    {
      id: 9,
      title: "Human Resources Manager",
      department: "Human Resources",
      location: "New York, NY",
      type: "Full-time",
      description: "Oversee HR functions including recruitment, employee relations, performance management, and professional development programs.",
      requirements: [
        "Bachelor's degree in Human Resources or related field",
        "5+ years of experience in HR management",
        "Knowledge of employment laws and regulations",
        "Strong interpersonal and conflict resolution skills"
      ]
    },
    {
      id: 10,
      title: "Finance Analyst",
      department: "Finance",
      location: "Sydney, Australia",
      type: "Full-time",
      description: "Analyze financial data, prepare reports, and provide insights to support business decisions and financial planning for clinical trial operations.",
      requirements: [
        "Bachelor's degree in Finance, Accounting, or related field",
        "3+ years of experience in financial analysis",
        "Proficiency in Excel and financial software",
        "Strong analytical and problem-solving skills"
      ]
    }
  ];

  // Filter job listings based on search term, department, and location
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  // Get featured jobs
  const featuredJobs = jobListings.filter(job => job.featured);

  const handleViewDetails = (job: JobListing) => {
    setSelectedJob(job);
  };

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
                <Briefcase className="h-5 w-5 mr-2" />
                <span className="font-semibold">JOIN OUR TEAM</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at TheraNovex</h1>
              <p className="text-xl mb-8">
                Join our team of passionate professionals dedicated to transforming clinical research and improving patient lives
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="#open-positions" 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Open Positions <ChevronRight className="ml-2 h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="#why-join" 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Why Join Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section id="why-join" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join TheraNovex</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Be part of a team that's revolutionizing clinical research and making a meaningful impact on healthcare
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
                  <Heart className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Meaningful Impact</h3>
                <p className="text-gray-600">
                  Our work directly improves patient access to clinical trials and accelerates the development of life-changing treatments.
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
                <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
                <p className="text-gray-600">
                  Join a diverse team of experts who work together to solve complex challenges in clinical research.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-purple-50 p-8 rounded-lg"
                variants={itemFadeIn}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                  <Award className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation Leader</h3>
                <p className="text-gray-600">
                  Be at the forefront of clinical research innovation, working with cutting-edge technologies and methodologies.
                </p>
              </motion.div>
            </motion.div>

            <div className="mt-16">
              <div className="flex flex-col md:flex-row items-center">
                <motion.div 
                  className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Comprehensive Benefits</h3>
                  <p className="text-lg mb-6">
                    We offer a competitive benefits package designed to support your health, wealth, and work-life balance.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <ChevronRight className="h-4 w-4 text-purple-700" />
                      </div>
                      <span>Comprehensive health, dental, and vision insurance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <ChevronRight className="h-4 w-4 text-purple-700" />
                      </div>
                      <span>Generous paid time off and flexible work arrangements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <ChevronRight className="h-4 w-4 text-purple-700" />
                      </div>
                      <span>401(k) retirement plan with company match</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <ChevronRight className="h-4 w-4 text-purple-700" />
                      </div>
                      <span>Professional development and continuing education support</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <ChevronRight className="h-4 w-4 text-purple-700" />
                      </div>
                      <span>Employee wellness programs and mental health resources</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div 
                  className="md:w-1/2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Team collaboration" 
                    className="rounded-lg shadow-lg w-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        {featuredJobs.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div 
                className="text-center mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Opportunities</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our highlighted positions that are currently in high demand
                </p>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {featuredJobs.map((job) => (
                  <motion.div 
                    key={job.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
                    variants={itemFadeIn}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full mb-2">
                            Featured
                          </div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-full">
                          <Star className="h-6 w-6 text-yellow-500 fill-current" />
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-500">
                          <Building className="h-4 w-4 mr-1" /> {job.department}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" /> {job.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" /> {job.type}
                        </div>
                      </div>
                      <motion.button 
                        onClick={() => handleViewDetails(job)}
                        className="text-purple-700 font-semibold flex items-center hover:text-purple-900"
                        whileHover={{ x: 5 }}
                      >
                        View Details <ChevronRight className="ml-1 h-4 w-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find your perfect role and join our mission to transform clinical research
              </p>
            </motion.div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search positions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white"
                  >
                    {departments.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-3 top-3 h-5 w-5 text-gray-400 transform rotate-90" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-3 top-3 h-5 w-5 text-gray-400 transform rotate-90" />
                </div>
              </div>
            </div>

            {/* Job Listings */}
            {filteredJobs.length > 0 ? (
              <motion.div 
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {filteredJobs.map((job) => (
                  <motion.div 
                    key={job.id}
                    id={`job-${job.id}`}
                    className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200"
                    variants={itemFadeIn}
                    whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 mt-2">
                            <div className="flex items-center text-sm text-gray-500">
                              <Building className="h-4 w-4 mr-1" /> {job.department}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="h-4 w-4 mr-1" /> {job.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" /> {job.type}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-4 md:mt-0">
                          <motion.button 
                            onClick={() => handleViewDetails(job)}
                            className="text-purple-700 font-semibold flex items-center hover:text-purple-900"
                            whileHover={{ x: 5 }}
                          >
                            View Details <ChevronRight className="ml-1 h-4 w-4" />
                          </motion.button>
                          <motion.button 
                            className="bg-purple-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-800 transition inline-flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                          </motion.button>
                        </div>
                      </div>
                      <p className="text-gray-600">{job.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No positions found matching your search criteria.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedDepartment('All'); setSelectedLocation('All');}}
                  className="mt-4 text-purple-700 font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Employee Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Life at TheraNovex</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our team members about their experiences working with us
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  name: "Sarah Johnson",
                  title: "Clinical Trial Manager",
                  quote: "Working at TheraNovex has been the most rewarding experience of my career. I'm able to make a real difference in patients' lives while working with cutting-edge technology and brilliant colleagues.",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Michael Chen",
                  title: "Software Engineer",
                  quote: "The culture here is unlike anywhere I've worked before. There's a perfect balance of innovation, collaboration, and work-life balance. I'm challenged every day to grow both professionally and personally.",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Emily Rodriguez",
                  title: "Patient Recruitment Specialist",
                  quote: "I love that TheraNovex values diversity and inclusion not just in clinical trials, but within our own team. My ideas are heard and respected, and I feel empowered to make an impact every day.",
                  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-purple-700">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Application Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A straightforward journey from application to onboarding
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  step: 1,
                  title: "Apply Online",
                  description: "Submit your application through our careers portal with your resume and cover letter."
                },
                {
                  step: 2,
                  title: "Initial Screening",
                  description: "Our recruitment team will review your application and reach out for an initial phone interview."
                },
                {
                  step: 3,
                  title: "Interview Process",
                  description: "Participate in interviews with the hiring manager and team members to assess fit and qualifications."
                },
                {
                  step: 4,
                  title: "Welcome Aboard",
                  description: "Receive your offer and join our comprehensive onboarding program to set you up for success."
                }
              ].map((process, index) => (
                <motion.div 
                  key={index}
                  className="bg-purple-50 p-6 rounded-lg relative"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="absolute -top-4 -left-4 bg-purple-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 mt-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.div 
              className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white rounded-xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
              <p className="text-xl mb-8">
                Explore our open positions and take the first step toward a rewarding career at TheraNovex.
              </p>
              <motion.a 
                href="#open-positions" 
                className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Open Positions <ChevronRight className="ml-2 h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about careers at TheraNovex
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
                    question: "What is the interview process like?",
                    answer: "Our interview process typically includes an initial phone screening, followed by 1-2 rounds of interviews with the hiring manager and team members. For technical roles, there may be a skills assessment or case study. The entire process usually takes 2-3 weeks."
                  },
                  {
                    question: "Do you offer remote work options?",
                    answer: "Yes, we offer flexible work arrangements including remote and hybrid options for many positions. Some roles may require on-site presence due to the nature of the work. Each job posting specifies the work arrangement."
                  },
                  {
                    question: "What is your company culture like?",
                    answer: "Our culture is built on collaboration, innovation, and a shared commitment to improving clinical research. We value diversity of thought, encourage open communication, and foster a supportive environment where everyone can thrive professionally and personally."
                  },
                  {
                    question: "Do you offer internships or entry-level positions?",
                    answer: "Yes, we offer internships and entry-level positions across various departments. We're committed to developing the next generation of clinical research professionals and provide mentorship and growth opportunities."
                  },
                  {
                    question: "What growth opportunities are available?",
                    answer: "We invest in our employees' professional development through continuing education support, internal training programs, mentorship opportunities, and clear career advancement paths. We prioritize internal promotions when possible."
                  }
                ].map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-50 rounded-lg p-6"
                    variants={itemFadeIn}
                  >
                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-gray-600">
                  Have more questions? <a href="#" className="text-purple-700 font-semibold hover:underline">Contact our recruitment team</a>
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Job Details Modal */}
      {selectedJob && (
        <JobDetailsModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      )}

      <Footer />
    </div>
  );
};

export default Careers;