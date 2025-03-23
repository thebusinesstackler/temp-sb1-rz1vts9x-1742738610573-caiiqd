import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronRight, FileText, Lock, Eye, Database, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

const Privacy = () => {
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
      id: 'information-collection',
      title: 'Information Collection',
      icon: Database,
      content: `We collect information that you provide directly to us, including:

- Personal information (name, email address, phone number)
- Professional information (company name, job title)
- Health information provided for clinical trial participation
- Communication preferences and feedback

We also automatically collect certain information when you visit our website, including:

- Browser type and version
- Operating system
- IP address
- Pages visited and time spent
- Referral source`
    },
    {
      id: 'information-use',
      title: 'Use of Information',
      icon: Eye,
      content: `We use the collected information for:

- Providing and improving our services
- Communicating about clinical trials and opportunities
- Processing and managing clinical trial applications
- Analyzing and enhancing website performance
- Complying with legal obligations
- Protecting our rights and preventing fraud

Your information helps us maintain and improve the quality of our clinical research services.`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: Lock,
      content: `We may share your information with:

- Clinical trial sponsors and research partners
- Service providers and contractors
- Regulatory authorities and ethics committees
- Legal and compliance teams

We require all third parties to respect the security of your data and treat it in accordance with applicable laws.`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Shield,
      content: `We implement appropriate security measures to protect your information:

- Encryption of data in transit and at rest
- Regular security assessments and updates
- Access controls and authentication
- Employee training on data protection
- Incident response procedures

We regularly review and update our security practices to maintain data protection.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: Key,
      content: `You have the right to:

- Access your personal information
- Correct inaccurate data
- Request deletion of your data
- Object to processing of your data
- Withdraw consent at any time
- Request data portability
- Lodge a complaint with supervisory authorities

Contact our privacy team to exercise these rights.`
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
                <Shield className="h-5 w-5 mr-2" />
                <span className="font-semibold">PRIVACY POLICY</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl mb-8">
                Last updated: March 15, 2025
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="#information-collection" 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
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
                At TheraNovex, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or participate in our clinical trials.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
              </p>
              <p className="text-lg text-gray-600">
                For questions about our privacy practices or to exercise your privacy rights, please contact us at{' '}
                <a href="mailto:privacy@theranovex.com" className="text-purple-700 hover:underline">
                  privacy@theranovex.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Policy Sections */}
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
                              <li key={j}>{item.replace('-', '').trim()}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{paragraph}</p>
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
              <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
              <p className="text-xl mb-8">
                Contact our privacy team for any questions or concerns about your data
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

export default Privacy;