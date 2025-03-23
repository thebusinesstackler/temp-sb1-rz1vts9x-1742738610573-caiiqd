import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Building, FileText, Briefcase, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const HOVER_DELAY = 200; // 200ms delay before closing

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (dropdownId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, HOVER_DELAY);
  };

  // Resource library items
  const resourceItems = [
    {
      name: "Case Studies",
      description: "Success stories and results",
      path: "/case-studies"
    },
    {
      name: "Ad Copy Generator",
      description: "AI-powered IRB-compliant ad copy",
      path: "/tools/ad-copy-generator",
      isHighlighted: true
    },
    {
      name: "CRIO Integration",
      description: "Seamless integration with CRIO-enabled sites",
      path: "#"
    }
  ];

  // Solutions dropdown items
  const solutionItems = [
    {
      name: "Patient Recruitment",
      description: "AI-powered patient matching and recruitment",
      path: "/patient-recruitment",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Research Tools",
      description: "Comprehensive suite of clinical research tools",
      path: "/partner-portal",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Metasite Network",
      description: "Global network of research-ready sites",
      path: "/solutions/metasite",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Recruitment Channels",
      description: "Access premium patient recruitment channels",
      path: "/recruitment-channels",
      image: "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Therapeutic areas dropdown items with images and descriptions
  const therapeuticAreas = [
    {
      name: "Oncology",
      description: "Innovative approaches in cancer research and treatment",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      path: "/therapeutic-areas/oncology"
    },
    {
      name: "Neurology",
      description: "Advanced trials in neurological conditions",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      path: "/therapeutic-areas/neurology"
    },
    {
      name: "Cardiovascular",
      description: "Leading-edge cardiac research studies",
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      path: "/therapeutic-areas/cardiovascular"
    },
    {
      name: "Immunology",
      description: "Breakthrough immunological treatments",
      image: "https://www.uni.lu/wp-content/uploads/sites/6/2023/06/LCSB_Immunology-and-Genetics.jpg",
      path: "/therapeutic-areas/immunology"
    },
    {
      name: "Metabolic Disorders",
      description: "Innovative metabolic disease research",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      path: "/therapeutic-areas/metabolic-disorders"
    },
    {
      name: "Rare Diseases",
      description: "Specialized trials for rare conditions",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      path: "/therapeutic-areas/rare-diseases"
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        {/* Skip Links for Accessibility */}
        <div className="sr-only focus-within:not-sr-only">
          <a href="#main-content" className="absolute z-50 bg-blue-700 text-white px-4 py-2 left-2 top-2 focus:outline-none">
            Skip to Content
          </a>
          <a href="#main-nav" className="absolute z-50 bg-blue-700 text-white px-4 py-2 left-2 top-12 focus:outline-none">
            Skip to Menu
          </a>
          <a href="#footer" className="absolute z-50 bg-blue-700 text-white px-4 py-2 left-2 top-24 focus:outline-none">
            Skip to Footer
          </a>
        </div>

        {/* Top Navigation */}
        <div className="hidden md:flex justify-between items-center py-2 border-b border-gray-100 text-sm">
          <div className="flex items-center space-x-4">
            <Link to="/partner-portal" className="hover:underline flex items-center">
              <Building className="h-4 w-4 mr-1" />
              Partner Portal
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/request-proposal" className="hover:underline flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              Request a Proposal
            </Link>
            <Link to="/careers" className="hover:underline flex items-center">
              <Briefcase className="h-4 w-4 mr-1" />
              Careers
            </Link>
            <a href="https://app.theranovex.com" className="hover:underline flex items-center text-purple-700">
              <LogIn className="h-4 w-4 mr-1" />
              Login
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav id="main-nav" className="py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-xl md:text-2xl font-bold text-blue-900 mr-4 md:mr-8">THERANOVEX</Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-gray-700 hover:text-blue-700 py-2">
                  Home
                </Link>
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('solutions')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    className={`flex items-center text-gray-700 hover:text-blue-700 py-2 ${
                      activeDropdown === 'solutions' ? 'text-blue-700' : ''
                    }`}
                  >
                    Solutions <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'solutions' && (
                    <div 
                      className="absolute left-0 mt-2 w-[600px] bg-white shadow-lg rounded-lg p-6 z-10"
                      onMouseEnter={() => handleMouseEnter('solutions')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="grid grid-cols-1 gap-4">
                        {solutionItems.map((solution, index) => (
                          <Link 
                            key={index}
                            to={solution.path}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <img 
                              src={solution.image} 
                              alt={solution.name}
                              className="w-16 h-16 object-cover rounded-lg mr-4"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900">{solution.name}</h3>
                              <p className="text-sm text-gray-600">{solution.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('therapeutic')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    className={`flex items-center text-gray-700 hover:text-blue-700 py-2 ${
                      activeDropdown === 'therapeutic' ? 'text-blue-700' : ''
                    }`}
                  >
                    Therapeutic Areas <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'therapeutic' && (
                    <div 
                      className="absolute left-0 mt-2 w-[600px] bg-white shadow-lg rounded-lg p-6 z-10 grid grid-cols-2 gap-4"
                      onMouseEnter={() => handleMouseEnter('therapeutic')}
                      onMouseLeave={handleMouseLeave}
                    >
                      {therapeuticAreas.map((area, index) => (
                        <Link 
                          key={index}
                          to={area.path}
                          className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <img 
                            src={area.image} 
                            alt={area.name}
                            className="w-16 h-16 object-cover rounded-lg mr-4"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">{area.name}</h3>
                            <p className="text-sm text-gray-600">{area.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    className={`flex items-center text-gray-700 hover:text-blue-700 py-2 ${
                      activeDropdown === 'resources' ? 'text-blue-700' : ''
                    }`}
                  >
                    Resource Library <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'resources' && (
                    <div 
                      className="absolute left-0 mt-2 w-[400px] bg-white shadow-lg rounded-lg p-4 z-10"
                      onMouseEnter={() => handleMouseEnter('resources')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="space-y-4">
                        {resourceItems.map((item, index) => (
                          <Link 
                            key={index}
                            to={item.path}
                            className={`flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors ${
                              item.isHighlighted ? 'bg-purple-50' : ''
                            }`}
                          >
                            <div>
                              <h3 className={`font-semibold ${item.isHighlighted ? 'text-purple-700' : 'text-gray-900'}`}>
                                {item.name}
                              </h3>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/contact-us" className="text-gray-700 hover:text-blue-700 py-2">Contact Us</Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-700 md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 mt-4">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="block py-2 text-gray-700 hover:text-blue-700">
                  Home
                </Link>
                <div className="py-2">
                  <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-700">
                    <span>Solutions</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="pl-4 mt-2 space-y-2">
                    {solutionItems.map((solution, index) => (
                      <Link 
                        key={index}
                        to={solution.path}
                        className="block py-1 text-gray-700 hover:text-blue-700"
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="py-2">
                  <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-700">
                    <span>Therapeutic Areas</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="pl-4 mt-2 space-y-2">
                    {therapeuticAreas.map((area, index) => (
                      <Link 
                        key={index}
                        to={area.path}
                        className="block py-1 text-gray-700 hover:text-blue-700"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="py-2">
                  <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-700">
                    <span>Resource Library</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="pl-4 mt-2 space-y-2">
                    {resourceItems.map((item, index) => (
                      <Link 
                        key={index}
                        to={item.path}
                        className={`block py-1 ${
                          item.isHighlighted ? 'text-purple-700 font-medium' : 'text-gray-700'
                        } hover:text-blue-700`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link to="/contact-us" className="py-2 text-gray-700 hover:text-blue-700">Contact Us</Link>
                <a 
                  href="https://app.theranovex.com" 
                  className="py-2 text-purple-700 hover:text-purple-800 font-semibold flex items-center"
                >
                  <LogIn className="h-5 w-5 mr-2" />
                  Login
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;