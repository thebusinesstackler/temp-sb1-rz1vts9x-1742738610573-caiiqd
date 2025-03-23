import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MessageSquare, Send, Globe, 
  ArrowRight, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
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
                <MessageSquare className="h-5 w-5 mr-2" />
                <span className="font-semibold">GET IN TOUCH</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl mb-8">
                Have questions about our services or want to learn more about how we can help with your clinical trials? We'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="#contact-form" 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send a Message <ChevronRight className="ml-2 h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="#map" 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Coverage
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form below and one of our team members will get back to you as soon as possible.
                </p>
                
                {formSubmitted ? (
                  <motion.div 
                    className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form 
                    action="https://formspree.io/f/xblgogdj"
                    method="POST"
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Please select</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Patient Recruitment">Patient Recruitment</option>
                        <option value="Clinical Trial Services">Clinical Trial Services</option>
                        <option value="Partnership Opportunities">Partnership Opportunities</option>
                        <option value="Career Information">Career Information</option>
                        <option value="Media Inquiry">Media Inquiry</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Please provide any additional information that would help us understand your needs better."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        required
                        className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                        I agree to the <Link to="/privacy" className="text-purple-700 hover:underline">Privacy Policy</Link> and consent to the processing of my personal data.
                      </label>
                    </div>
                    
                    <motion.button 
                      type="submit"
                      className="bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center hover:bg-purple-800 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </motion.button>
                  </form>
                )}
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gray-50 rounded-lg p-8 h-full">
                  <h2 className="text-3xl font-bold mb-6">How Can We Help?</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">General Inquiries</h3>
                      <p className="text-gray-600 mb-4">
                        For general questions about our services, company information, or other inquiries.
                      </p>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-purple-700 mr-2" />
                        <a href="mailto:info@theranovex.com" className="text-purple-700 hover:underline">info@theranovex.com</a>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Patient Recruitment</h3>
                      <p className="text-gray-600 mb-4">
                        For questions about participating in a clinical trial or patient recruitment services.
                      </p>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-purple-700 mr-2" />
                        <a href="mailto:patients@theranovex.com" className="text-purple-700 hover:underline">patients@theranovex.com</a>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Business Development</h3>
                      <p className="text-gray-600 mb-4">
                        For partnership opportunities, collaborations, or to discuss your clinical trial needs.
                      </p>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-purple-700 mr-2" />
                        <a href="mailto:partnerships@theranovex.com" className="text-purple-700 hover:underline">partnerships@theranovex.com</a>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Media Inquiries</h3>
                      <p className="text-gray-600 mb-4">
                        For press and media related questions or interview requests.
                      </p>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-purple-700 mr-2" />
                        <a href="mailto:media@theranovex.com" className="text-purple-700 hover:underline">media@theranovex.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.div 
              className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white rounded-xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Clinical Trials?</h2>
              <p className="text-xl mb-8">
                Contact us today to discuss how TheraNovex can help accelerate your clinical research.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="#contact-form" 
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us Now <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
                <Link to="/request-proposal">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request a Proposal
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

export default ContactUs;