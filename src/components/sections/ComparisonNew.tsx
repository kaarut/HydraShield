import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSectionScroll } from '../../contexts/SectionScrollContext';
import { 
  Crosshair, 
  Network, 
  Radio, 
  Plane, 
  Wifi, 
  Bomb, 
  Droplets, 
  CheckCircle 
} from 'lucide-react';

const ComparisonNew: React.FC = () => {
  const { registerSection } = useSectionScroll();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    registerSection('comparison');
  }, [registerSection]);

  const legacyTechnologies = [
    {
      icon: <Crosshair className="h-12 w-12" />,
      title: "Ballistics",
      subtitle: "High collateral damage"
    },
    {
      icon: <Network className="h-12 w-12" />,
      title: "Net Capture",
      subtitle: "Single-use, expensive"
    },
    {
      icon: <Radio className="h-12 w-12" />,
      title: "RF Jamming",
      subtitle: "Disrupts communications"
    },
    {
      icon: <Plane className="h-12 w-12" />,
      title: "Attack Drones",
      subtitle: "Debris hazard"
    },
    {
      icon: <Wifi className="h-12 w-12" />,
      title: "Signal Hijacking",
      subtitle: "Limited effectiveness"
    },
    {
      icon: <Bomb className="h-12 w-12" />,
      title: "Explosive Devices",
      subtitle: "Extreme destruction"
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
      id="comparison"
      ref={ref}
      className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-gray-900"
          >
            Beyond <span className="text-gray-500">Legacy Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Current anti-drone technologies fall short in urban environments. 
            HydroShield represents the next generation of safe, precise defense.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 items-center max-w-7xl mx-auto">
          {/* Legacy Technologies - 6 cards */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            {legacyTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-md opacity-60 grayscale hover:grayscale-0 hover:opacity-80"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4 text-gray-400 mx-auto">
                  {tech.icon}
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-gray-500">{tech.title}</h3>
                <p className="text-sm text-gray-400">{tech.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* New Solution Card - Prominent */}
          <div className="lg:col-span-1 flex justify-center">
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
                  NEW SOLUTION
                </div>
                
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-white mx-auto">
                  <Droplets className="h-16 w-16" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">HydroShield</h3>
                <p className="text-blue-100 text-sm mb-4">Water-based precision</p>
                
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
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="mt-6 w-full bg-white text-blue-600 font-bold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonNew;