import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, ChevronRight, FileText, Users, Clock, 
  Award, Target, Globe, Search, ArrowRight, MessageSquare,
  CheckCircle, Star, BarChart, Activity
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AccessibilityMenu from '../../components/AccessibilityMenu';

const Cardiovascular = () => {
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

  const expertiseAreas = [
    {
      title: "Heart Failure",
      description: "Leading expertise in acute and chronic heart failure trials, including novel therapeutic approaches",
      stats: {
        trials: 95,
        patients: "7,500+",
        sites: 220
      }
    },
    {
      title: "Coronary Artery Disease",
      description: "Comprehensive experience in interventional cardiology and medical management trials",
      stats: {
        trials: 75,
        patients: "5,000+",
        sites: 180
      }
    },
    {
      title: "Arrhythmias",
      description: "Specialized trials in cardiac rhythm management and electrophysiology",
      stats: {
        trials: 55,
        patients: "3,500+",
        sites: 140
      }
    },
    {
      title: "Vascular Disease",
      description: "Expertise in peripheral arterial disease and venous disorders",
      stats: {
        trials: 45,
        patients: "2,800+",
        sites: 120
      }
    }
  ];

  const capabilities = [
    {
      title: "Cardiac Imaging",
      description: "Advanced cardiac imaging and monitoring capabilities",
      icon: Search
    },
    {
      title: "Global Sites",
      description: "Access to leading cardiovascular centers worldwide",
      icon: Globe
    },
    {
      title: "Risk Management",
      description: "Comprehensive cardiovascular safety monitoring",
      icon: Activity
    },
    {
      title: "Data Analytics",
      description: "Sophisticated analysis of cardiac endpoints",
      icon: BarChart
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
                <Heart className="h-5 w-5 mr-2" />
                <span className="font-semibold">CARDIOVASCULAR</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cardiovascular Clinical Research</h1>
              <p className="text-xl mb-8">
                Advancing cardiovascular medicine through innovative clinical trials
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start a Trial <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "180+", label: "Cardiovascular Trials", icon: FileText },
                { number: "14,000+", label: "Patients Enrolled", icon: Users },
                { number: "15+", label: "Years Experience", icon: Clock },
                { number: "97%", label: "Trial Success Rate", icon: Award }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-purple-100 rounded-full p-4 inline-flex mb-4">
                    <stat.icon className="h-8 w-8 text-purple-700" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Areas Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive experience across cardiovascular conditions
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {expertiseAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-700">{area.stats.trials}</div>
                      <div className="text-sm text-gray-500">Trials</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-700">{area.stats.patients}</div>
                      <div className="text-sm text-gray-500">Patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-700">{area.stats.sites}</div>
                      <div className="text-sm text-gray-500">Sites</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cardiovascular trial management solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
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
                    <capability.icon className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from our cardiovascular expertise in action
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
                  title: "Heart Failure Device Trial",
                  impact: "Reduced enrollment time by 35%",
                  description: "Successfully managed a complex device trial across 75 sites globally."
                },
                {
                  title: "Novel Anticoagulant Study",
                  impact: "98% data quality score",
                  description: "Achieved exceptional data quality in a large Phase III trial."
                },
                {
                  title: "Post-MI Treatment Study",
                  impact: "Met diversity goals",
                  description: "Exceeded recruitment targets while maintaining diverse representation."
                }
              ].map((study, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <Star className="h-8 w-8 text-purple-700 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <div className="flex items-center text-green-600 mb-4">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {study.impact}
                  </div>
                  <p className="text-gray-600">{study.description}</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Cardiovascular Trial?</h2>
              <p className="text-xl mb-8">
                Let our expertise guide your next cardiovascular clinical trial to success
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Proposal <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us <MessageSquare className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cardiovascular;