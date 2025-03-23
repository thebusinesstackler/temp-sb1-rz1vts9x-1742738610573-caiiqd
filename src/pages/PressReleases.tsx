import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, ChevronRight, Share2, Download,
  Calendar, Clock, ArrowRight, MessageSquare,
  Building, Brain, Globe, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon
} from 'react-share';

const PressReleases = () => {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedPressRelease, setSelectedPressRelease] = useState<null | number>(null);
  const pressReleaseRefs = useRef<{ [key: number]: React.RefObject<HTMLDivElement> }>({});

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const pressReleases = [
    {
      id: 1,
      title: "TheraNovex Acquires RecruitMed to Enhance Patient Recruitment Capabilities",
      date: "March 15, 2025",
      category: "Corporate News",
      excerpt: "Strategic acquisition strengthens TheraNovex's position in clinical trial recruitment technology and expands global reach.",
      content: `TheraNovex, a leading innovator in clinical trial solutions, today announced the acquisition of RecruitMed, a pioneering patient recruitment technology company. This strategic move significantly enhances TheraNovex's capabilities in patient recruitment and engagement for clinical trials.

The acquisition, valued at $85 million, brings together RecruitMed's advanced AI-powered patient matching technology with TheraNovex's comprehensive clinical trial management platform. This combination will create a more powerful and efficient solution for clinical trial recruitment and management.

"This acquisition represents a major step forward in our mission to transform clinical trial recruitment," said the Chief Executive Officer of TheraNovex. "RecruitMed's innovative technology and experienced team will help us accelerate patient enrollment and improve trial success rates for our clients."

Key highlights of the acquisition:
- Integration of RecruitMed's AI-powered patient matching platform
- Expansion of global site network capabilities
- Enhanced data analytics and patient engagement tools
- Improved trial accessibility for diverse patient populations

The combined company will continue to operate under the TheraNovex brand, with RecruitMed's team joining TheraNovex's growing organization.`,
      icon: Building
    },
    {
      id: 2,
      title: "TheraNovex Launches Revolutionary AI Tool for Clinical Research Sites",
      date: "March 10, 2025",
      category: "Product Launch",
      excerpt: "New AI-powered platform streamlines patient screening and improves trial matching efficiency for research sites.",
      content: `TheraNovex today announced the launch of its innovative AI-powered tool designed to revolutionize how clinical research sites identify and screen potential trial participants. The new platform, TheraNovex AI™, leverages advanced machine learning algorithms to streamline the patient screening process and improve trial matching accuracy.

The platform features:
- Real-time patient eligibility assessment
- Automated protocol matching
- Predictive analytics for enrollment success
- Integration with existing EMR systems
- Comprehensive compliance monitoring

"TheraNovex AI™ represents a significant advancement in clinical trial technology," said the Head of Product Development. "Our platform reduces the administrative burden on research sites while improving their ability to identify and enroll qualified participants."

Early adopters report:
- 60% reduction in screening time
- 45% improvement in enrollment rates
- 85% accuracy in patient-trial matching

The platform is now available to research sites worldwide, with comprehensive training and support provided by TheraNovex's expert team.`,
      icon: Brain
    },
    {
      id: 3,
      title: "TheraNovex Launches Global Site Network for Enhanced Trial Access",
      date: "March 1, 2025",
      category: "Network Expansion",
      excerpt: "New global network connects over 500 research sites across 50 countries to accelerate clinical trial recruitment.",
      content: `TheraNovex is proud to announce the launch of its Global Site Network, connecting over 500 research sites across 50 countries to create a more efficient and accessible clinical trial ecosystem. This innovative network will significantly improve trial access for patients worldwide while streamlining site selection and activation for sponsors.

The TheraNovex Global Site Network features:
- Standardized operational procedures across all sites
- Centralized quality management system
- Rapid site activation capabilities
- Real-time performance monitoring
- Cross-border collaboration tools

"Our Global Site Network represents a major step forward in making clinical trials more accessible to patients worldwide," said the VP of Clinical Operations. "By connecting research sites across the globe, we're creating a more efficient and effective clinical trial ecosystem."

Network benefits include:
- 40% faster site activation
- 50% reduction in administrative overhead
- Improved patient diversity in clinical trials
- Enhanced data quality and consistency

The network is now fully operational and accepting new site partners and trial sponsors.`,
      icon: Globe
    }
  ];

  // Initialize refs for each press release
  React.useEffect(() => {
    pressReleases.forEach(release => {
      pressReleaseRefs.current[release.id] = React.createRef();
    });
  }, []);

  const downloadPDF = async (releaseId: number) => {
    const element = pressReleaseRefs.current[releaseId].current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false
    });

    const pdf = new jsPDF({
      format: 'a4',
      unit: 'px'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`theranovex-press-release-${releaseId}.pdf`);
  };

  const openShareModal = (releaseId: number) => {
    setSelectedPressRelease(releaseId);
    setShareModalOpen(true);
  };

  const ShareModal = ({ releaseId }: { releaseId: number }) => {
    const release = pressReleases.find(r => r.id === releaseId);
    if (!release) return null;

    const shareUrl = `${window.location.origin}/press-releases/${releaseId}`;
    const shareTitle = release.title;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div 
          className="bg-white rounded-lg p-6 max-w-md w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Share Press Release</h3>
            <button 
              onClick={() => setShareModalOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            <FacebookShareButton url={shareUrl} quote={shareTitle} className="w-full">
              <div className="flex flex-col items-center">
                <FacebookIcon size={48} round />
                <span className="text-sm mt-2">Facebook</span>
              </div>
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} title={shareTitle} className="w-full">
              <div className="flex flex-col items-center">
                <TwitterIcon size={48} round />
                <span className="text-sm mt-2">Twitter</span>
              </div>
            </TwitterShareButton>

            <LinkedinShareButton url={shareUrl} title={shareTitle} className="w-full">
              <div className="flex flex-col items-center">
                <LinkedinIcon size={48} round />
                <span className="text-sm mt-2">LinkedIn</span>
              </div>
            </LinkedinShareButton>

            <EmailShareButton url={shareUrl} subject={shareTitle} className="w-full">
              <div className="flex flex-col items-center">
                <EmailIcon size={48} round />
                <span className="text-sm mt-2">Email</span>
              </div>
            </EmailShareButton>
          </div>
        </motion.div>
      </div>
    );
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
                <FileText className="h-5 w-5 mr-2" />
                <span className="font-semibold">PRESS RELEASES</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News</h1>
              <p className="text-xl mb-8">
                Stay updated with the latest announcements and developments from TheraNovex
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                  href="#latest-news" 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Latest News <ChevronRight className="ml-2 h-4 w-4" />
                </motion.a>
                <Link to="/contact-us">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Media Contact
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section id="latest-news" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="grid grid-cols-1 gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              {pressReleases.map((release) => (
                <motion.div 
                  key={release.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                  variants={fadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="p-8">
                    <div ref={pressReleaseRefs.current[release.id]}>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <div className="bg-purple-100 rounded-full p-2 mr-3">
                            <release.icon className="h-5 w-5 text-purple-700" />
                          </div>
                          <span className="text-sm text-purple-700 font-semibold">{release.category}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Calendar className="h-4 w-4 mr-2" />
                          {release.date}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">{release.title}</h2>
                      <p className="text-gray-600 mb-6">{release.excerpt}</p>
                      <div className="prose prose-lg max-w-none mb-6">
                        {release.content.split('\n\n').map((paragraph, i) => (
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
                    </div>
                    <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                      <div className="flex space-x-4">
                        <motion.button 
                          onClick={() => openShareModal(release.id)}
                          className="text-gray-500 hover:text-purple-700 flex items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          Share <Share2 className="ml-1 h-4 w-4" />
                        </motion.button>
                        <motion.button 
                          onClick={() => downloadPDF(release.id)}
                          className="text-gray-500 hover:text-purple-700 flex items-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          Download PDF <Download className="ml-1 h-4 w-4" />
                        </motion.button>
                      </div>
                      <Link to="/contact-us">
                        <motion.button 
                          className="text-purple-700 font-semibold flex items-center hover:text-purple-900"
                          whileHover={{ x: 5 }}
                        >
                          Media Contact <MessageSquare className="ml-2 h-4 w-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8">
                Subscribe to our newsletter for the latest news and updates
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe Now <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <Link to="/contact-us">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us <MessageSquare className="ml-2 h-4 w-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {shareModalOpen && selectedPressRelease && (
        <ShareModal releaseId={selectedPressRelease} />
      )}

      <Footer />
    </div>
  );
};

export default PressReleases;