import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ChevronRight, ArrowRight, MessageSquare, 
  Users, Clock, Award, FileText, Target, Brain, Heart,
  Activity, Shield, Database, Zap, Star, TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';
import EligibilityScreenerWidget from '../components/EligibilityScreener';

const EligibilityScreener = () => {
  const [showDemo, setShowDemo] = useState(false);

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

  const features = [
    {
      icon: Target,
      title: "10X Your Screening Efficiency",
      description: "Our AI-powered matching algorithm processes thousands of candidates instantly, doing the work of an entire recruitment team"
    },
    {
      icon: Database,
      title: "Instant Protocol Integration",
      description: "Stop wasting time with manual screening. Our system adapts to your protocol in minutes, not weeks"
    },
    {
      icon: Shield,
      title: "100% Compliance Guaranteed",
      description: "Built-in regulatory safeguards ensure every screening decision is documented and audit-ready"
    },
    {
      icon: Activity,
      title: "Real-time Performance Tracking",
      description: "Watch your metrics skyrocket with instant analytics and conversion tracking"
    }
  ];

  const benefits = [
    {
      title: "Screen Failures ELIMINATED",
      stat: "40%",
      description: "Our users see screen failures plummet immediately after implementation"
    },
    {
      title: "Time Back in Your Day",
      stat: "60%",
      description: "Reclaim hundreds of hours wasted on manual screening"
    },
    {
      title: "Qualified Leads EXPLODE",
      stat: "85%",
      description: "Watch your qualified participant pipeline multiply overnight"
    },
    {
      title: "Money Saved Per Patient",
      stat: "30%",
      description: "Slash your cost per enrolled patient starting day one"
    }
  ];

  const successStories = [
    {
      icon: Brain,
      title: "Neurology Study BREAKTHROUGH",
      impact: "45% faster enrollment",
      description: "Site went from struggling to CRUSHING enrollment goals in 30 days"
    },
    {
      icon: Heart,
      title: "Cardiology Trial TRANSFORMED",
      impact: "90% accuracy rate",
      description: "Eliminated screening bottlenecks and 10X'd qualified candidates"
    },
    {
      icon: Activity,
      title: "Diabetes Study EXPLOSION",
      impact: "70% cost reduction",
      description: "Slashed recruitment budget while DOUBLING enrollment speed"
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
                <Zap className="h-5 w-5 mr-2" />
                <span className="font-semibold">STOP WASTING TIME ON MANUAL SCREENING</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                10X Your Patient Screening Speed with AI-Powered Automation
              </h1>
              <p className="text-xl mb-8">
                Join the top 1% of research sites using smart technology to eliminate screening bottlenecks and explode enrollment rates
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  onClick={() => setShowDemo(true)}
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try It Now - Free <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
                <Link to="/contact-us">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get VIP Access
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Sites Crushing Goals", icon: Star },
                { number: "50,000+", label: "Patients Auto-Screened", icon: Users },
                { number: "60%", label: "Faster Than Manual", icon: Clock },
                { number: "95%", label: "Success Rate", icon: TrendingUp }
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

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stop Settling for Average Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your competition is already using these tools to dominate their recruitment goals
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
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
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Numbers Don't Lie
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These aren't just metrics - they're your competitive advantage
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="text-3xl font-bold text-purple-700 mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sites Like Yours Are CRUSHING IT
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't take our word for it - see the results for yourself
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {successStories.map((story, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                    <story.icon className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <div className="text-green-600 font-semibold mb-2">{story.impact}</div>
                  <p className="text-gray-600">{story.description}</p>
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
              <h2 className="text-3xl font-bold mb-4">
                Stop Leaving Money on the Table
              </h2>
              <p className="text-xl mb-8">
                Every day you wait is another day your competition gets ahead. Take action NOW!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  onClick={() => setShowDemo(true)}
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Now - Risk Free <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <Link to="/contact-us">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get VIP Demo <MessageSquare className="ml-2 h-4 w-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {showDemo && (
        <EligibilityScreenerWidget onClose={() => setShowDemo(false)} />
      )}

      <Footer />
    </div>
  );
};

export default EligibilityScreener;