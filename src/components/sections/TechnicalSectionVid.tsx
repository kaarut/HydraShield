import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSectionScroll } from '../../contexts/SectionScrollContext';
import { Target, Zap, Droplets, Clock, Shield, Radar, Eye, Play, Pause } from 'lucide-react';

const TechnicalSectionVid: React.FC = () => {
  const { registerSection } = useSectionScroll();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    registerSection('technicalsectionvid');
  }, [registerSection]);

  const specifications = [
    { icon: <Radar className="h-5 w-5" />, label: "Anvil Radar", value: "Detects every bird", color: "from-blue-500 to-blue-600" },
    { icon: <Eye className="h-5 w-5" />, label: "Optical Cameras", value: "HD/4K Visual", color: "from-green-500 to-green-600" },
    { icon: <Target className="h-5 w-5" />, label: "IR Detectors", value: "Thermal Imaging", color: "from-purple-500 to-purple-600" },
    { icon: <Shield className="h-5 w-5" />, label: "Lattice Software", value: "AI Platform", color: "from-red-500 to-red-600" }
  ];

  const sensorDetails = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI for drone detection and targeting",
      description: "OpenCV + R-CNN, RTMDem, YOLOv8",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Sensors", 
      description: (
        <ul className="list-disc pl-4 text-sm space-y-1">
          <li>Optical Cameras</li>
          <li>Radio Frequency triangulation</li>
          <li>Acoustic sensors</li>
          <li>Later radars</li>
        </ul>
      ),
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Detection Box and Perimeter", 
      description: (
        <ul className="list-disc pl-4 text-sm space-y-1">
          <li>Perimeter gives us 2-minute warning that drone is approaching and direction</li>
          <li>AI powered water cannon covers the detection box area</li>
        </ul>
      ),
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section
      id="technicalsectionvid"
      ref={ref}
      className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 z-10 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200 rounded-full px-6 py-3 mb-6"
          >
            <Shield className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">ADVANCED DETECTION</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight"
          >
            Sensors and
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "} AI Models
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Real-time sensors and AI models drive HydroShield’s fast, precise detection and targeting.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-6 backdrop-blur-sm border border-blue-200/50">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-rectangle">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src="drone-vid-2.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                  {/* Overlay to ensure the video fits nicely within the container */}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>LIVE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sensor Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies uses</h3>
              <div className="space-y-6">
                {sensorDetails.map((sensor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                    className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:shadow-lg hover:border-blue-300/50 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${sensor.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        {sensor.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{sensor.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">{sensor.description}</p>
                      </div>
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

export default TechnicalSectionVid;