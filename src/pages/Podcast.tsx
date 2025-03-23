import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Download, Share2, ChevronRight, Search, Filter, Headphones } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

interface PodcastEpisode {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  image: string;
  category: string;
  featured?: boolean;
}

const Podcast = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  // Podcast categories
  const categories = [
    'All',
    'Clinical Trials',
    'Patient Recruitment',
    'Diversity in Research',
    'Decentralized Trials',
    'Research Innovation',
    'Industry Insights'
  ];

  // Podcast episodes data
  const episodes: PodcastEpisode[] = [
    {
      id: 1,
      title: "The Future of Decentralized Clinical Trials",
      description: "In this episode, we discuss how decentralized clinical trials are transforming the research landscape and improving patient access to innovative treatments.",
      date: "May 15, 2025",
      duration: "42:18",
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Decentralized Trials",
      featured: true
    },
    {
      id: 2,
      title: "Improving Diversity in Clinical Research",
      description: "Our experts explore strategies for enhancing diversity and inclusion in clinical trials to ensure treatments work for all populations.",
      date: "May 1, 2025",
      duration: "38:45",
      image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Diversity in Research"
    },
    {
      id: 3,
      title: "Patient-Centric Recruitment Strategies",
      description: "Learn about innovative approaches to patient recruitment that put participants' needs and experiences at the center of the process.",
      date: "April 22, 2025",
      duration: "45:12",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Patient Recruitment"
    },
    {
      id: 4,
      title: "Regulatory Considerations for Modern Clinical Trials",
      description: "Our regulatory experts discuss the evolving landscape of clinical trial regulations and how to navigate compliance challenges.",
      date: "April 8, 2025",
      duration: "51:30",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Clinical Trials"
    },
    {
      id: 5,
      title: "AI and Machine Learning in Clinical Research",
      description: "Explore how artificial intelligence and machine learning are revolutionizing clinical trial design, execution, and analysis.",
      date: "March 25, 2025",
      duration: "47:22",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Research Innovation"
    },
    {
      id: 6,
      title: "The Role of Real-World Evidence in Drug Development",
      description: "Our panel discusses how real-world evidence is complementing traditional clinical trials and accelerating the drug development process.",
      date: "March 11, 2025",
      duration: "39:58",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Industry Insights"
    },
    {
      id: 7,
      title: "Patient Advocacy and Clinical Research",
      description: "Learn how patient advocacy groups are shaping clinical research priorities and improving trial design and execution.",
      date: "February 28, 2025",
      duration: "44:15",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Patient Recruitment"
    },
    {
      id: 8,
      title: "Global Clinical Trials: Challenges and Opportunities",
      description: "Our international experts discuss the complexities of conducting clinical trials across multiple countries and regions.",
      date: "February 14, 2025",
      duration: "53:40",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Clinical Trials"
    }
  ];

  // Filter episodes based on search term and category
  const filteredEpisodes = episodes.filter(episode => {
    const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          episode.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || episode.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured episode
  const featuredEpisode = episodes.find(episode => episode.featured);

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
                <Headphones className="h-5 w-5 mr-2" />
                <span className="font-semibold">OPULENT TRIALS PODCAST</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Clinical Research Insights</h1>
              <p className="text-xl mb-8">
                Expert conversations on clinical trial innovation, patient recruitment, and the future of medical research
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="#episodes" 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Episodes <ChevronRight className="ml-2 h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="#subscribe" 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Episode */}
        {featuredEpisode && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div 
                className="text-center mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Episode</h2>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredEpisode.image} 
                      alt={featuredEpisode.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full mb-4">
                      {featuredEpisode.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{featuredEpisode.title}</h3>
                    <p className="text-gray-600 mb-6">{featuredEpisode.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <span className="mr-4">{featuredEpisode.date}</span>
                      <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {featuredEpisode.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <motion.button 
                        className="bg-purple-700 text-white px-5 py-2 rounded-md font-semibold flex items-center hover:bg-purple-800 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="mr-2 h-4 w-4" /> Listen Now
                      </motion.button>
                      <motion.button 
                        className="bg-gray-200 text-gray-700 px-5 py-2 rounded-md font-semibold flex items-center hover:bg-gray-300 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="mr-2 h-4 w-4" /> Download
                      </motion.button>
                      <motion.button 
                        className="bg-gray-200 text-gray-700 px-5 py-2 rounded-md font-semibold flex items-center hover:bg-gray-300 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Share2 className="mr-2 h-4 w-4" /> Share
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Episodes Section */}
        <section id="episodes" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Episodes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our collection of insightful conversations with industry experts
              </p>
            </motion.div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search episodes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-3 top-3 h-5 w-5 text-gray-400 transform rotate-90" />
                </div>
              </div>
            </div>

            {/* Episodes Grid */}
            {filteredEpisodes.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {filteredEpisodes.map((episode) => (
                  <motion.div 
                    key={episode.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
                    variants={itemFadeIn}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={episode.image} 
                        alt={episode.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full mb-3">
                        {episode.category}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{episode.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{episode.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span className="mr-4">{episode.date}</span>
                        <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {episode.duration}</span>
                      </div>
                      <div className="flex gap-2">
                        <motion.button 
                          className="bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center hover:bg-purple-800 transition"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play className="mr-1 h-3 w-3" /> Listen
                        </motion.button>
                        <motion.button 
                          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-semibold flex items-center hover:bg-gray-300 transition"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Download className="mr-1 h-3 w-3" />
                        </motion.button>
                        <motion.button 
                          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-semibold flex items-center hover:bg-gray-300 transition"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Share2 className="mr-1 h-3 w-3" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No episodes found matching your search criteria.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                  className="mt-4 text-purple-700 font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Load More Button */}
            {filteredEpisodes.length > 0 && (
              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.button 
                  className="bg-white border border-purple-700 text-purple-700 px-6 py-3 rounded-md font-semibold hover:bg-purple-50 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Load More Episodes
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Subscribe Section */}
        <section id="subscribe" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="bg-purple-50 rounded-xl p-8 md:p-12 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold mb-4">Subscribe to Our Podcast</h2>
                  <p className="text-lg mb-6">
                    Never miss an episode. Subscribe to the Opulent Trials podcast on your favorite platform.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Apple Podcasts', 'Spotify', 'Google Podcasts', 'Amazon Music', 'Stitcher', 'RSS Feed'].map((platform, index) => (
                      <motion.a 
                        key={index}
                        href="#"
                        className="bg-white py-2 px-4 rounded-md text-center shadow-sm hover:shadow-md transition"
                        whileHover={{ y: -3 }}
                      >
                        {platform}
                      </motion.a>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">Get Notified of New Episodes</h3>
                    <p className="text-gray-600 mb-4">
                      Sign up for our newsletter to receive notifications when new episodes are released.
                    </p>
                    <form>
                      <div className="mb-4">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </div>
                      <motion.button 
                        type="submit"
                        className="w-full bg-purple-700 text-white py-2 px-4 rounded-md font-semibold hover:bg-purple-800 transition"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Subscribe
                      </motion.button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Host Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Hosts</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry experts bringing you the latest insights in clinical research
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
                  name: "Dr. Sarah Johnson",
                  title: "Clinical Research Director",
                  bio: "Dr. Johnson has over 15 years of experience in clinical research and specializes in innovative trial methodologies.",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Dr. Michael Chen",
                  title: "Chief Medical Officer",
                  bio: "With a background in both academic research and pharmaceutical development, Dr. Chen brings a unique perspective to clinical trials.",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Dr. Emily Rodriguez",
                  title: "VP of Patient Engagement",
                  bio: "Dr. Rodriguez is passionate about improving the patient experience in clinical trials and increasing diversity in research.",
                  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                }
              ].map((host, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={host.image} 
                      alt={host.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{host.name}</h3>
                    <p className="text-purple-700 font-semibold mb-4">{host.title}</p>
                    <p className="text-gray-600 mb-4">{host.bio}</p>
                    <motion.a 
                      href="#" 
                      className="inline-flex items-center text-purple-700 font-semibold hover:text-purple-900"
                      whileHover={{ x: 5 }}
                    >
                      View Full Bio <ChevronRight className="ml-1 h-4 w-4" />
                    </motion.a>
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
              <h2 className="text-3xl font-bold mb-4">Have a Topic Suggestion?</h2>
              <p className="text-xl mb-8">
                We're always looking for new topics to cover on our podcast. Let us know what you'd like to hear about!
              </p>
              <motion.button 
                className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suggest a Topic
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Podcast;