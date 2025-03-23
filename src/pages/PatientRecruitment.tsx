import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, ChevronRight, Brain, Target, Globe, Database, 
  MessageSquare, BarChart, Search, Zap, Network, ArrowRight,
  UserPlus, Clock, Award, CheckCircle, Notebook, Sparkles 
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const PatientRecruitment = () => {
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

  const aiFeatures = [
    {
      title: "Smart Patient Matching",
      description: "Our AI analyzes complex eligibility criteria and matches them with patient profiles in real-time, increasing screening efficiency by 60%.",
      icon: Brain,
      stats: "60% faster screening"
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning algorithms predict recruitment trends and identify optimal recruitment channels for different patient populations.",
      icon: BarChart,
      stats: "40% better targeting"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP technology extracts relevant patient information from medical records and documents automatically.",
      icon: Notebook,
      stats: "85% accuracy rate"
    },
    {
      title: "Real-time Optimization",
      description: "AI continuously optimizes recruitment strategies based on performance data and patient engagement metrics.",
      icon: Sparkles,
      stats: "30% cost reduction"
    }
  ];

  const recruitmentChannels = [
    {
      title: "Digital Outreach",
      description: "Targeted social media campaigns and digital advertising using AI-driven audience segmentation.",
      icon: Globe
    },
    {
      title: "Healthcare Networks",
      description: "Partnerships with healthcare providers and clinics for direct patient referrals.",
      icon: Network
    },
    {
      title: "Patient Communities",
      description: "Engagement with online patient communities and support groups.",
      icon: Users
    },
    {
      title: "Database Mining",
      description: "Intelligent analysis of existing patient databases and health records.",
      icon: Database
    }
  ];

  const successMetrics = [
    {
      metric: "2x",
      label: "Faster Recruitment",
      description: "Double the recruitment speed compared to traditional methods"
    },
    {
      metric: "85%",
      label: "Screening Accuracy",
      description: "Higher pre-screening accuracy with AI-powered matching"
    },
    {
      metric: "40%",
      label: "Cost Reduction",
      description: "Lower cost per enrolled patient through optimized targeting"
    },
    {
      metric: "95%",
      label: "Patient Satisfaction",
      description: "Positive feedback from recruited participants"
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
                <UserPlus className="h-5 w-5 mr-2" />
                <span className="font-semibold">PATIENT RECRUITMENT</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Patient Recruitment</h1>
              <p className="text-xl mb-8">
                Accelerate your clinical trial recruitment with our innovative AI technology and global patient network
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-purple-700 mb-2">{metric.metric}</div>
                  <div className="text-lg font-semibold mb-2">{metric.label}</div>
                  <div className="text-gray-600 text-sm">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="py-16 bg-gray-50">
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
                Our advanced AI technology revolutionizes patient recruitment through intelligent matching and optimization
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {aiFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                      <feature.icon className="h-6 w-6 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full">
                        {feature.stats}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Recruitment Channels Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-Channel Recruitment</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reach potential participants through multiple optimized channels
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {recruitmentChannels.map((channel, index) => (
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
                    <channel.icon className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{channel.title}</h3>
                  <p className="text-gray-600">{channel.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recruitment Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A streamlined approach to finding and enrolling the right participants
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Protocol Analysis",
                  description: "AI analyzes your protocol to identify ideal patient profiles and recruitment strategies"
                },
                {
                  step: 2,
                  title: "Patient Identification",
                  description: "Smart matching technology identifies potential participants across multiple channels"
                },
                {
                  step: 3,
                  title: "Pre-screening",
                  description: "Automated pre-screening ensures candidates meet basic eligibility criteria"
                },
                {
                  step: 4,
                  title: "Enrollment Support",
                  description: "Dedicated support team assists with final screening and enrollment"
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
              <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Recruitment?</h2>
              <p className="text-xl mb-8">
                Let our AI-powered platform help you find the right participants faster
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Sales <MessageSquare className="ml-2 h-4 w-4" />
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

export default PatientRecruitment;