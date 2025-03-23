import React from 'react';
import { motion } from 'framer-motion';

const USMap = () => {
  // Major research hubs with real coordinates
  const hubs = [
    { id: 'boston', x: '85%', y: '25%', label: 'Boston', size: 'lg' },
    { id: 'nyc', x: '82%', y: '30%', label: 'New York', size: 'lg' },
    { id: 'sf', x: '15%', y: '35%', label: 'San Francisco', size: 'lg' },
    { id: 'la', x: '18%', y: '45%', label: 'Los Angeles', size: 'lg' },
    { id: 'chicago', x: '60%', y: '30%', label: 'Chicago', size: 'lg' },
    { id: 'houston', x: '55%', y: '70%', label: 'Houston', size: 'md' },
    { id: 'miami', x: '75%', y: '80%', label: 'Miami', size: 'md' },
    { id: 'seattle', x: '18%', y: '20%', label: 'Seattle', size: 'md' },
    { id: 'denver', x: '40%', y: '45%', label: 'Denver', size: 'md' },
    { id: 'atlanta', x: '70%', y: '60%', label: 'Atlanta', size: 'md' }
  ];

  // Secondary research sites
  const sites = [
    { x: '65%', y: '35%', delay: 1 },
    { x: '45%', y: '40%', delay: 1.2 },
    { x: '30%', y: '55%', delay: 1.4 },
    { x: '75%', y: '45%', delay: 1.6 },
    { x: '25%', y: '30%', delay: 1.8 },
    { x: '70%', y: '65%', delay: 2 },
    { x: '35%', y: '65%', delay: 2.2 },
    { x: '80%', y: '40%', delay: 2.4 },
    { x: '50%', y: '25%', delay: 2.6 },
    { x: '60%', y: '55%', delay: 2.8 }
  ];

  const pulseVariants = {
    initial: { scale: 0, opacity: 0.5 },
    animate: (delay: number) => ({
      scale: [1, 1.5, 1],
      opacity: [0.5, 0.2, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }
    })
  };

  const dotVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (delay: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "backOut"
      }
    })
  };

  const labelVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay + 0.2,
        ease: "easeOut"
      }
    })
  };

  const lineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: (delay: number) => ({
      pathLength: 1,
      opacity: 0.3,
      transition: {
        pathLength: { duration: 1.5, delay: delay, ease: "easeInOut" },
        opacity: { duration: 0.5, delay: delay }
      }
    })
  };

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-b from-gray-50 to-white rounded-lg overflow-hidden">
      {/* Major Research Hubs */}
      {hubs.map((hub, index) => (
        <div
          key={hub.id}
          className="absolute"
          style={{ left: hub.x, top: hub.y }}
        >
          {/* Pulse Effect */}
          <motion.div
            className={`absolute ${
              hub.size === 'lg' ? 'w-6 h-6' : 'w-4 h-4'
            } bg-purple-500/30 rounded-full -translate-x-1/2 -translate-y-1/2`}
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            custom={index * 0.2}
          />
          
          {/* Main Dot */}
          <motion.div
            className={`absolute ${
              hub.size === 'lg' ? 'w-6 h-6' : 'w-4 h-4'
            } bg-purple-700 rounded-full -translate-x-1/2 -translate-y-1/2`}
            variants={dotVariants}
            initial="initial"
            animate="animate"
            custom={index * 0.2}
          />

          {/* Label */}
          <motion.div
            className="absolute left-6 top-0 whitespace-nowrap"
            variants={labelVariants}
            initial="initial"
            animate="animate"
            custom={index * 0.2}
          >
            <span className={`font-medium ${
              hub.size === 'lg' ? 'text-sm text-gray-800' : 'text-xs text-gray-600'
            }`}>
              {hub.label}
            </span>
          </motion.div>
        </div>
      ))}

      {/* Secondary Research Sites */}
      {sites.map((site, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-purple-500 rounded-full"
          style={{ left: site.x, top: site.y }}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          custom={site.delay}
        />
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(126, 34, 206)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(126, 34, 206)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {hubs.map((hub, index) => (
          <React.Fragment key={`lines-${hub.id}`}>
            {hubs.slice(index + 1).map((target, targetIndex) => (
              <motion.path
                key={`line-${hub.id}-${target.id}`}
                d={`M ${hub.x.replace('%', '')} ${hub.y.replace('%', '')} Q ${
                  (parseInt(hub.x) + parseInt(target.x)) / 2
                } ${
                  (parseInt(hub.y) + parseInt(target.y)) / 2 - 10
                } ${target.x.replace('%', '')} ${target.y.replace('%', '')}`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                fill="none"
                variants={lineVariants}
                initial="initial"
                animate="animate"
                custom={index * 0.3 + targetIndex * 0.1}
              />
            ))}
          </React.Fragment>
        ))}
      </svg>

      {/* Stats Overlay */}
      <motion.div 
        className="absolute bottom-6 right-6 bg-white rounded-lg shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Network Coverage</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-3xl font-bold text-purple-700">50+</div>
            <div className="text-sm text-gray-600">States</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-700">500+</div>
            <div className="text-sm text-gray-600">Research Sites</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-700">10+</div>
            <div className="text-sm text-gray-600">Major Hubs</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-700">95%</div>
            <div className="text-sm text-gray-600">Population Coverage</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default USMap;