import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Tv, ChevronRight, ArrowRight, MessageSquare, Search, Filter, Globe, Users, Heart, Activity, Brain, Dna, 
  Baby, Microscope, Pill, Guitar as Hospital, Music, Film, Newspaper, Gamepad, Coffee, Book, Utensils, Home, 
  Smile, Zap, Star, Youtube, Facebook, Twitter, Linkedin, MessageCircle, Radio, MapPin, Database as DatabaseIcon,
  Target, BarChart, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const RecruitmentChannels = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
          name: "Facebook Ads",
          description: "Highly targeted patient recruitment with demographic and interest-based targeting",
          reach: "2.9B+ monthly users"
        },
        {
          name: "Google Ads & Retargeting",
          description: "Search and display network advertising with advanced retargeting capabilities",
          reach: "90% internet users"
        },
        {
          name: "YouTube Advertising",
          description: "Video-based patient education and recruitment campaigns",
          reach: "2.5B+ monthly users"
        },
        {
          name: "Programmatic Display",
          description: "Automated, targeted display advertising across premium websites",
          reach: "95% of web traffic"
        }
      ]
    },
    {
      category: "Streaming Platforms",
      icon: Tv,
      channels: [
        {
          name: "Hulu Advertising",
          description: "Premium streaming platform with detailed audience targeting",
          reach: "48M+ subscribers"
        },
        {
          name: "Roku Channel Ads",
          description: "Connected TV advertising with precise demographic targeting",
          reach: "70M+ active accounts"
        },
        {
          name: "Premium Streaming Networks",
          description: "Targeted ads across major streaming platforms",
          reach: "200M+ households"
        }
      ]
    },
    {
      category: "Social Media",
      icon: MessageCircle,
      channels: [
        {
          name: "LinkedIn Ads",
          description: "Professional network targeting for specialized conditions",
          reach: "875M+ professionals"
        },
        {
          name: "Twitter Advertising",
          description: "Real-time engagement with health-conscious audiences",
          reach: "450M+ daily users"
        },
        {
          name: "Reddit Health Communities",
          description: "Targeted outreach in condition-specific subreddits",
          reach: "50M+ daily users"
        }
      ]
    },
    {
      category: "Patient Database",
      icon: DatabaseIcon,
      channels: [
        {
          name: "Proprietary Database",
          description: "Direct access to 18,000+ pre-screened patients",
          reach: "18,000+ patients"
        },
        {
          name: "Healthcare Provider Network",
          description: "Referral network of physicians and specialists",
          reach: "5,000+ providers"
        },
        {
          name: "Patient Advocacy Groups",
          description: "Partnerships with disease-specific organizations",
          reach: "100+ organizations"
        }
      ]
    },
    {
      category: "Intent Data",
      icon: Search,
      channels: [
        {
          name: "Health Search Intent",
          description: "Target users actively researching conditions",
          reach: "Monthly active searchers"
        },
        {
          name: "Medical Website Behavior",
          description: "Engagement tracking across medical content",
          reach: "50M+ monthly visitors"
        },
        {
          name: "Healthcare App Users",
          description: "In-app targeting of relevant users",
          reach: "10M+ active users"
        }
      ]
    },
    {
      category: "Traditional Media",
      icon: Radio,
      channels: [
        {
          name: "Local TV Stations",
          description: "Targeted local market television advertising",
          reach: "Regional coverage"
        },
        {
          name: "Radio Networks",
          description: "Health program sponsorships and advertising",
          reach: "Local markets"
        },
        {
          name: "Print Media",
          description: "Medical journals and health publications",
          reach: "Industry reach"
        }
      ]
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Multi-Channel Integration",
      description: "Seamlessly coordinate campaigns across all channels for maximum impact"
    },
    {
      icon: DatabaseIcon,
      title: "Real-time Analytics",
      description: "Track performance and optimize campaigns with live data insights"
    },
    {
      icon: Users,
      title: "Audience Targeting",
      description: "Precise demographic and behavioral targeting capabilities"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to worldwide audience through diverse channel mix"
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
                <Tv className="h-5 w-5 mr-2" />
                <span className="font-semibold">RECRUITMENT CHANNELS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Patient Recruitment Channels
              </h1>
              <p className="text-xl mb-8">
                Access our comprehensive network of digital, traditional, and specialized recruitment channels to reach qualified patients faster
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Channels <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
                <Link to="/contact-us">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Custom Package
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search channels..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none bg-white"
                >
                  <option value="All">All Categories</option>
                  {marketingChannels.map(category => (
                    <option key={category.category} value={category.category}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Channels Section */}
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
                Premium Channel Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access our extensive network of targeted recruitment channels
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
                  className="bg-white rounded-lg p-6"
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
                      <div key={channelIndex} className="bg-gray-50 p-4 rounded-lg">
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

        {/* Features Section */}
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
                Channel Management Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful tools to optimize your recruitment campaigns
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
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
                    <feature.icon className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Channel Performance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from our multi-channel recruitment approach
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                    <benefit.icon className="h-6 w-6 text-purple-700" />
                  </div>
                  <div className="text-3xl font-bold text-purple-700 mb-2">{benefit.stat}</div>
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
              <h2 className="text-3xl font-bold mb-4">
                Ready to Supercharge Your Recruitment?
              </h2>
              <p className="text-xl mb-8">
                Get instant access to our premium channel network and start enrolling more patients today
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

export default RecruitmentChannels;