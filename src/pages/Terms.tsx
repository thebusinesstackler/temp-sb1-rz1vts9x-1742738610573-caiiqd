import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight, Scale, Shield, Users, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const Terms = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: Scale,
      content: `By accessing and using the TheraNovex website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These terms may be updated from time to time. We will notify users of any material changes via email or through our website. Your continued use of our services following such notifications constitutes your acceptance of the modified terms.`
    },
    {
      id: 'services',
      title: 'Services Description',
      icon: Users,
      content: `TheraNovex provides clinical trial recruitment and management services, including but not limited to:

- Patient recruitment and screening
- Clinical trial management and coordination
- Data collection and analysis
- Site selection and management
- Regulatory compliance support

Our services are subject to availability and may be modified or discontinued at any time. We reserve the right to refuse service to anyone for any reason at any time.`
    },
    {
      id: 'user-obligations',
      title: 'User Obligations',
      icon: AlertCircle,
      content: `Users of our services agree to:

- Provide accurate and complete information
- Maintain the confidentiality of any account credentials
- Comply with all applicable laws and regulations
- Not interfere with the proper functioning of our services
- Not attempt to gain unauthorized access to our systems
- Not use our services for any unlawful purpose

Violation of these obligations may result in immediate termination of your access to our services.`
    },
    {
      id: 'privacy-security',
      title: 'Privacy and Security',
      icon: Shield,
      content: `We are committed to protecting your privacy and maintaining the security of your information. Our privacy practices are governed by our Privacy Policy, which is incorporated by reference into these Terms and Conditions.

Security measures include:
- Encryption of sensitive data
- Regular security audits
- Access controls and authentication
- Employee training and compliance
- Incident response procedures

Users are responsible for maintaining the security of their account credentials and must notify us immediately of any unauthorized access.`
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: FileText,
      content: `All content on our website and services, including but not limited to:
- Text, graphics, logos, and images
- Software and technology
- Data and databases
- Trademarks and patents
- Methodologies and processes

is the property of TheraNovex or its licensors and is protected by intellectual property laws. Users may not copy, modify, distribute, or create derivative works without our explicit permission.`
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: Scale,
      content: `TheraNovex shall not be liable for:

- Any indirect, incidental, special, or consequential damages
- Loss of profits, revenue, or data
- Service interruptions or system failures
- Actions of third parties
- Force majeure events

Our total liability for any claims arising from these terms shall not exceed the amount paid by you for our services in the preceding 12 months.`
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: AlertCircle,
      content: `We may terminate or suspend your access to our services:

- For violation of these terms
- At our sole discretion without cause
- Upon your request
- For legal or regulatory requirements

Upon termination:
- All rights granted to you will cease
- You must cease all use of our services
- Any outstanding obligations will remain in effect`
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
                <Scale className="h-5 w-5 mr-2" />
                <span className="font-semibold">TERMS & CONDITIONS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
              <p className="text-xl mb-8">
                Last updated: March 15, 2025
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="#acceptance" 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Terms <ChevronRight className="ml-2 h-4 w-4" />
                </motion.a>
                <Link to="/contact-us">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
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
                These Terms and Conditions govern your use of TheraNovex's website and services. Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
              </p>
              <p className="text-lg text-gray-600">
                For questions about these terms, please contact us at{' '}
                <a href="mailto:legal@theranovex.com" className="text-purple-700 hover:underline">
                  legal@theranovex.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div 
                  key={section.id}
                  id={section.id}
                  className="bg-white p-8 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                      <section.icon className="h-6 w-6 text-purple-700" />
                    </div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    {section.content.split('\n\n').map((paragraph, i) => (
                      <div key={i} className="mb-4">
                        {paragraph.startsWith('-') ? (
                          <ul className="list-disc pl-6 space-y-2">
                            {paragraph.split('\n').map((item, j) => (
                              <li key={j} className="text-gray-600">{item.replace('-', '').trim()}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-600">{paragraph}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.div 
              className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white rounded-xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Questions About Our Terms?</h2>
              <p className="text-xl mb-8">
                Contact our legal team for any questions about our Terms & Conditions
              </p>
              <Link to="/contact-us">
                <motion.button 
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Legal Team <ChevronRight className="ml-2 h-4 w-4" />
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

export default Terms;