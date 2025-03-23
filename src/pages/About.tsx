import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Users, Globe, Shield, Clock, Award,
  Heart, Star, ChevronRight, ArrowRight, MessageSquare,
  Lightbulb, Brain, Zap, Database, Network
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const About = () => {
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

  const values = [
    {
      icon: Heart,
      title: "Patient-First Approach",
      description: "We prioritize patient needs and experiences, ensuring clinical trials are accessible, comfortable, and beneficial for all participants."
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Our advanced technology connects the right patients with the right trials, optimizing recruitment efficiency and study outcomes."
    },
    {
      icon: Shield,
      title: "Quality & Compliance",
      description: "We maintain the highest standards of regulatory compliance and data quality in all our recruitment processes."
    },
    {
      icon: Globe,
      title: "Inclusive Access",
      description: "We're committed to breaking down barriers and ensuring clinical trials are accessible to diverse communities worldwide."
    }
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: "AI-Powered Patient Matching",
      description: "Our proprietary algorithms analyze millions of data points to identify and match eligible patients with clinical trials in real-time.",
      stats: "60% faster matching"
    },
    {
      icon: Network,
      title: "Smart Site Selection",
      description: "Machine learning optimizes site selection by analyzing historical performance data and patient populations.",
      stats: "85% accuracy rate"
    },
    {
      icon: Database,
      title: "Predictive Analytics",
      description: "Advanced analytics predict enrollment patterns and identify optimal recruitment strategies.",
      stats: "40% better forecasting"
    },
    {
      icon: Zap,
      title: "Automated Screening",
      description: "AI-driven pre-screening reduces administrative burden and improves qualification accuracy.",
      stats: "75% time savings"
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
                <Brain className="h-5 w-5 mr-2" />
                <span className="font-semibold">REIMAGINING RECRUITMENT</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About TheraNovex</h1>
              <p className="text-xl mb-8">
                Transforming clinical trial recruitment through AI innovation, technology, and patient-centric approaches
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/request-proposal">
                  <motion.button 
                    className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started <ChevronRight className="ml-2 h-4 w-4" />
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

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Revolutionizing Patient Recruitment</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At TheraNovex, we're transforming clinical trial recruitment through cutting-edge AI technology and patient-centric approaches. Our mission is to accelerate medical breakthroughs by connecting the right patients with the right trials faster and more efficiently than ever before.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our AI-powered platform analyzes millions of data points in real-time, matching patients with trials based on complex eligibility criteria, genetic profiles, and demographic factors. This precision matching capability, combined with our global network of healthcare providers and patient communities, enables us to reduce recruitment timelines by up to 60%.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-purple-700">60%</div>
                    <div className="text-gray-600">Faster Recruitment</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-purple-700">85%</div>
                    <div className="text-gray-600">Match Accuracy</div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="AI-powered clinical research"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our patient recruitment approach
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                    <value.icon className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Recruitment</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our advanced artificial intelligence technology revolutionizes how we connect patients with clinical trials
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {aiCapabilities.map((capability, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                      <capability.icon className="h-6 w-6 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                      <p className="text-gray-600 mb-4">{capability.description}</p>
                      <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full">
                        {capability.stats}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technology Innovation Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Technology That Transforms</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our platform leverages advanced technologies to revolutionize patient recruitment:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-2 mr-3">
                      <Brain className="h-5 w-5 text-purple-700" />
                    </div>
                    <span>Machine learning algorithms for precise patient matching</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-2 mr-3">
                      <Database className="h-5 w-5 text-purple-700" />
                    </div>
                    <span>Real-time data processing and analytics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-2 mr-3">
                      <Network className="h-5 w-5 text-purple-700" />
                    </div>
                    <span>Global patient database integration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-2 mr-3">
                      <Shield className="h-5 w-5 text-purple-700" />
                    </div>
                    <span>Advanced security and compliance measures</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Advanced technology platform"
                  className="rounded-lg shadow-lg"
                />
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Clinical Trial Recruitment?</h2>
              <p className="text-xl mb-8">
                Experience the power of AI-driven patient recruitment and accelerate your clinical trials
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/request-proposal">
                  <motion.button 
                    className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
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

      <Footer />
    </div>
  );
};

export default About;