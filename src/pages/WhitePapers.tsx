import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, ChevronRight, Download, Share2,
  Calendar, ArrowRight, Star, BookOpen,
  MessageSquare, PenTool
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';
import GuestPostForm from '../components/GuestPostForm';

const WhitePapers = () => {
  const [showGuestPostForm, setShowGuestPostForm] = useState(false);

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

  const handleGuestPostSubmit = (data: {
    title: string;
    author: string;
    authorTitle: string;
    content: string;
  }) => {
    // Here you would typically send the data to your backend
    console.log('Guest post submitted:', data);
    // Show success message or handle the submission
    setShowGuestPostForm(false);
  };

  // White papers data
  const whitePapers = [
    {
      id: 'enhancing-diversity',
      title: "Enhancing Patient Diversity in Clinical Trials",
      category: "Patient Recruitment",
      description: "A strategic guide to improving diversity and inclusion in clinical trials through innovative recruitment approaches.",
      image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "April 2025",
      featured: true,
      highlights: [
        "Evidence-based recruitment strategies",
        "Cultural competency guidelines",
        "Success metrics and benchmarks"
      ]
    },
    {
      id: 'ai-machine-learning',
      title: "AI and Machine Learning in Clinical Research",
      category: "Technology & Data",
      description: "Exploring the transformative potential of AI and ML in clinical trial design, execution, and analysis.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 2025",
      highlights: [
        "AI applications in trial design",
        "Predictive analytics case studies",
        "Implementation roadmap"
      ]
    },
    {
      id: 'regulatory-compliance',
      title: "Regulatory Compliance in the Digital Age",
      category: "Regulatory Compliance",
      description: "A comprehensive guide to maintaining compliance while leveraging modern clinical trial technologies.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "February 2025",
      highlights: [
        "Digital compliance frameworks",
        "Risk management strategies",
        "Regulatory updates and trends"
      ]
    }
  ];

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
                <span className="font-semibold">WHITE PAPERS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Clinical Research Insights</h1>
              <p className="text-xl mb-8">
                In-depth analysis and expert perspectives on clinical trial innovation and best practices
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="#white-papers" 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View White Papers <ChevronRight className="ml-2 h-4 w-4" />
                </motion.a>
                <motion.button 
                  onClick={() => setShowGuestPostForm(true)}
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PenTool className="mr-2 h-4 w-4" />
                  Submit White Paper
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured White Paper */}
        {whitePapers.find(paper => paper.featured) && (
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
                      src={whitePapers.find(paper => paper.featured)?.image}
                      alt="Featured white paper"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="text-sm text-purple-700 font-semibold mb-4">FEATURED WHITE PAPER</div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      {whitePapers.find(paper => paper.featured)?.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {whitePapers.find(paper => paper.featured)?.description}
                    </p>
                    <div className="flex items-center mb-6">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">
                        {whitePapers.find(paper => paper.featured)?.date}
                      </span>
                    </div>
                    <div className="flex space-x-4">
                      <Link to={`/white-papers/${whitePapers.find(paper => paper.featured)?.id}`}>
                        <motion.button 
                          className="bg-purple-700 text-white px-6 py-2 rounded-md font-semibold flex items-center hover:bg-purple-800"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Read White Paper <ChevronRight className="ml-2 h-4 w-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* White Papers Grid */}
        <section id="white-papers" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {whitePapers.filter(paper => !paper.featured).map((paper) => (
                <motion.div 
                  key={paper.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={paper.image}
                      alt={paper.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-purple-700 font-semibold">{paper.category}</span>
                      <span className="text-sm text-gray-500">{paper.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{paper.title}</h3>
                    <p className="text-gray-600 mb-4">{paper.description}</p>
                    <div className="space-y-2 mb-6">
                      {paper.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <Star className="h-4 w-4 text-purple-700 mr-2" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={`/white-papers/${paper.id}`}>
                      <motion.button 
                        className="w-full bg-purple-700 text-white px-4 py-2 rounded-md font-semibold flex items-center justify-center hover:bg-purple-800"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Read White Paper <ChevronRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    </Link>
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
              <h2 className="text-3xl font-bold mb-4">Need Help With Your Clinical Trials?</h2>
              <p className="text-xl mb-8">
                Let us help you implement these strategies in your next trial
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/request-proposal">
                  <motion.button 
                    className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request a Proposal <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </Link>
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

      {showGuestPostForm && (
        <GuestPostForm
          onClose={() => setShowGuestPostForm(false)}
          onSubmit={handleGuestPostSubmit}
        />
      )}

      <Footer />
    </div>
  );
};

export default WhitePapers;