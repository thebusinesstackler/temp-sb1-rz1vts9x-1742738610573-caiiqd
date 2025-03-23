import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, Users, Clock, Award, FileText, 
  Target, Globe, Search, Calendar, Bell,
  Shield, Star, BarChart, Activity,
  MessageSquare, ArrowRight, Brain, Heart,
  UserPlus, Microscope
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const Solutions = () => {
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

  const solutions = [
    {
      icon: Brain,
      title: "AI-Powered Patient Matching",
      description: "Our advanced algorithms match qualified patients with your trials in real-time.",
      features: [
        "Intelligent protocol analysis",
        "Automated pre-screening",
        "Real-time eligibility verification",
        "Predictive enrollment modeling"
      ]
    },
    {
      icon: Target,
      title: "Multi-Channel Recruitment",
      description: "Reach potential participants through optimized channels and targeted outreach.",
      features: [
        "Digital advertising campaigns",
        "Social media engagement",
        "Community outreach programs",
        "Healthcare provider networks"
      ]
    },
    {
      icon: Heart,
      title: "Patient Engagement",
      description: "Keep participants informed and involved throughout the trial journey.",
      features: [
        "Educational resources",
        "Mobile engagement app",
        "Automated reminders",
        "Support programs"
      ]
    },
    {
      icon: UserPlus,
      title: "Real-Time Lead Management",
      description: "Instant notification and tracking of potential participants via CRM integration.",
      features: [
        "API-driven notifications",
        "Automated lead scoring",
        "Contact tracking",
        "Performance analytics"
      ]
    }
  ];

  const benefits = [
    {
      title: "Faster Enrollment",
      description: "Reduce recruitment timelines by up to 60% with our targeted strategies",
      stats: "60%",
      icon: Clock
    },
    {
      title: "Greater Diversity",
      description: "Achieve better representation with our inclusive recruitment approach",
      stats: "40%",
      icon: Users
    },
    {
      title: "Higher Retention",
      description: "Improve patient retention through enhanced engagement",
      stats: "85%",
      icon: Award
    },
    {
      title: "Cost Efficiency",
      description: "Optimize recruitment budgets with our streamlined processes",
      stats: "30%",
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
                <FileText className="h-5 w-5 mr-2" />
                <span className="font-semibold">RECRUITMENT SOLUTIONS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Accelerate Your Patient Recruitment</h1>
              <p className="text-xl mb-8">
                Advanced AI-powered solutions to find, engage, and retain the right patients for your clinical trials
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/request-proposal">
                  <motion.button 
                    className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Demo <ChevronRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </Link>
                <Link to="/contact-us">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Sales
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive recruitment solutions designed to accelerate your clinical trials
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {solutions.map((solution, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-8"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="bg-purple-100 rounded-full p-3 inline-flex mb-6">
                    <solution.icon className="h-8 w-8 text-purple-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <ChevronRight className="h-5 w-5 text-purple-700 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button 
                    className="mt-6 text-purple-700 font-semibold flex items-center hover:text-purple-900"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our solutions deliver measurable improvements across key performance indicators
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                    <benefit.icon className="h-6 w-6 text-purple-700" />
                  </div>
                  <div className="text-3xl font-bold text-purple-700 mb-2">{benefit.stats}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Patient Recruitment?</h2>
              <p className="text-xl mb-8">
                Let our solutions help you find and engage the right patients faster
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

      <Footer />
    </div>
  );
};

export default Solutions;