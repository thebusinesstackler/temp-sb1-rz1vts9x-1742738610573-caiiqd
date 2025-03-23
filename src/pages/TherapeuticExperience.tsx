import React from 'react';
import { motion } from 'framer-motion';
import { 
  Microscope, Brain, Dna, Heart, Pill, Activity, ChevronRight, 
  Users, Clock, Award, FileText, Star, BarChart, Globe, Search,
  Filter, CheckCircle, ArrowRight
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const TherapeuticExperience = () => {
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

  const therapeuticAreas = [
    {
      icon: Microscope,
      title: "Oncology",
      description: "Extensive experience in solid tumors and hematologic malignancies, including immunotherapy and targeted therapies.",
      stats: {
        trials: 250,
        patients: "15,000+",
        sites: 450
      }
    },
    {
      icon: Brain,
      title: "CNS",
      description: "Specialized in neurodegenerative diseases, psychiatric disorders, and rare neurological conditions.",
      stats: {
        trials: 180,
        patients: "12,000+",
        sites: 320
      }
    },
    {
      icon: Dna,
      title: "Rare Disease",
      description: "Expertise in patient identification and engagement for ultra-rare conditions and genetic disorders.",
      stats: {
        trials: 120,
        patients: "5,000+",
        sites: 200
      }
    },
    {
      icon: Heart,
      title: "Cardiovascular",
      description: "Comprehensive experience in heart failure, hypertension, and innovative cardiac therapies.",
      stats: {
        trials: 200,
        patients: "18,000+",
        sites: 380
      }
    },
    {
      icon: Pill,
      title: "Metabolic Disorders",
      description: "Focused on diabetes, obesity, and rare metabolic conditions with complex patient needs.",
      stats: {
        trials: 150,
        patients: "10,000+",
        sites: 280
      }
    },
    {
      icon: Activity,
      title: "Immunology",
      description: "Specialized in autoimmune conditions, inflammation, and novel immunotherapy approaches.",
      stats: {
        trials: 160,
        patients: "11,000+",
        sites: 300
      }
    }
  ];

  const caseStudies = [
    {
      title: "Accelerating Rare Disease Trial Recruitment",
      area: "Rare Disease",
      impact: "Reduced enrollment timeline by 60%",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Innovative CNS Trial Design",
      area: "Neurology",
      impact: "Increased patient retention by 40%",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Global Oncology Study Success",
      area: "Oncology",
      impact: "Achieved diversity goals across 15 countries",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
                <Microscope className="h-5 w-5 mr-2" />
                <span className="font-semibold">THERAPEUTIC EXPERTISE</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Deep Therapeutic Experience</h1>
              <p className="text-xl mb-8">
                Leveraging decades of experience across multiple therapeutic areas to accelerate your clinical research
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Areas <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Studies
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
                { number: "1000+", label: "Clinical Trials", icon: FileText },
                { number: "50,000+", label: "Patients Enrolled", icon: Users },
                { number: "15+", label: "Years Experience", icon: Clock },
                { number: "95%", label: "Trial Success Rate", icon: Award }
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

        {/* Therapeutic Areas Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Therapeutic Areas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expertise spans across multiple therapeutic areas, ensuring successful trial execution in even the most complex indications
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {therapeuticAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="bg-purple-100 rounded-full p-3 inline-flex mb-4">
                    <area.icon className="h-6 w-6 text-purple-700" />
                  </div>
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

        {/* Case Studies Section */}
        <section className="py-16 bg-white">
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
                Real results from our therapeutic expertise in action
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-purple-700 font-semibold mb-2">{study.area}</div>
                    <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                    <div className="flex items-center text-green-600">
                      <BarChart className="h-5 w-5 mr-2" />
                      {study.impact}
                    </div>
                    <motion.button 
                      className="mt-4 text-purple-700 font-semibold flex items-center hover:text-purple-900"
                      whileHover={{ x: 5 }}
                    >
                      Read Case Study <ChevronRight className="ml-1 h-4 w-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Highlights */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our therapeutic expertise delivers exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Therapeutic Focus",
                  description: "Deep understanding of disease biology and patient needs across multiple therapeutic areas"
                },
                {
                  title: "Global Reach",
                  description: "Access to diverse patient populations and research sites worldwide"
                },
                {
                  title: "Scientific Excellence",
                  description: "Industry-leading expertise in protocol design and study execution"
                },
                {
                  title: "Patient-Centric Approach",
                  description: "Innovative strategies to enhance patient engagement and retention"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <Star className="h-8 w-8 text-purple-700 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Clinical Research?</h2>
              <p className="text-xl mb-8">
                Let our therapeutic expertise guide your next clinical trial to success
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Proposal <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
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

export default TherapeuticExperience;