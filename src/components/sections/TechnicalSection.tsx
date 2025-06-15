import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSectionScroll } from '../../contexts/SectionScrollContext';
import { Target, Zap, Droplets, Clock, Shield, Radar, Eye, Move3D } from 'lucide-react';

const TechnicalSection: React.FC = () => {
  const { registerSection } = useSectionScroll();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    registerSection('technical');
  }, [registerSection]);

  const specifications = [
    { icon: <Target className="h-5 w-5" />, label: "Target range", value: "Up to 200m high, 35 m/s speed" },
    { icon: <Droplets className="h-5 w-5" />, label: "Water range", value: "160m vertical, 200m horizontal" },
    { icon: <Zap className="h-5 w-5" />, label: "Impact force", value: "40–60 kN (equivalent to 1,500 kg)" },
    { icon: <Shield className="h-5 w-5" />, label: "Drone capacity", value: "1–3 kg (commercial & DIY UAVs)" },
    { icon: <Move3D className="h-5 w-5" />, label: "Aiming system", value: "F-effector precision targeting" }
  ];

  const detectionFeatures = [
    {
      icon: <Radar className="h-8 w-8" />,
      title: "X-band Radar",
      description: "Detects micro-UAVs up to 5 km",
      color: "blue"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Lidar System",
      description: "3D point-cloud for precise ranging",
      color: "green"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "HD/IR Camera",
      description: "Object classification via computer vision",
      color: "purple"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Sensor Fusion",
      description: "Threat list with position & velocity",
      color: "orange"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Early Warning",
      description: "~700ms cannon spin-up time",
      color: "red"
    }
  ];

  return (
    <section
      id="technical"
      ref={ref}
      className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden bg-gradient-to-t from-gray-50 via-white to-gray-50"
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
            <span className="text-blue-600">Hydro</span>Shield
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Precision water-based neutralization system with intelligent detection capabilities
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-top max-w-7xl mx-auto mb-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
              <img 
                src="/public/cannon-diagram-t.png" 
                alt="HydroShield Anti-Drone System" 
                className="w-full h-100 object-cover rounded-xl shadow-lg"
              />
              {/* <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-100 object-cover z-0 p-4 "
              >
                <source src="/public/tech-time.mp4" type="video/mp4" />
              </video> */}
              {/* <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                HydroShield Pro
              </div> */}

          </motion.div>

          {/* Technical Specifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">System Specifications</h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {spec.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-500">{spec.label}</div>
                      <div className="text-lg font-semibold text-gray-900">{spec.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TechnicalSection;