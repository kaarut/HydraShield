import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSectionScroll } from '../../contexts/SectionScrollContext';
import { AlertTriangle, Plane, Building, Eye, TrendingUp, Droplets, CheckCircle, Crosshair, Network, Radio, Wifi, Bomb } from 'lucide-react';

const TechUsed: React.FC = () => {
  const { registerSection } = useSectionScroll();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    registerSection('problemstatement');
  }, [registerSection]);

  const legacyTechnologies = [
    {
      icon: <Radio className="h-8 w-8" />,
      title: "RF Jamming + Hacking",
      subtitle: "Range limited"
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Laser",
      subtitle: "Weather dependent and dangerous"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Microwave Beam",
      subtitle: "Limited precision"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Drones + Nets",
      subtitle: "Close range only"
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Drone attacking drones",
      subtitle: "High cost"
    },
    {
      icon: <Bomb className="h-8 w-8" />,
      title: "Explosive + Guns",
      subtitle: "DEADLY"
    }
  ];

  const hydroShieldFeatures = [
    { icon: <CheckCircle className="h-4 w-4 text-green-300" />, text: "Urban safe" },
    { icon: <CheckCircle className="h-4 w-4 text-green-300" />, text: "Reusable" },
    { icon: <CheckCircle className="h-4 w-4 text-green-300" />, text: "Precise targeting" },
    { icon: <CheckCircle className="h-4 w-4 text-green-300" />, text: "No debris" }
  ];

  return (
    <section
      id="problemstatement"
      ref={ref}
      className="min-h-screen w-full snap-start relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight"
          >
            Who's it <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">meant for?</span>
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-20"
          >
            <ul className="list-disc space-y-2 text-left inline-block">
              <li><strong>VIP delegations:</strong> US President visiting Tallinn Old Town</li>
              <li><strong>Critical infrastructure:</strong> power grids, pipes</li>
              <li><strong>Airports:</strong></li>
              <li><strong>Embassies:</strong></li>
              <li><strong>Military bases:</strong></li>
              <li><strong>Border:</strong> Eastern border with Narva</li>
            </ul>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-4xl text font-bold text-gray-900 mt-16"
          >
           Technologies <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">used</span>
          </motion.h3>
      
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 items-center max-w-7xl mx-auto">
          {/* Legacy Technologies - 6 cards */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-4">
            {legacyTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-md opacity-60 grayscale hover:grayscale-0 hover:opacity-80"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 text-gray-400 mx-auto">
                  {tech.icon}
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-gray-500">{tech.title}</h3>
                <p className="text-sm text-gray-400">{tech.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* HydroShield Premium Card */}
          <div className="lg:col-span-2 flex flex-col items-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-blue-400 rounded-2xl p-8 text-center shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105 transform">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  GO-TO SOLUTION
                </div>
                
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-white mx-auto">
                  <Droplets className="h-12 w-12" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">💧 Water Cannon</h3>
                <p className="text-blue-100 text-sm mb-4">Safe, effective precision</p>
                
                {/* Features */}
                <div className="space-y-2 text-left">
                  {hydroShieldFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                      className="flex items-center space-x-2 text-blue-100"
                    >
                      {feature.icon}
                      <span className="text-sm">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechUsed;