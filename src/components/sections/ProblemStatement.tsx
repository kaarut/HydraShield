import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSectionScroll } from '../../contexts/SectionScrollContext';
import { AlertTriangle, Zap, Shield, Target } from 'lucide-react';

const ProblemStatement: React.FC = () => {
  const { registerSection } = useSectionScroll();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    registerSection('problem');
  }, [registerSection]);

  const problems = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Airport Disruption",
      description: "Over 1,000 drone incidents reported at airports globally in 2023",
      color: "red"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Infrastructure Risk",
      description: "Power grids, nuclear facilities, and government buildings under threat",
      color: "yellow"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Privacy Invasion",
      description: "Unauthorized surveillance and data collection capabilities",
      color: "blue"
    }
  ];

  return (
    <section
      id="problem"
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 rounded-full px-6 py-3 mb-8"
          >
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span className="text-red-600 font-medium">CRITICAL THREAT</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-gray-900"
          >
            Drones Are The New
            <br />
            <span className="text-red-600">Security Threat</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Unauthorized drones pose unprecedented risks to airports, military bases, 
            critical infrastructure, and public events. Traditional security measures 
            are inadequate against these aerial threats.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${
                item.color === 'red' ? 'bg-red-100 text-red-600 group-hover:bg-red-200' :
                item.color === 'yellow' ? 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-200' :
                'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
              } rounded-lg mb-6 transition-colors`}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;