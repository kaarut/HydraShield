import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSectionScroll } from '../../contexts/SectionScrollContext';
import { AlertTriangle, Plane, Building, Eye, TrendingUp, Droplets } from 'lucide-react';

const ProblemStatement: React.FC = () => {
  const { registerSection } = useSectionScroll();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    registerSection('problemstatement');
  }, [registerSection]);

  const threats = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Water Cannon",
      description: "The only physical counter measure in the urban area",
      stats: "***",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Sensors",
      description: "Sensors are cheap and available",
      stats: "***",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Water is avaibale",
      description: "Urban areas already have the water supply and infrastructure",
      stats: "Unlimited access",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "AI is ready!",
      description: "For drone detection and targeting AI models are accurate and open source",
      stats: "Unlimited access",
      color: "from-green-500 to-green-600"
    }
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
          className="text-center mb-20"
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-200 rounded-full px-4 py-4 mb-5"
          >
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <span className="text-red-700 font-semibold text-lg">ESCALATING THREAT</span>
            <TrendingUp className="h-5 w-5 text-red-600" />
          </motion.div> */}
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 leading-tight"
          >
            The technology
            <br />
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              is already here
            </span>
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight"
          >
            <br />
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Innovation is combining that
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Unauthorized drones pose unprecedented risks to critical infrastructure, 
            public safety, and national security. Traditional defenses are obsolete.
          </motion.p>


        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {threats.map((threat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${threat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${threat.color} text-white rounded-2xl mb-6 shadow-lg`}>
                  {threat.icon}
                </div>
                
                <div className="mb-4">
                  <div className={`inline-block bg-gradient-to-r ${threat.color} bg-clip-text text-transparent font-bold text-sm mb-2`}>
                    {/* {threat.stats} */}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{threat.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{threat.description}</p>
                </div>

                {/* <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemStatement;