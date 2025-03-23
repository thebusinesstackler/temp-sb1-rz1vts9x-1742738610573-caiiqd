import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck, ChevronRight, Users, ClipboardCheck, MessageSquare, 
  Database, Calculator, GraduationCap, Search, Calendar, Bell,
  FileText, Shield, DollarSign, Award, CheckCircle, ListChecks,
  Mail, BarChart, FileSpreadsheet, Building, Sparkles, Megaphone,
  Zap, Star, PenTool, Layout, Phone, HelpCircle, Target, ThumbsUp,
  Image, Send, Users2, MessageCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';
import EligibilityScreener from '../components/EligibilityScreener';
import DataAnonymizer from '../components/DataAnonymizer';
import IRBChecklist from '../components/IRBChecklist';
import BudgetPlanner from '../components/BudgetPlanner';
import FundingFinder from '../components/FundingFinder';
import GCPQuiz from '../components/GCPQuiz';
import TrainingTracker from '../components/TrainingTracker';
import ConsentBuilder from '../components/ConsentBuilder';
import ToolAccessPopup from '../components/ToolAccessPopup';

const PartnerPortal = () => {
  const [showToolAccessPopup, setShowToolAccessPopup] = useState(false);
  const [showEligibilityScreener, setShowEligibilityScreener] = useState(false);
  const [showDataAnonymizer, setShowDataAnonymizer] = useState(false);
  const [showIRBChecklist, setShowIRBChecklist] = useState(false);
  const [showBudgetPlanner, setShowBudgetPlanner] = useState(false);
  const [showFundingFinder, setShowFundingFinder] = useState(false);
  const [showGCPQuiz, setShowGCPQuiz] = useState(false);
  const [showTrainingTracker, setShowTrainingTracker] = useState(false);
  const [showConsentBuilder, setShowConsentBuilder] = useState(false);

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

  const handleToolClick = (action?: () => void) => {
    setShowToolAccessPopup(true);
  };

  const aiTools = [
    {
      name: "AI Ad Copy Generator",
      description: "Generates Facebook, Google, and Instagram ad headlines + descriptions based on study protocol.",
      value: "Saves hours writing ads, ensures compliance, improves recruitment ROI.",
      icon: PenTool
    },
    {
      name: "Patient Persona Builder",
      description: "Analyzes past recruitment data to generate ideal participant personas (age, habits, motivations).",
      value: "Helps craft better messaging and more targeted outreach campaigns.",
      icon: Users2
    },
    {
      name: "Outreach Content Calendar Generator",
      description: "Auto-generates a 4-week social media + email calendar with captions, images, and hashtags.",
      value: "Keeps sites consistent with outreach and saves time.",
      icon: Calendar
    },
    {
      name: "Study Microsite Generator",
      description: "Builds a branded, mobile-friendly landing page in minutes with study info + lead form.",
      value: "No need for dev help — get a study page live same-day.",
      icon: Layout
    },
    {
      name: "Email Nurture Sequence Builder",
      description: "Writes a 3–5 email follow-up sequence to re-engage partially screened participants.",
      value: "Increases conversion rates and keeps leads warm.",
      icon: Mail
    },
    {
      name: "Community Flyer AI Designer",
      description: "Upload study info and auto-generate a printable flyer with imagery, QR codes, and compliance-checked copy.",
      value: "Helps with local clinic and community outreach.",
      icon: Image
    },
    {
      name: "Phone Script Writer",
      description: "Generates IRB-compliant phone screening scripts tailored to the study and patient type.",
      value: "Makes phone screening easier and consistent.",
      icon: Phone
    },
    {
      name: "AI FAQ Generator",
      description: 'Creates a "Patient FAQ" page based on the study protocol and inclusion/exclusion criteria.',
      value: "Improves patient trust and decreases coordinator back-and-forth.",
      icon: HelpCircle
    },
    {
      name: "AI Prescreener Optimization Advisor",
      description: "Audits your screener questions and suggests which are causing drop-offs — with copy rewrites.",
      value: "Boosts screener completion rates.",
      icon: Target
    },
    {
      name: "Automated Testimonial Collector",
      description: "Sends patients a short survey + asks for feedback or quotes; auto-formats into testimonials for site use.",
      value: "Builds social proof and improves marketing.",
      icon: ThumbsUp
    },
    {
      name: "Ad Creative Scorer",
      description: "Upload your flyer, video, or social ad – get a score and AI suggestions to improve click-through.",
      value: "Improves performance and reduces ad fatigue.",
      icon: Star
    },
    {
      name: "Patient Journey Email Customizer",
      description: "Creates tailored email content for each visit stage (pre-visit, reminder, post-visit thank you).",
      value: "Automates communication and boosts retention.",
      icon: Send
    },
    {
      name: "Community Partner Outreach Email Generator",
      description: "Writes partnership pitches to local clinics, churches, gyms, or influencers to co-promote a study.",
      value: "Grows site reach without extra manual effort.",
      icon: Megaphone
    },
    {
      name: "AI Review Responder",
      description: "Auto-generates professional, HIPAA-safe responses to Google or social media reviews.",
      value: "Helps maintain reputation online.",
      icon: MessageCircle
    }
  ];

  const toolCategories = [
    {
      title: "Recruitment & Outreach Tools",
      icon: Users,
      tools: [
        {
          name: "Eligibility Screener Widget",
          description: "A simple online tool that lets potential participants check if they qualify for a study.",
          icon: CheckCircle,
          action: () => setShowEligibilityScreener(true)
        },
        {
          name: "Automated Referral Tracker",
          description: "A tool for tracking and managing referrals from clinics, social media, or outreach campaigns.",
          icon: ListChecks
        },
        {
          name: "Study Participant Cost Estimator",
          description: "A calculator that helps patients estimate travel, time, and other costs related to participating.",
          icon: Calculator
        }
      ]
    },
    {
      title: "Study Management Tools",
      icon: ClipboardCheck,
      tools: [
        {
          name: "Visit Schedule Generator",
          description: "A tool that helps sites create and share visit schedules with patients based on study protocols.",
          icon: Calendar
        },
        {
          name: "Regulatory Document Checklist",
          description: "A digital checklist for ensuring compliance with FDA and IRB requirements.",
          icon: FileCheck
        },
        {
          name: "Protocol Feasibility Calculator",
          description: "A tool that helps research sites assess their ability to conduct a given study.",
          icon: Calculator
        }
      ]
    },
    {
      title: "Communication & Engagement Tools",
      icon: MessageSquare,
      tools: [
        {
          name: "Patient Retention Reminder System",
          description: "A simple tool that sends automated appointment reminders via SMS or email.",
          icon: Bell
        },
        {
          name: "Study Updates Newsletter Generator",
          description: "A tool that generates study progress updates for stakeholders and participants.",
          icon: Mail
        },
        {
          name: "Participant Satisfaction Survey Builder",
          description: "A customizable survey template to collect feedback from study participants.",
          icon: FileText
        }
      ]
    },
    {
      title: "Data & Compliance Tools",
      icon: Database,
      tools: [
        {
          name: "Adverse Event Reporting Form Generator",
          description: "A template-based tool that helps research sites quickly document and report adverse events.",
          icon: FileText
        },
        {
          name: "De-Identified Data Anonymizer",
          description: "A tool that helps clinical sites remove identifiable patient data for secure sharing.",
          icon: Shield,
          action: () => setShowDataAnonymizer(true)
        },
        {
          name: "IRB Submission Checklist & Tracker",
          description: "A digital checklist for ensuring all required documents are submitted for IRB approval.",
          icon: ListChecks,
          action: () => setShowIRBChecklist(true)
        }
      ]
    },
    {
      title: "Financial & Budgeting Tools",
      icon: DollarSign,
      tools: [
        {
          name: "Study Budget Planner",
          description: "A calculator to help research sites estimate study costs and participant compensation.",
          icon: FileSpreadsheet,
          action: () => setShowBudgetPlanner(true)
        },
        {
          name: "Grant & Funding Opportunity Finder",
          description: "A simple database or search tool that helps research sites find relevant funding sources.",
          icon: Search,
          action: () => setShowFundingFinder(true)
        }
      ]
    },
    {
      title: "Training & Education Tools",
      icon: GraduationCap,
      tools: [
        {
          name: "GCP Quiz & Certification",
          description: "A free online quiz that provides a certificate for staff who complete it.",
          icon: Award,
          action: () => setShowGCPQuiz(true)
        },
        {
          name: "Site Training Tracker",
          description: "A tool for tracking staff training certifications and expiration dates.",
          icon: BarChart,
          action: () => setShowTrainingTracker(true)
        },
        {
          name: "Informed Consent Builder",
          description: "A guided tool that helps sites draft clear, patient-friendly informed consent documents.",
          icon: FileText,
          action: () => setShowConsentBuilder(true)
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <AccessibilityMenu />
      <Header />
      
      <main id="main-content" className="pt-20">
        <section className="bg-gradient-to-r from-[#1a365d] to-[#2d4a8a] text-white py-16">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full mb-6">
                <Building className="h-5 w-5 mr-2" />
                <span className="font-semibold">PARTNER PORTAL</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Clinical Research Tools & Resources</h1>
              <p className="text-xl mb-8">
                Access our comprehensive suite of tools designed to streamline your clinical research operations and enhance study success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-[#1a365d] px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Tools <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center bg-[#1a365d] text-white px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 mr-2" />
                <span className="font-semibold">NEXT-GEN AI TOOLS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Tools for Clinical Trial Sites</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Make marketing easier. Make processes faster. Get more patients in the door.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {aiTools.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm"
                  variants={itemFadeIn}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="flex items-start">
                    <div className="bg-[#1a365d]/10 rounded-full p-3 mr-4">
                      <tool.icon className="h-6 w-6 text-[#1a365d]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="flex items-start">
                          <Zap className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                          <p className="text-sm text-green-800">{tool.value}</p>
                        </div>
                      </div>
                      <motion.button 
                        onClick={() => handleToolClick()}
                        className="mt-4 text-[#1a365d] font-semibold text-sm flex items-center hover:text-[#2d4a8a]"
                        whileHover={{ x: 5 }}
                      >
                        Try Tool <ChevronRight className="ml-1 h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Tools Suite</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage your clinical trials efficiently and effectively
              </p>
            </motion.div>

            <motion.div 
              className="space-y-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {toolCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={categoryIndex}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                  variants={itemFadeIn}
                >
                  <div className="p-8">
                    <div className="flex items-center mb-8">
                      <div className="bg-purple-100 rounded-full p-3 mr-4">
                        <category.icon className="h-6 w-6 text-purple-700" />
                      </div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.tools.map((tool, toolIndex) => (
                        <motion.div 
                          key={toolIndex}
                          className="bg-gray-50 rounded-lg p-6"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                          <div className="flex items-start">
                            <div className="bg-purple-100 rounded-full p-2 mr-4">
                              <tool.icon className="h-5 w-5 text-purple-700" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold mb-2">{tool.name}</h4>
                              <p className="text-gray-600 text-sm">{tool.description}</p>
                              <motion.button 
                                className="mt-4 text-purple-700 font-semibold text-sm flex items-center hover:text-purple-900"
                                whileHover={{ x: 5 }}
                                onClick={() => handleToolClick(tool.action)}
                              >
                                Launch Tool <ChevronRight className="ml-1 h-4 w-4" />
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <motion.div 
              className="bg-gradient-to-r from-[#1a365d] to-[#2d4a8a] text-white rounded-xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Clinical Research?</h2>
              <p className="text-xl mb-8">
                Get access to our complete suite of research tools and start optimizing your clinical trials today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-[#1a365d] px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Now
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {showToolAccessPopup && (
        <ToolAccessPopup onClose={() => setShowToolAccessPopup(false)} />
      )}

      {showEligibilityScreener && (
        <EligibilityScreener onClose={() => setShowEligibilityScreener(false)} />
      )}
      {showDataAnonymizer && (
        <DataAnonymizer onClose={() => setShowDataAnonymizer(false)} />
      )}
      {showIRBChecklist && (
        <IRBChecklist onClose={() => setShowIRBChecklist(false)} />
      )}
      {showBudgetPlanner && (
        <BudgetPlanner onClose={() => setShowBudgetPlanner(false)} />
      )}
      {showFundingFinder && (
        <FundingFinder onClose={() => setShowFundingFinder(false)} />
      )}
      {showGCPQuiz && (
        <GCPQuiz onClose={() => setShowGCPQuiz(false)} />
      )}
      {showTrainingTracker && (
        <TrainingTracker onClose={() => setShowTrainingTracker(false)} />
      )}
      {showConsentBuilder && (
        <ConsentBuilder onClose={() => setShowConsentBuilder(false)} />
      )}

      <Footer />
    </div>
  );
};

export default PartnerPortal;