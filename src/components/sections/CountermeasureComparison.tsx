import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSectionScroll } from '../../contexts/SectionScrollContext';
import { Shield, Check, X, Target, DollarSign, Wrench, Building, Droplets } from 'lucide-react';

const CountermeasureComparison: React.FC = () => {
  const { registerSection } = useSectionScroll();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    registerSection('countermeasure-comparison');
  }, [registerSection]);

  const countermeasures = [
    {
      title: "Water Cannon",
      cost: "Low",
      maintenance: "Low",
      highlight: true,
      urban: true,
      icon: <Target className="h-5 w-5" />
    },
    {
      title: "Radio Frequency Jamming",
      cost: "Medium",
      maintenance: "Low–Medium",
      highlight: false,
      urban: true,
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Hacking",
      cost: "Med",
      maintenance: "Medium",
      highlight: false,
      urban: true,
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Laser",
      cost: "Very High",
      maintenance: "High",
      highlight: false,
      urban: false,
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Microwave Beam",
      cost: "Very High",
      maintenance: "High",
      highlight: false,
      urban: false,
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Nets",
      cost: "Medium Setup",
      maintenance: "Medium",
      highlight: false,
      urban: false,
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Drone-Anvil",
      cost: "Med-High Setup",
      maintenance: "High",
      highlight: false,
      urban: false,
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Explosives / Guns / Missiles",
      cost: "High Setup",
      maintenance: "High",
      highlight: false,
      urban: false,
      icon: <Shield className="h-5 w-5" />
    }
  ];

  const getCostColor = (cost: string) => {
    if (cost.includes('Low')) return 'text-green-700 bg-green-100';
    if (cost.includes('Medium') || cost.includes('Med')) return 'text-gray-700 bg-gray-100';
    if (cost.includes('High')) return 'text-gray-700 bg-gray-100';
    if (cost.includes('Very High')) return 'text-gray-800 bg-gray-200';
    return 'text-gray-700 bg-gray-100';
  };

  return (
    <section
      id="countermeasure-comparison"
      ref={ref}
      className="h-screen w-full snap-start bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 flex items-center justify-center text-gray-900 overflow-y-auto"
    >
      <div className="container mx-auto px-6 max-h-full">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
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
              <span className="text-blue-700 font-semibold">TECHNOLOGY COMPARISON</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight"
            >
              Why Choose
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Water Cannon?
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Cost-effective, safe for urban environments, and highly effective against drone threats
            </motion.p>
          </motion.div>

          {/* Enhanced Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-8 items-start flex-1 max-h-[60vh] max-w-7xl mx-auto"
          >
            {/* Comparison Table */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden flex-1">
              <div className="overflow-x-auto h-full">
                <table className="w-full h-full">
                  <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <tr>
                      <th className="px-8 py-5 text-left text-lg font-bold">Technology</th>
                      <th className="px-6 py-5 text-left text-lg font-bold">Cost Profile</th>
                      <th className="px-6 py-5 text-center text-lg font-bold">Maintenance</th>
                      <th className="px-6 py-5 text-center text-lg font-bold">Urban Safe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countermeasures.map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                        className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors ${
                          item.highlight ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200' : ''
                        }`}
                      >
                        <td className="px-8 py-4">
                          <div className="flex items-center space-x-3">
                            {item.highlight && (
                              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                            )}
                            <div className={`flex items-center space-x-2 ${
                              item.highlight ? 'text-blue-700 font-bold text-lg' : 'text-gray-700 font-medium text-base'
                            }`}>
                              <span>{item.title}</span>
                            </div>
                            {item.highlight && (
                              <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                RECOMMENDED
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-4 py-2 rounded-lg text-sm font-semibold ${getCostColor(item.cost)}`}>
                            {item.cost}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`px-4 py-2 rounded-lg text-sm font-semibold ${getCostColor(item.maintenance)}`}>
                            {item.maintenance}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center">
                            {item.urban ? (
                              <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                                <Check className="h-5 w-5 text-green-600" />
                              </div>
                            ) : (
                              <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                                <X className="h-5 w-5 text-gray-600" />
                              </div>
                            )}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Benefits Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="w-80 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                {/* <Target className="h-6 w-6" /> */}
                <span>Why Water Cannon?</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 mt-0.5 text-blue-200" />
                  <span className="text-sm leading-relaxed">
                    <strong>The only alternative:</strong> During peace time in the cities, when jamming and hacking doesn't work.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <DollarSign className="h-5 w-5 mt-0.5 text-blue-200" />
                  <span className="text-sm leading-relaxed"><strong>It's cheap:</strong> low cost and renewable
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Wrench className="h-5 w-5 mt-0.5 text-blue-200" />
                  <span className="text-sm leading-relaxed">
                    <strong>Technology is available:</strong> Sensors and AI models are available
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Droplets className="h-5 w-5 mt-0.5 text-blue-200" />
                  <span className="text-sm leading-relaxed">
                    <strong>High pressure water is available:</strong> 
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 mt-0.5 text-blue-200" />
                  <span className="text-sm leading-relaxed">
                    <strong>It's safe:</strong>Lower risk in populated areas
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default CountermeasureComparison;
