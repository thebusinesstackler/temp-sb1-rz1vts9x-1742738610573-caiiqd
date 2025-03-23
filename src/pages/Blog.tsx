import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, ChevronRight, Calendar, Clock, 
  User, Tag, BookOpen, ArrowRight, Share2, Bookmark,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories
  const categories = [
    'All',
    'Clinical Trials',
    'Patient Recruitment',
    'Research Innovation',
    'Industry Insights',
    'Best Practices'
  ];

  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Decentralized Clinical Trials: 2025 and Beyond",
      excerpt: "Explore how decentralized trials are revolutionizing clinical research and improving patient access to innovative treatments.",
      content: "Full article content here...",
      author: {
        name: "Dr. Sarah Johnson",
        role: "Clinical Research Director",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      date: "May 15, 2025",
      readTime: "8 min read",
      category: "Clinical Trials",
      tags: ["Decentralized Trials", "Innovation", "Patient Access"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Enhancing Diversity in Clinical Research: A Comprehensive Guide",
      excerpt: "Learn effective strategies for improving diversity and inclusion in clinical trials to ensure better representation.",
      content: "Full article content here...",
      author: {
        name: "Michael Chen",
        role: "Patient Recruitment Specialist",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      date: "May 10, 2025",
      readTime: "6 min read",
      category: "Patient Recruitment",
      tags: ["Diversity", "Inclusion", "Patient Engagement"],
      image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "AI and Machine Learning in Clinical Trial Design",
      excerpt: "Discover how artificial intelligence is transforming protocol design and patient matching in clinical research.",
      content: "Full article content here...",
      author: {
        name: "Dr. Emily Rodriguez",
        role: "Research Innovation Lead",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      date: "May 5, 2025",
      readTime: "10 min read",
      category: "Research Innovation",
      tags: ["AI", "Machine Learning", "Protocol Design"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Patient-Centric Trial Design: Best Practices for 2025",
      excerpt: "A comprehensive guide to designing clinical trials that prioritize patient needs and experiences.",
      content: "Full article content here...",
      author: {
        name: "Lisa Thompson",
        role: "Patient Experience Director",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      date: "April 28, 2025",
      readTime: "7 min read",
      category: "Best Practices",
      tags: ["Patient-Centric", "Trial Design", "Best Practices"],
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Regulatory Changes in Clinical Research: 2025 Update",
      excerpt: "Stay up-to-date with the latest regulatory changes affecting clinical trials and research compliance.",
      content: "Full article content here...",
      author: {
        name: "Robert Wilson",
        role: "Regulatory Affairs Expert",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      date: "April 20, 2025",
      readTime: "9 min read",
      category: "Industry Insights",
      tags: ["Regulatory", "Compliance", "Updates"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Digital Patient Recruitment Strategies That Work",
      excerpt: "Effective digital strategies for finding and engaging potential clinical trial participants.",
      content: "Full article content here...",
      author: {
        name: "Jennifer Lee",
        role: "Digital Marketing Manager",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      date: "April 15, 2025",
      readTime: "6 min read",
      category: "Patient Recruitment",
      tags: ["Digital Marketing", "Recruitment", "Strategy"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Remote Monitoring in Clinical Trials: Tools and Techniques",
      excerpt: "A comprehensive overview of remote monitoring solutions for modern clinical trials.",
      content: "Full article content here...",
      author: {
        name: "David Chang",
        role: "Clinical Operations Manager",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      date: "April 10, 2025",
      readTime: "8 min read",
      category: "Research Innovation",
      tags: ["Remote Monitoring", "Technology", "Operations"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Building Better Site Relationships in Clinical Research",
      excerpt: "Learn how to develop and maintain strong relationships with research sites for successful trials.",
      content: "Full article content here...",
      author: {
        name: "Amanda Martinez",
        role: "Site Relations Director",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      date: "April 5, 2025",
      readTime: "7 min read",
      category: "Best Practices",
      tags: ["Site Management", "Relationships", "Communication"],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Filter blog posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

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
                <BookOpen className="h-5 w-5 mr-2" />
                <span className="font-semibold">CLINICAL RESEARCH INSIGHTS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Articles & Insights</h1>
              <p className="text-xl mb-8">
                Expert perspectives on clinical research trends, best practices, and innovation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
              <motion.div 
                className="bg-gray-50 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <img 
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="text-sm text-purple-700 font-semibold mb-4">FEATURED ARTICLE</div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center mb-6">
                      <img 
                        src={featuredPost.author.image}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold">
                          {featuredPost.author.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {featuredPost.author.role}
                        </div>
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${featuredPost.id}`}
                      className="text-purple-700 font-semibold flex items-center hover:text-purple-900"
                    >
                      Read Article <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Search and Filters */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
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
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <motion.article 
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-purple-700 font-semibold">{post.category}</span>
                        <div className="flex space-x-2">
                          <motion.button
                            className="p-1 text-gray-400 hover:text-purple-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Bookmark className="h-4 w-4" />
                          </motion.button>
                          <motion.button
                            className="p-1 text-gray-400 hover:text-purple-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Share2 className="h-4 w-4" />
                          </motion.button>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-gray-500">{post.date}</div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img 
                            src={post.author.image}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover mr-3"
                          />
                          <div>
                            <div className="text-sm font-semibold">{post.author.name}</div>
                            <div className="text-xs text-gray-500">{post.author.role}</div>
                          </div>
                        </div>
                        <motion.div 
                          className="text-purple-700 hover:text-purple-900"
                          whileHover={{ x: 5 }}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.div 
              className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white rounded-xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8">
                Subscribe to our newsletter for the latest insights in clinical research
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-md text-gray-900"
                  />
                  <motion.button 
                    className="bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center hover:bg-purple-800"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;