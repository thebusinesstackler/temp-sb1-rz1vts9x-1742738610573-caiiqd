import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie, ChevronRight, Shield, Lock, Settings, Check, X, Info, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const Cookies = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cookieTypes = [
    {
      id: 'necessary',
      title: 'Necessary Cookies',
      description: 'These cookies are essential for the website to function properly and cannot be disabled.',
      required: true
    },
    {
      id: 'analytics',
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      required: false
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant advertisements.',
      required: false
    },
    {
      id: 'preferences',
      title: 'Preference Cookies',
      description: 'Enable the website to remember your choices and customize your experience.',
      required: false
    }
  ];

  const handlePreferenceChange = (cookieType: string) => {
    if (cookieType === 'necessary') return; // Cannot disable necessary cookies
    setCookiePreferences(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType as keyof typeof prev]
    }));
  };

  const savePreferences = () => {
    // In a real implementation, this would save to localStorage/cookies
    console.log('Saving preferences:', cookiePreferences);
    // Show success message or redirect
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
                <Cookie className="h-5 w-5 mr-2" />
                <span className="font-semibold">COOKIES NOTICE</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookies Notice & Consent</h1>
              <p className="text-xl mb-8">
                Last updated: March 15, 2025
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="#cookie-settings" 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Manage Preferences <ChevronRight className="ml-2 h-4 w-4" />
                </motion.a>
                <Link to="/privacy">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Privacy Policy
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                This Cookie Notice explains how TheraNovex uses cookies and similar tracking technologies when you visit our website. We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By using our website, you consent to our use of cookies in accordance with this Cookie Notice. You can manage your cookie preferences at any time using our cookie settings panel.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <div className="flex items-start">
                  <Info className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">What are cookies?</h3>
                    <p className="text-blue-800">
                      Cookies are small text files that websites place on your device to store information about your browsing preferences, login status, and other data that helps improve your experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Settings Section */}
        <section id="cookie-settings" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">Cookie Preferences</h2>
              <div className="space-y-6">
                {cookieTypes.map((cookieType) => (
                  <div 
                    key={cookieType.id}
                    className="border border-gray-200 rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{cookieType.title}</h3>
                        <p className="text-gray-600">{cookieType.description}</p>
                      </div>
                      <div className="ml-6">
                        <button
                          onClick={() => handlePreferenceChange(cookieType.id)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                            cookiePreferences[cookieType.id as keyof typeof cookiePreferences]
                              ? 'bg-purple-600'
                              : 'bg-gray-200'
                          } ${cookieType.required ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
                          disabled={cookieType.required}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              cookiePreferences[cookieType.id as keyof typeof cookiePreferences]
                                ? 'translate-x-6'
                                : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                    {cookieType.required && (
                      <div className="mt-2 text-sm text-gray-500 flex items-center">
                        <Lock className="h-4 w-4 mr-1" />
                        Required for website functionality
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <motion.button
                  onClick={savePreferences}
                  className="bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center hover:bg-purple-800 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Save Preferences <Check className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">How We Use Cookies</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Ensure proper website functionality</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Remember your preferences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Analyze site usage and performance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Provide personalized content</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Your Rights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Manage cookie preferences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Withdraw consent at any time</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Clear cookies from your browser</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Contact us with questions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.div 
              className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white rounded-xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Questions About Cookies?</h2>
              <p className="text-xl mb-8">
                Contact our privacy team for any questions or concerns about our cookie practices
              </p>
              <Link to="/contact-us">
                <motion.button 
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Privacy Team <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;