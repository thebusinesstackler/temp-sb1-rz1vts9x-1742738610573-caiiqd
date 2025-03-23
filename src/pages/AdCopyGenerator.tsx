import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, ChevronRight, ArrowRight, MessageSquare, 
  Copy, Star, CheckCircle, Download, RefreshCw,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityMenu from '../components/AccessibilityMenu';
import { generateAds, type GeneratedAds, type StudyInfo } from '../lib/openai';

const AdCopyGenerator = () => {
  const [studyInfo, setStudyInfo] = useState<StudyInfo>({
    condition: '',
    location: '',
    compensation: '',
    ageRange: {
      min: undefined,
      max: undefined
    },
    gender: '',
    additionalDetails: ''
  });
  const [generating, setGenerating] = useState(false);
  const [generatedAds, setGeneratedAds] = useState<GeneratedAds | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setGenerating(true);

    try {
      const ads = await generateAds(studyInfo);
      setGeneratedAds(ads);
    } catch (error) {
      console.error('Error generating ads:', error);
      setError('An error occurred while generating ads. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

  const downloadAllAds = () => {
    if (!generatedAds) return;

    const content = `
TheraNovex Generated Ad Copy
===========================

Google Ads
---------
Headlines:
${generatedAds.google.headlines.map(h => `- ${h}`).join('\n')}

Descriptions:
${generatedAds.google.descriptions.map(d => `- ${d}`).join('\n')}

Facebook Ads
-----------
Headlines:
${generatedAds.facebook.headlines.map(h => `- ${h}`).join('\n')}

Descriptions:
${generatedAds.facebook.descriptions.map(d => `- ${d}`).join('\n')}

Display Ads
----------
Headlines:
${generatedAds.display.headlines.map(h => `- ${h}`).join('\n')}

Descriptions:
${generatedAds.display.descriptions.map(d => `- ${d}`).join('\n')}
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-ads.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
                <PenTool className="h-5 w-5 mr-2" />
                <span className="font-semibold">AI AD COPY GENERATOR</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Generate IRB-Approved Ad Copy in Seconds
              </h1>
              <p className="text-xl mb-8">
                Enter your study details and let our AI create compliant ad copy for Google, Facebook, and display ads
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try It Now - Free <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
                <Link to="/contact-us">
                  <motion.button 
                    className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-white/10 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Enterprise Access
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Generator Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="bg-white rounded-lg p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Generate Ad Copy</h2>
                
                {/* Study Information Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Medical Condition *
                      </label>
                      <input
                        type="text"
                        value={studyInfo.condition}
                        onChange={(e) => setStudyInfo({ ...studyInfo, condition: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., Type 2 Diabetes"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location *
                      </label>
                      <input
                        type="text"
                        value={studyInfo.location}
                        onChange={(e) => setStudyInfo({ ...studyInfo, location: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., Los Angeles, CA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Compensation
                      </label>
                      <input
                        type="text"
                        value={studyInfo.compensation}
                        onChange={(e) => setStudyInfo({ ...studyInfo, compensation: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g., Up to $750"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <select
                        value={studyInfo.gender}
                        onChange={(e) => setStudyInfo({ ...studyInfo, gender: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="">All Genders</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Age Range
                      </label>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <input
                            type="number"
                            value={studyInfo.ageRange?.min || ''}
                            onChange={(e) => setStudyInfo({ 
                              ...studyInfo, 
                              ageRange: { 
                                ...studyInfo.ageRange,
                                min: parseInt(e.target.value) || undefined 
                              }
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Min age"
                          />
                        </div>
                        <span className="text-gray-500">to</span>
                        <div className="flex-1">
                          <input
                            type="number"
                            value={studyInfo.ageRange?.max || ''}
                            onChange={(e) => setStudyInfo({ 
                              ...studyInfo, 
                              ageRange: { 
                                ...studyInfo.ageRange,
                                max: parseInt(e.target.value) || undefined 
                              }
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="Max age"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Details
                      </label>
                      <textarea
                        value={studyInfo.additionalDetails}
                        onChange={(e) => setStudyInfo({ ...studyInfo, additionalDetails: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Any additional study details or requirements..."
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-red-700">{error}</p>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <motion.button
                      type="submit"
                      disabled={generating}
                      className={`bg-purple-700 text-white px-6 py-3 rounded-md font-semibold flex items-center ${
                        generating ? 'opacity-75 cursor-not-allowed' : 'hover:bg-purple-800'
                      }`}
                      whileHover={generating ? {} : { scale: 1.05 }}
                      whileTap={generating ? {} : { scale: 0.95 }}
                    >
                      {generating ? (
                        <>
                          <RefreshCw className="animate-spin mr-2 h-4 w-4" />
                          Generating...
                        </>
                      ) : (
                        <>
                          Generate Ads <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>

                {/* Generated Ads */}
                {generatedAds && (
                  <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Google Ads */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold mb-4">Google Ads</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Headlines</h4>
                            {generatedAds.google.headlines.map((headline, index) => (
                              <div 
                                key={index}
                                className="bg-gray-50 p-3 rounded-md mb-2 group relative"
                              >
                                {headline}
                                <button
                                  onClick={() => copyToClipboard(headline)}
                                  className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Copy className="h-4 w-4 text-gray-500 hover:text-purple-700" />
                                </button>
                              </div>
                            ))}
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Descriptions</h4>
                            {generatedAds.google.descriptions.map((desc, index) => (
                              <div 
                                key={index}
                                className="bg-gray-50 p-3 rounded-md mb-2 group relative"
                              >
                                {desc}
                                <button
                                  onClick={() => copyToClipboard(desc)}
                                  className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Copy className="h-4 w-4 text-gray-500 hover:text-purple-700" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Facebook Ads */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold mb-4">Facebook Ads</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Headlines</h4>
                            {generatedAds.facebook.headlines.map((headline, index) => (
                              <div 
                                key={index}
                                className="bg-gray-50 p-3 rounded-md mb-2 group relative"
                              >
                                {headline}
                                <button
                                  onClick={() => copyToClipboard(headline)}
                                  className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Copy className="h-4 w-4 text-gray-500 hover:text-purple-700" />
                                </button>
                              </div>
                            ))}
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Descriptions</h4>
                            {generatedAds.facebook.descriptions.map((desc, index) => (
                              <div 
                                key={index}
                                className="bg-gray-50 p-3 rounded-md mb-2 group relative"
                              >
                                {desc}
                                <button
                                  onClick={() => copyToClipboard(desc)}
                                  className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Copy className="h-4 w-4 text-gray-500 hover:text-purple-700" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Display Ads */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold mb-4">Display Ads</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Headlines</h4>
                            {generatedAds.display.headlines.map((headline, index) => (
                              <div 
                                key={index}
                                className="bg-gray-50 p-3 rounded-md mb-2 group relative"
                              >
                                {headline}
                                <button
                                  onClick={() => copyToClipboard(headline)}
                                  className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Copy className="h-4 w-4 text-gray-500 hover:text-purple-700" />
                                </button>
                              </div>
                            ))}
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Descriptions</h4>
                            {generatedAds.display.descriptions.map((desc, index) => (
                              <div 
                                key={index}
                                className="bg-gray-50 p-3 rounded-md mb-2 group relative"
                              >
                                {desc}
                                <button
                                  onClick={() => copyToClipboard(desc)}
                                  className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Copy className="h-4 w-4 text-gray-500 hover:text-purple-700" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <motion.button
                        onClick={downloadAllAds}
                        className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download All
                      </motion.button>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: Star,
                  title: "IRB Compliant",
                  description: "Pre-approved templates & phrases"
                },
                {
                  icon: CheckCircle,
                  title: "Multi-Platform",
                  description: "Optimized for each ad network"
                },
                {
                  icon: RefreshCw,
                  title: "Instant Generation",
                  description: "Get your ads in seconds"
                },
                {
                  icon: Download,
                  title: "Easy Export",
                  description: "Download in multiple formats"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-purple-100 rounded-full p-4 inline-flex mb-4">
                    <feature.icon className="h-8 w-8 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-bold mb-4">
                Ready to Streamline Your Ad Creation?
              </h2>
              <p className="text-xl mb-8">
                Generate IRB-compliant ad copy for all your clinical trials
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  className="bg-white text-purple-900 px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold inline-flex items-center hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo <MessageSquare className="ml-2 h-4 w-4" />
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

export default AdCopyGenerator;