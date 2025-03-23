import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Main Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="hover:text-blue-400">Solutions</Link></li>
              <li><Link to="/therapeutic-areas" className="hover:text-blue-400">Therapeutic Areas</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-400">Resources</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/sponsors" className="hover:text-blue-400">For Sponsors</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Research Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/tools/eligibility-screener" className="hover:text-blue-400">Eligibility Screener Widget</Link></li>
              <li><Link to="#" className="hover:text-blue-400">Automated Referral Tracker</Link></li>
              <li><Link to="#" className="hover:text-blue-400">Cost Estimator</Link></li>
              <li><Link to="#" className="hover:text-blue-400">Visit Schedule Generator</Link></li>
              <li><Link to="#" className="hover:text-blue-400">Regulatory Document Checklist</Link></li>
              <li><Link to="#" className="hover:text-blue-400">Protocol Feasibility Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Privacy</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-blue-400">Cookies Notice & Consent</Link></li>
              <li><Link to="/mobile-privacy" className="hover:text-blue-400">Mobile Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div>
              <p className="text-lg font-bold mb-2">THERANOVEX</p>
              <p className="text-sm text-gray-400">
                Connect with a TheraNovex Solutions Expert Today.
              </p>
              <Link 
                to="/contact-us"
                className="mt-4 inline-block bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center sm:text-left">
          <p className="text-sm text-gray-400">© 2025 TheraNovex | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;