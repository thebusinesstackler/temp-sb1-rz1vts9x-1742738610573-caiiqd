import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, ChevronRight, ArrowRight, MessageSquare, 
  Globe, Users, Clock, Award, Target, Brain, Heart,
  Activity, Shield, Database, Zap, Star, BarChart,
  CheckCircle, Search, Tv, Newspaper, Phone, MessageCircle,
  Mail, Share2, Radio, MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const Sponsors = () => {
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

  const marketingChannels = [
    {
      category: "Digital Advertising",
      icon: Globe,
      channels: [
        {
          name: "Google Search Ads",
          description: "Targeted PPC campaigns on Google Search Network",
          reach: "2M+ monthly searches"
        },
        {
          name: "Facebook & Instagram",
          description: "Demographic and interest-based targeting",
          reach: "500K+ daily reach"
        },
        {
          name: "LinkedIn Healthcare",
          description: "Professional healthcare network targeting",
          reach: "200K+ professionals"
        }
      ]
    },
    {
      category: "Healthcare Networks",
      icon: Users,
      channels: [
        {
          name: "EMR/EHR Integration",
          description: "Direct patient matching through healthcare systems",
          reach: "1000+ clinics"
        },
        {
          name: "Provider Networks",
          description: "Physician referral networks and partnerships",
          reach: "5000+ providers"
        },
        {
          name: "Pharmacy Partnerships",
          description: "Point-of-care patient education",
          reach: "2500+ locations"
        }
      ]
    },
    {
      category: "Community Outreach",
      icon: Heart,
      channels: [
        {
          name: "Patient Advocacy Groups",
          description: "Partnerships with disease-specific organizations",
          reach: "100+ organizations"
        },
        {
          name: "Community Events",
          description: "Health fairs and educational seminars",
          reach: "50+ events/month"
        },
        {
          name: "Support Groups",
          description: "Direct engagement with patient communities",
          reach: "300+ groups"
        }
      ]
    },
    {
      category: "Traditional Media",
      icon: Tv,
      channels: [
        {
          name: "Local TV & Radio",
          description: "Targeted healthcare programming spots",
          reach: "1M+ viewers/listeners"
        },
        {
          name: "Print Media",
          description: "Medical journals and health publications",
          reach: "500K+ readers"
        },
        {
          name: "Out-of-Home",
          description: "Medical office and pharmacy displays",
          reach: "1000+ locations"
        }
      ]
    },
    {
      category: "Digital Content",
      icon: Newspaper,
      channels: [
        {
          name: "Health Websites",
          description: "Premium placements on medical portals",
          reach: "3M+ monthly visitors"
        },
        {
          name: "Medical Apps",
          description: "In-app notifications and banners",
          reach: "1M+ active users"
        },
        {
          name: "Patient Forums",
          description: "Condition-specific online communities",
          reach: "500K+ members"
        }
      ]
    },
    {
      category: "Direct Outreach",
      icon: Phone,
      channels: [
        {
          name: "Call Center",
          description: "Dedicated patient engagement team",
          reach: "10K+ calls/month"
        },
        {
          name: "Email Campaigns",
          description: "Targeted patient education emails",
          reach: "1M+ subscribers"
        },
        {
          name: "SMS Programs",
          description: "Opt-in text message updates",
          reach: "250K+ subscribers"
        }
      ]
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Centralized Lead Distribution",
      description: "Automatically route qualified patients to up to 3 study sites based on location and availability"
    },
    {
      icon: Database,
      title: "Real-time Lead Management",
      description: "Track patient status, site capacity, and enrollment metrics across all locations"
    },
    {
      icon: Shield,
      title: "Compliance Assured",
      description: "Built-in IRB compliance checks and documentation for all patient communications"
    },
    {
      icon: Globe,
      title: "Multi-Site Support",
      description: "Manage up to 3 research sites from a single dashboard with our standard package"
    }
  ];

  const benefits = [
    {
      title: "Faster Enrollment",
      stat: "40%",
      description: "Reduction in enrollment timelines",
      icon: Clock
    },
    {
      title: "Higher Quality",
      stat: "85%",
      description: "Pre-screening accuracy",
      icon: Target
    },
    {
      title: "Cost Savings",
      stat: "30%",
      description: "Lower cost per patient",
      icon: BarChart
    },
    {
      title: "Better Coverage",
      stat: "3X",
      description: "Geographic reach",
      icon: Globe
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
                <Building className="h-5 w-5 mr-2" />
                <span className="font-semibold">FOR SPONSORS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Central Campaign Distribution
              </h1>
              <p className="text-xl mb-8">
                Streamline patient recruitment across multiple sites with automated lead distribution and tracking
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
                <Link to="/contact-us">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Demo
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Marketing Channels Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Marketing Channels</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access our extensive network of targeted recruitment channels to reach qualified patients
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {marketingChannels.map((category, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-6"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                      <category.icon className="h-6 w-6 text-purple-700" />
                    </div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.channels.map((channel, channelIndex) => (
                      <div key={channelIndex} className="bg-white p-4 rounded-lg">
                        <div className="font-semibold mb-1">{channel.name}</div>
                        <p className="text-gray-600 text-sm mb-2">{channel.description}</p>
                        <div className="text-purple-700 text-sm font-medium">
                          {channel.reach}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                One flat fee covers everything you need to manage recruitment across multiple sites
              </p>
            </motion.div>

            <motion.div 
              className="max-w-lg mx-auto bg-white rounded-lg p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="inline-flex items-center bg-purple-100 px-4 py-2 rounded-full mb-6">
                  <Star className="h-5 w-5 text-purple-700 mr-2" />
                  <span className="font-semibold text-purple-700">STANDARD PACKAGE</span>
                </div>
                <div className="text-4xl font-bold mb-2">$10,000</div>
                <p className="text-gray-600 mb-6">per study (up to 3 sites)</p>
                <ul className="text-left space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Central campaign management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Automated lead distribution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Real-time performance tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Up to 3 research sites
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Compliance documentation
                  </li>
                </ul>
                <motion.button 
                  className="w-full bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-purple-800"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <p className="text-sm text-gray-500 mt-4">
                  Need more sites? Contact us for custom enterprise pricing.
                </p>
              </div>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Multi-Site Recruitment?</h2>
              <p className="text-xl mb-8">
                Get started with central campaign distribution today
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo <MessageSquare className="ml-2 h-4 w-4" />
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

export default Sponsors;