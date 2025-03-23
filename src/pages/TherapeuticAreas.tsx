import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Microscope, Brain, Heart, Shield, Activity, Dna,
  ChevronRight, ArrowRight, Users, Clock, Award, Star
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const TherapeuticAreas = () => {
  const navigate = useNavigate();
  const areasRef = useRef<HTMLDivElement>(null);

  const scrollToAreas = () => {
    areasRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
      description: "Comprehensive expertise in solid tumors, hematologic malignancies, and innovative cancer therapies.",
      path: "/therapeutic-areas/oncology",
      stats: {
        trials: "250+",
        patients: "15,000+",
        publications: "85+"
      }
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Specialized experience in neurodegenerative diseases, CNS disorders, and rare neurological conditions.",
      path: "/therapeutic-areas/neurology",
      stats: {
        trials: "180+",
        patients: "12,000+",
        publications: "60+"
      }
    },
    {
      icon: Heart,
      title: "Cardiovascular",
      description: "Expert management of trials in heart failure, coronary artery disease, and innovative cardiac therapies.",
      path: "/therapeutic-areas/cardiovascular",
      stats: {
        trials: "200+",
        patients: "18,000+",
        publications: "75+"
      }
    },
    {
      icon: Shield,
      title: "Immunology",
      description: "Leading expertise in autoimmune conditions, inflammation, and novel immunotherapy approaches.",
      path: "/therapeutic-areas/immunology",
      stats: {
        trials: "160+",
        patients: "11,000+",
        publications: "55+"
      }
    },
    {
      icon: Activity,
      title: "Metabolic Disorders",
      description: "Comprehensive experience in diabetes, obesity, and rare metabolic conditions.",
      path: "/therapeutic-areas/metabolic-disorders",
      stats: {
        trials: "150+",
        patients: "10,000+",
        publications: "50+"
      }
    },
    {
      icon: Dna,
      title: "Rare Diseases",
      description: "Specialized expertise in ultra-rare conditions, genetic disorders, and orphan drug development.",
      path: "/therapeutic-areas/rare-diseases",
      stats: {
        trials: "120+",
        patients: "5,000+",
        publications: "45+"
      }
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Therapeutic Areas</h1>
              <p className="text-xl mb-8">
                Comprehensive expertise across multiple therapeutic areas, delivering exceptional clinical trial results
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  onClick={scrollToAreas}
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Areas <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button 
                  onClick={() => navigate('/contact-us')}
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
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
                { number: "1,000+", label: "Clinical Trials", icon: Users },
                { number: "50,000+", label: "Patients Enrolled", icon: Clock },
                { number: "15+", label: "Years Experience", icon: Award },
                { number: "95%", label: "Trial Success Rate", icon: Star }
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

        {/* Therapeutic Areas Grid */}
        <section ref={areasRef} className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Areas of Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep therapeutic expertise delivering exceptional results across multiple medical specialties
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
                      <div className="text-xl font-bold text-purple-700">{area.stats.trials}</div>
                      <div className="text-sm text-gray-500">Trials</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-700">{area.stats.patients}</div>
                      <div className="text-sm text-gray-500">Patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-purple-700">{area.stats.publications}</div>
                      <div className="text-sm text-gray-500">Publications</div>
                    </div>
                  </div>
                  <Link to={area.path}>
                    <motion.button 
                      className="mt-6 w-full bg-purple-700 text-white px-4 py-2 rounded-md font-semibold flex items-center justify-center hover:bg-purple-800"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </Link>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Clinical Trial?</h2>
              <p className="text-xl mb-8">
                Let our therapeutic expertise guide your next clinical trial to success
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  onClick={() => navigate('/request-proposal')}
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Proposal <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button 
                  onClick={() => navigate('/contact-us')}
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

export default TherapeuticAreas;