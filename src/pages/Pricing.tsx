import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight, Shield, Clock, Users, Headphones, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const Pricing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Comprehensive Tool Suite",
      description: "Access our complete collection of clinical research tools"
    },
    {
      icon: Clock,
      title: "14-Day Free Trial",
      description: "Try all features risk-free for two weeks"
    },
    {
      icon: Users,
      title: "Unlimited Team Members",
      description: "Add your entire research team at no extra cost"
    },
    {
      icon: Headphones,
      title: "Priority Support",
      description: "Get dedicated assistance when you need it"
    }
  ];

  const includedTools = [
    "Eligibility Screener Widget",
    "Automated Referral Tracker",
    "Study Participant Cost Estimator",
    "Visit Schedule Generator",
    "Regulatory Document Checklist",
    "Protocol Feasibility Calculator",
    "Patient Retention Reminder System",
    "Study Updates Newsletter Generator",
    "Participant Satisfaction Survey Builder",
    "Adverse Event Reporting Form Generator",
    "De-Identified Data Anonymizer",
    "IRB Submission Checklist & Tracker",
    "Study Budget Planner",
    "Grant & Funding Opportunity Finder",
    "GCP Quiz & Certification",
    "Site Training Tracker",
    "Informed Consent Builder"
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
                <Star className="h-5 w-5 mr-2" />
                <span className="font-semibold">SPECIAL OFFER</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Access to All Research Tools</h1>
              <p className="text-xl mb-8">
                Start streamlining your clinical research workflow today with our comprehensive suite of tools
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <div className="text-3xl font-bold">$299<span className="text-lg">/month</span></div>
                <div className="bg-white/20 px-4 py-2 rounded-full text-sm">
                  14-day free trial included
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                    <feature.icon className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Included Tools Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access our complete suite of research tools designed to streamline your clinical trials
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {includedTools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{tool}</span>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Clinical Research?</h2>
              <p className="text-xl mb-8">
                Start your 14-day free trial today. No credit card required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
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

export default Pricing;