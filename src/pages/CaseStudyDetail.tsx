import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, ArrowLeft, Download, Share2, 
  Calendar, Clock, ArrowRight, MessageSquare,
  Brain, CheckCircle, Microscope, Target
} from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';

// Case studies data
const caseStudies = {
  1: {
    id: 1,
    title: "Multi-Channel Recruitment Success in Alzheimer's Research",
    area: "Neurology",
    date: "April 2025",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    icon: Brain,
    challenge: "Alzheimer's trials require highly specific patient populations, often involving caregiver decision-making and complicated site-based participation. Historically, this has led to slow enrollment and high attrition rates, delaying research timelines and increasing costs.",
    approach: [
      {
        title: "AI-Powered Patient Matching",
        description: "Our proprietary technology pre-screened and identified qualified patients, streamlining enrollment and reducing screening failures."
      },
      {
        title: "Caregiver Engagement Programs",
        description: "Since caregivers play a vital role in Alzheimer's trials, we developed targeted educational campaigns to keep both patients and caregivers engaged throughout the study."
      },
      {
        title: "Community-Driven Recruitment",
        description: "By partnering with memory care clinics, advocacy organizations, and local healthcare providers, we built trust and increased awareness within high-prevalence patient populations."
      },
      {
        title: "Digital & Traditional Media Integration",
        description: "We leveraged social media, patient databases, geo-targeted ads, and direct outreach to ensure broad yet targeted recruitment."
      },
      {
        title: "Remote Monitoring & Telehealth",
        description: "Our strategy reduced patient and caregiver burden by integrating telehealth check-ins, home-based compliance tracking, and virtual site support, improving overall retention."
      }
    ],
    results: [
      {
        metric: "40% Faster Enrollment",
        detail: "Accelerated site activation and AI-driven pre-screening led to a significant reduction in recruitment timelines."
      },
      {
        metric: "92% Retention Rate",
        detail: "Caregiver support, telehealth integration, and patient engagement strategies kept participants committed to the study."
      },
      {
        metric: "35 High-Performing Sites",
        detail: "Optimized patient-site matching ensured that all locations maintained steady recruitment and retention rates."
      }
    ]
  },
  2: {
    id: 2,
    title: "Accelerating Rare Disease Trial Recruitment",
    area: "Rare Disease",
    date: "March 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    icon: Target,
    challenge: "Recruiting patients for ultra-rare diseases presents unique challenges due to small patient populations, geographic dispersion, and complex eligibility criteria. Traditional recruitment methods often fall short in reaching these specialized patient groups.",
    approach: [
      {
        title: "Global Patient Identification Network",
        description: "We developed a worldwide network of specialized centers and patient advocacy groups to identify potential participants across multiple countries."
      },
      {
        title: "Genetic Screening Program",
        description: "Implemented an innovative genetic screening program to identify eligible patients through targeted testing initiatives."
      },
      {
        title: "Patient Registry Integration",
        description: "Connected with multiple rare disease registries to identify and engage potential participants who match the study criteria."
      },
      {
        title: "Travel Support Program",
        description: "Established a comprehensive travel support program to facilitate patient participation from distant locations."
      },
      {
        title: "Virtual Site Network",
        description: "Created a network of virtual trial sites to enable remote participation where possible, reducing the burden on patients and families."
      }
    ],
    results: [
      {
        metric: "60% Faster Enrollment",
        detail: "Achieved enrollment targets significantly ahead of schedule through coordinated global recruitment efforts."
      },
      {
        metric: "95% Retention Rate",
        detail: "Comprehensive support programs and flexible participation options led to exceptional retention."
      },
      {
        metric: "50+ Global Sites",
        detail: "Successfully coordinated a large network of sites across 15 countries while maintaining consistent quality standards."
      }
    ]
  },
  3: {
    id: 3,
    title: "Global Oncology Study Success",
    area: "Oncology",
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    icon: Microscope,
    challenge: "Managing a complex immuno-oncology trial across multiple regions presents significant challenges in maintaining consistent protocols, ensuring data quality, and coordinating between diverse healthcare systems.",
    approach: [
      {
        title: "Precision Medicine Platform",
        description: "Implemented a sophisticated biomarker testing and patient matching system to identify the most suitable candidates for the trial."
      },
      {
        title: "Real-time Data Monitoring",
        description: "Deployed advanced analytics tools to monitor trial progress and data quality across all sites in real-time."
      },
      {
        title: "Site Selection Algorithm",
        description: "Used proprietary algorithms to identify and activate high-performing oncology research sites."
      },
      {
        title: "Cross-border Coordination",
        description: "Established a centralized coordination system to manage regulatory requirements and site communications across multiple countries."
      },
      {
        title: "Patient Support Framework",
        description: "Developed comprehensive support programs to assist patients with trial participation and follow-up care."
      }
    ],
    results: [
      {
        metric: "50% Faster Enrollment",
        detail: "Advanced patient identification and matching systems accelerated the enrollment process significantly."
      },
      {
        metric: "90% Retention Rate",
        detail: "Comprehensive patient support and efficient trial management led to high retention rates."
      },
      {
        metric: "75 Global Sites",
        detail: "Successfully managed a large network of oncology centers while maintaining consistent quality standards."
      }
    ]
  }
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const caseStudy = caseStudies[Number(id)];

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const Icon = caseStudy.icon;

  // Get related case studies (excluding current one)
  const relatedStudies = Object.values(caseStudies)
    .filter(study => study.id !== caseStudy.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <AccessibilityMenu />
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Link 
                to="/case-studies" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Case Studies
              </Link>
              <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full mb-6">
                <Icon className="h-5 w-5 mr-2" />
                <span className="font-semibold">{caseStudy.area.toUpperCase()}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{caseStudy.title}</h1>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{caseStudy.date}</span>
                </div>
                <div className="flex space-x-4">
                  <motion.button 
                    className="text-white/80 hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="h-5 w-5" />
                  </motion.button>
                  <motion.button 
                    className="text-white/80 hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Download className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <img 
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full rounded-lg mb-8"
                />

                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-gray-600 mb-8">{caseStudy.challenge}</p>

                  <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                  <div className="grid grid-cols-1 gap-6 mb-8">
                    {caseStudy.approach.map((strategy, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                        <p className="text-gray-600">{strategy.description}</p>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold mb-4">The Results</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="bg-green-50 p-6 rounded-lg">
                        <div className="flex items-center mb-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <div className="text-xl font-bold text-green-700">{result.metric}</div>
                        </div>
                        <p className="text-gray-600">{result.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="sticky top-24 space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Share Case Study</h3>
                    <div className="flex space-x-4">
                      <motion.button 
                        className="bg-purple-100 p-2 rounded-full text-purple-700 hover:bg-purple-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share2 className="h-5 w-5" />
                      </motion.button>
                      <motion.button 
                        className="bg-purple-100 p-2 rounded-full text-purple-700 hover:bg-purple-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Download className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="bg-purple-900 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Ready to Transform Your Clinical Trials?</h3>
                    <p className="mb-6">
                      Let us help you achieve similar results with our innovative recruitment strategies.
                    </p>
                    <div className="space-y-4">
                      <Link to="/request-proposal">
                        <motion.button 
                          className="w-full bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Request a Proposal <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.button>
                      </Link>
                      <Link to="/contact-us">
                        <motion.button 
                          className="w-full bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Contact Us <MessageSquare className="ml-2 h-4 w-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Related Case Studies</h3>
                    <div className="space-y-4">
                      {relatedStudies.map((study) => (
                        <Link key={study.id} to={`/case-studies/${study.id}`}>
                          <div className="group cursor-pointer">
                            <img 
                              src={study.image}
                              alt={study.title}
                              className="w-full h-40 object-cover rounded-lg mb-3"
                            />
                            <h4 className="font-semibold group-hover:text-purple-700 transition-colors">
                              {study.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;