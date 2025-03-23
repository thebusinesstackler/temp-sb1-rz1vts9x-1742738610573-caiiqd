import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, ChevronRight, Search, Filter, 
  MapPin, Calendar, Users, ArrowRight, Star,
  CheckCircle, Globe, Target, Brain
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

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
    'All',
    'Oncology',
    'Neurology',
    'Cardiovascular',
    'Rare Disease',
    'Immunology',
    'Metabolic'
  ];

  // Regions
  const regions = [
    'All',
    'North America',
    'Europe',
    'Asia Pacific',
    'Global'
  ];

  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: "Multi-Channel Recruitment Success in Alzheimer's Research",
      area: "Neurology",
      region: "Global",
      impact: {
        enrollment: "40% faster enrollment",
        retention: "92% retention rate",
        sites: "35 sites"
      },
      description: "Innovative patient recruitment strategies transformed enrollment and retention process for a Phase III Alzheimer's trial.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 2025",
      featured: true,
      highlights: [
        "AI-powered patient matching technology",
        "Integrated caregiver support program",
        "Multi-channel recruitment strategy"
      ]
    },
    {
      id: 2,
      title: "Accelerating Rare Disease Trial Recruitment",
      area: "Rare Disease",
      region: "Global",
      impact: {
        enrollment: "60% faster enrollment",
        retention: "95% retention rate",
        sites: "50+ global sites"
      },
      description: "Successfully recruited over 500 patients for an ultra-rare disease study across 15 countries.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "February 2025",
      highlights: [
        "Global patient identification network",
        "Innovative genetic screening approach",
        "Patient advocacy partnerships"
      ]
    },
    {
      id: 3,
      title: "Global Oncology Study Success",
      area: "Oncology",
      region: "Global",
      impact: {
        enrollment: "50% faster enrollment",
        retention: "90% retention rate",
        sites: "75 global sites"
      },
      description: "Managed a complex immuno-oncology trial across multiple regions while maintaining high data quality.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "January 2025",
      highlights: [
        "Precision medicine approach",
        "Real-time data monitoring",
        "Cross-border collaboration"
      ]
    }
  ];

  // Filter case studies based on search and filters
  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === 'All' || study.area === selectedArea;
    const matchesRegion = selectedRegion === 'All' || study.region === selectedRegion;
    return matchesSearch && matchesArea && matchesRegion;
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
                <FileText className="h-5 w-5 mr-2" />
                <span className="font-semibold">CASE STUDIES</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Clinical Trial Success Stories</h1>
              <p className="text-xl mb-8">
                Explore how our innovative approaches have accelerated clinical research and improved outcomes
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Studies <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Study */}
        {caseStudies.find(study => study.featured) && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div 
                className="bg-gray-50 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <img 
                      src={caseStudies.find(study => study.featured)?.image}
                      alt="Featured case study"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="text-sm text-purple-700 font-semibold mb-4">FEATURED CASE STUDY</div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      {caseStudies.find(study => study.featured)?.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {caseStudies.find(study => study.featured)?.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-purple-700 font-bold">
                          {caseStudies.find(study => study.featured)?.impact.enrollment}
                        </div>
                        <div className="text-sm text-gray-500">Enrollment</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-purple-700 font-bold">
                          {caseStudies.find(study => study.featured)?.impact.retention}
                        </div>
                        <div className="text-sm text-gray-500">Retention</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-purple-700 font-bold">
                          {caseStudies.find(study => study.featured)?.impact.sites}
                        </div>
                        <div className="text-sm text-gray-500">Sites</div>
                      </div>
                    </div>
                    <Link 
                      to={`/case-studies/${caseStudies.find(study => study.featured)?.id}`}
                      className="text-purple-700 font-semibold flex items-center hover:text-purple-900"
                    >
                      Read Case Study <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Search and Filters */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none bg-white"
                >
                  {therapeuticAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Globe className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none bg-white"
                >
                  {regions.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {filteredStudies.filter(study => !study.featured).map((study) => (
                <motion.div 
                  key={study.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-purple-700 font-semibold">{study.area}</span>
                      <span className="text-sm text-gray-500">{study.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-purple-700 font-bold text-sm">
                          {study.impact.enrollment}
                        </div>
                        <div className="text-xs text-gray-500">Enrollment</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-purple-700 font-bold text-sm">
                          {study.impact.retention}
                        </div>
                        <div className="text-xs text-gray-500">Retention</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-purple-700 font-bold text-sm">
                          {study.impact.sites}
                        </div>
                        <div className="text-xs text-gray-500">Sites</div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {study.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <Star className="h-4 w-4 text-purple-700 mr-2" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to={`/case-studies/${study.id}`}
                      className="text-purple-700 font-semibold flex items-center hover:text-purple-900"
                    >
                      Read Case Study <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
              <p className="text-xl mb-8">
                Let us help you accelerate your clinical trials and improve outcomes
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Proposal <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <Link to="/contact-us">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition"
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
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;