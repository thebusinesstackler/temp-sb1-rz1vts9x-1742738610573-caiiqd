import React, { useState } from 'react';
import { Accessibility, X } from 'lucide-react';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScreenReaderMode, setIsScreenReaderMode] = useState(false);

  const toggleScreenReaderMode = () => {
    setIsScreenReaderMode(!isScreenReaderMode);
    
    // Apply screen reader optimizations
    if (!isScreenReaderMode) {
      document.body.classList.add('screen-reader-mode');
      // Announce to screen readers that mode is enabled
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.textContent = 'Screen reader mode enabled';
      document.body.appendChild(announcement);
      
      // Remove announcement after it's been read
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    } else {
      document.body.classList.remove('screen-reader-mode');
      // Announce to screen readers that mode is disabled
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.textContent = 'Screen reader mode disabled';
      document.body.appendChild(announcement);
      
      // Remove announcement after it's been read
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Open accessibility menu"
      >
        <Accessibility className="h-6 w-6" />
      </button>

      {/* Accessibility Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6" role="dialog" aria-modal="true" aria-labelledby="accessibility-title">
            <div className="flex justify-between items-center mb-4">
              <h2 id="accessibility-title" className="text-xl font-bold">Accessibility Options</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close accessibility menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Screen Reader Mode</h3>
              <p className="text-gray-600 mb-4">Optimize the website for screen readers with enhanced navigation and descriptions.</p>
              <div className="flex items-center">
                <button
                  onClick={toggleScreenReaderMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isScreenReaderMode ? 'bg-blue-600' : 'bg-gray-200'}`}
                  role="switch"
                  aria-checked={isScreenReaderMode}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isScreenReaderMode ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </button>
                <span className="ml-3 text-sm font-medium">
                  {isScreenReaderMode ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Accessibility Guide</h3>
              <p className="text-gray-600 mb-2">Use these keyboard shortcuts for navigation:</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Press Tab to navigate between elements</li>
                <li>Press Enter to activate buttons and links</li>
                <li>Press Alt+1 to skip to main content</li>
                <li>Press Alt+2 to skip to navigation</li>
                <li>Press Alt+3 to skip to footer</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Report Accessibility Issues</h3>
              <p className="text-gray-600 mb-4">Found an accessibility problem? Let us know so we can improve.</p>
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Report Issue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityMenu;