import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Award, Users, Clock, Activity as Diversity, Heart, Shield, Database, ChevronRight, BarChart, Target, UserPlus, Globe, FileText, MessageSquare, Sparkles, Crown, Diamond, Star, BookOpen, Lightbulb, Briefcase, Megaphone, Share2, Zap, Search, Brain, Microscope, Dna 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AccessibilityMenu from './components/AccessibilityMenu';

function App() {
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

  const circles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  const recentTrials = [
    {
      title: "Phase III Alzheimer's Study",
      metric: "40% faster enrollment",
      icon: Brain
    },
    {
      title: "Oncology Immunotherapy Trial",
      metric: "92% retention rate",
      icon: Microscope
    },
    {
      title: "Rare Disease Research",
      metric: "500+ patients enrolled",
      icon: Dna
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <AccessibilityMenu />
      <Header />
      
      <main id="main-content">
        <section className="relative min-h-screen flex items-center bg-[#1a365d] text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1581093458791-9f3d57e7ee44?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
              opacity: 0.15
            }}
          />

          <div className="absolute inset-0 overflow-hidden">
            {circles.map((circle) => (
              <motion.div
                key={circle.id}
                className="absolute rounded-full bg-white/5"
                style={{
                  width: circle.size,
                  height: circle.size,
                  left: `${circle.x}%`,
                  top: `${circle.y}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: circle.duration,
                  repeat: Infinity,
                  delay: circle.delay,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
            <motion.div 
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Accelerate Your Clinical Trial Recruitment</h1>
              <p className="text-xl mb-4">AI-Powered Patient Matching Technology™</p>
              <p className="text-lg mb-8">
                Our advanced AI technology matches qualified patients with your clinical trials in real-time. Experience faster enrollment, higher retention rates, and more diverse patient populations with our innovative recruitment solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/request-proposal">
                  <motion.button 
                    className="bg-[#FF595A] text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-[#FF474A] transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </Link>
                <Link to="/solutions">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-[#1a365d] to-[#2d4a8a] text-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold">Powered by Advanced AI Technology</h2>
                <p className="text-xl">
                  Our proprietary AI engine analyzes millions of data points in real-time to match the right patients with your clinical trials.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-full p-2 mr-4 mt-1">
                      <Brain className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Smart Protocol Analysis</h3>
                      <p className="text-white/80">AI-powered analysis of inclusion/exclusion criteria for precise patient matching</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-full p-2 mr-4 mt-1">
                      <Database className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Extensive Patient Database</h3>
                      <p className="text-white/80">Access to over 10 million pre-screened patients across multiple therapeutic areas</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/10 rounded-full p-2 mr-4 mt-1">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Predictive Analytics</h3>
                      <p className="text-white/80">Advanced algorithms predict enrollment patterns and optimize recruitment strategies</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/patient-recruitment">
                    <motion.button 
                      className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center hover:bg-gray-100 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More About Our Technology <ChevronRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-[#2d4a8a]/50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-[#60a5fa] mb-2">10M+</div>
                  <div className="text-lg">Pre-screened Patients</div>
                </div>
                <div className="bg-[#2d4a8a]/50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-[#60a5fa] mb-2">95%</div>
                  <div className="text-lg">Match Accuracy</div>
                </div>
                <div className="bg-[#2d4a8a]/50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-[#60a5fa] mb-2">60%</div>
                  <div className="text-lg">Faster Enrollment</div>
                </div>
                <div className="bg-[#2d4a8a]/50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-[#60a5fa] mb-2">85%</div>
                  <div className="text-lg">Retention Rate</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#2d4a8a]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentTrials.map((trial, index) => (
                <motion.div 
                  key={index}
                  className="bg-[#1a365d] p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center">
                    <div className="bg-[#2d4a8a] rounded-full p-3 mr-4">
                      <trial.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{trial.title}</h3>
                      <p className="text-blue-200">{trial.metric}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#1a365d] text-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless CRIO Integration</h2>
              <p className="text-xl max-w-3xl mx-auto">
                Direct patient referrals to your CRIO-enabled sites with our automated lead management system
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-[#2d4a8a] p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-[#1a365d] rounded-full p-3 inline-flex mb-4">
                  <UserPlus className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Instant Lead Notifications</h3>
                <p className="text-blue-200">
                  Real-time patient referrals sent directly to your CRIO dashboard
                </p>
              </motion.div>

              <motion.div 
                className="bg-[#2d4a8a] p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-[#1a365d] rounded-full p-3 inline-flex mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Automated Data Sync</h3>
                <p className="text-blue-200">
                  Patient information automatically populated in your CRIO system
                </p>
              </motion.div>

              <motion.div 
                className="bg-[#2d4a8a] p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-[#1a365d] rounded-full p-3 inline-flex mb-4">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Performance Analytics</h3>
                <p className="text-blue-200">
                  Track recruitment metrics and conversion rates in real-time
                </p>
              </motion.div>
            </div>
          </div>
        </section>

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
                Comprehensive solutions to accelerate your clinical trials
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  icon: Target,
                  title: "Patient Recruitment",
                  description: "AI-powered patient matching and recruitment optimization",
                  features: [
                    "Protocol-based matching",
                    "Multi-channel outreach",
                    "Real-time analytics",
                    "Diversity tracking"
                  ]
                },
                {
                  icon: Globe,
                  title: "Site Network",
                  description: "Global network of high-performing research sites",
                  features: [
                    "Site feasibility",
                    "Performance metrics",
                    "Quality monitoring",
                    "Resource optimization"
                  ]
                },
                {
                  icon: Users,
                  title: "Patient Engagement",
                  description: "Comprehensive patient retention and support tools",
                  features: [
                    "Digital engagement",
                    "Visit reminders",
                    "Travel support",
                    "Patient feedback"
                  ]
                },
                {
                  icon: Database,
                  title: "Data Management",
                  description: "End-to-end clinical data management solutions",
                  features: [
                    "EDC integration",
                    "Quality control",
                    "Real-time monitoring",
                    "Regulatory compliance"
                  ]
                },
                {
                  icon: Brain,
                  title: "AI Analytics",
                  description: "Advanced analytics and predictive modeling",
                  features: [
                    "Enrollment forecasting",
                    "Risk prediction",
                    "Performance optimization",
                    "Trend analysis"
                  ]
                },
                {
                  icon: Shield,
                  title: "Regulatory Support",
                  description: "Comprehensive regulatory and compliance services",
                  features: [
                    "Document management",
                    "Submission support",
                    "Quality assurance",
                    "Audit preparation"
                  ]
                }
              ].map((solution, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="bg-purple-100 rounded-full p-4 inline-flex mb-6">
                    <solution.icon className="h-8 w-8 text-purple-700" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <ChevronRight className="h-5 w-5 text-purple-700 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/solutions">
                    <motion.button 
                      className="mt-8 text-purple-700 font-semibold flex items-center hover:text-purple-900"
                      whileHover={{ x: 5 }}
                    >
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Innovative solutions designed to accelerate your clinical trials
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
                  icon: Brain,
                  title: "AI-Powered Matching",
                  description: "Advanced algorithms analyze protocol requirements and patient data in real-time"
                },
                {
                  icon: Globe,
                  title: "Global Network",
                  description: "Access to diverse patient populations across multiple regions and countries"
                },
                {
                  icon: Shield,
                  title: "Compliance Assured",
                  description: "Built-in regulatory compliance and data protection measures"
                },
                {
                  icon: Sparkles,
                  title: "Smart Analytics",
                  description: "Real-time insights and predictive analytics for recruitment optimization"
                },
                {
                  icon: Users,
                  title: "Patient Engagement",
                  description: "Comprehensive tools for patient communication and retention"
                },
                {
                  icon: Database,
                  title: "Data Integration",
                  description: "Seamless integration with major EDC and CTMS platforms"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                    <feature.icon className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TheraNovex</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of our innovative approach to clinical trial recruitment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Faster Recruitment",
                  stat: "60%",
                  description: "Reduction in recruitment timelines"
                },
                {
                  icon: Users,
                  title: "Higher Retention",
                  stat: "92%",
                  description: "Patient retention rate"
                },
                {
                  icon: Diversity,
                  title: "Greater Diversity",
                  stat: "85%",
                  description: "Increase in diverse enrollment"
                },
                {
                  icon: Award,
                  title: "Quality Assured",
                  stat: "99%",
                  description: "Data quality score"
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-purple-100 rounded-full p-4 inline-flex mb-4">
                    <benefit.icon className="h-8 w-8 text-purple-700" />
                  </div>
                  <div className="text-3xl font-bold text-purple-700 mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Hear from leading research organizations about their experience with TheraNovex
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
                  quote: "TheraNovex's AI-powered recruitment platform helped us exceed our enrollment targets two months ahead of schedule.",
                  author: "Dr. Sarah Chen",
                  title: "Clinical Research Director",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                },
                {
                  quote: "The platform's ability to identify and engage qualified patients has transformed our recruitment process.",
                  author: "Dr. Michael Rodriguez",
                  title: "Principal Investigator",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                },
                {
                  quote: "We've seen a significant improvement in patient diversity and retention since partnering with TheraNovex.",
                  author: "Emily Thompson",
                  title: "Clinical Operations Manager",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.div 
              className="bg-gradient-to-r from-[#1a365d] to-[#2d4a8a] text-white rounded-xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Clinical Trial Recruitment?</h2>
              <p className="text-xl mb-8">
                Join leading research organizations using TheraNovex to accelerate their clinical trials
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/request-proposal">
                  <motion.button 
                    className="bg-white text-[#1a365d] px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </Link>
                <Link to="/contact-us">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Sales <MessageSquare className="ml-2 h-4 w-4" />
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
}

export default App;