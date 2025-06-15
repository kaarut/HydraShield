import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSectionScroll } from '../../contexts/SectionScrollContext';
import { 
  Droplets, 
  CheckCircle, 
  XCircle, 
  Shield, 
  Target, 
  Zap, 
  AlertTriangle,
  Star,
  TrendingUp,
  BarChart3
} from 'lucide-react';

const DroneStats: React.FC = () => {
  const { registerSection } = useSectionScroll();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    registerSection('drone-stats');
  }, [registerSection]);

  // Drone data filtered for sub-150m altitude class - reduced for screen fit
  const droneData = [
    { name: 'DJI FPV', speed: 140, altitude: 120 },
    { name: 'senseFly eBee X', speed: 110, altitude: 120 },
    { name: 'DJI Inspire 2', speed: 93, altitude: 120 },
    { name: 'DJI Matrice 300 RTK', speed: 82.8, altitude: 120 },
    { name: 'DJI Mavic 3', speed: 75.6, altitude: 120 },
    { name: 'DJI Phantom 4', speed: 72, altitude: 120 },
    { name: 'DJI Mini 2', speed: 57.6, altitude: 120 },
    { name: 'Syma X5UW', speed: 15, altitude: 5 }
  ].sort((a, b) => b.speed - a.speed);

  const maxSpeed = Math.max(...droneData.map(d => d.speed));

  const comparisonData = [
    {
      name: 'HydroShield',
      icon: Droplets,
      highlight: true,
      effectiveness: 'excellent',
      urbanSafety: 'excellent',
      collateralDamage: 'minimal',
      cost: 'low',
      reusability: 'excellent',
      description: 'Water-based precision targeting',
      badge: 'Recommended'
    },
    {
      name: 'Ballistics',
      icon: Target,
      highlight: false,
      effectiveness: 'excellent',
      urbanSafety: 'poor',
      collateralDamage: 'high',
      cost: 'medium',
      reusability: 'poor',
      description: 'Traditional projectile systems',
      badge: null
    },
    {
      name: 'Net Systems',
      icon: Shield,
      highlight: false,
      effectiveness: 'good',
      urbanSafety: 'good',
      collateralDamage: 'medium',
      cost: 'high',
      reusability: 'poor',
      description: 'Physical entanglement nets',
      badge: null
    },
    {
      name: 'RF Jamming',
      icon: Zap,
      highlight: false,
      effectiveness: 'good',
      urbanSafety: 'poor',
      collateralDamage: 'high',
      cost: 'medium',
      reusability: 'excellent',
      description: 'Radio frequency disruption',
      badge: null
    },
    {
      name: 'Attack Drones',
      icon: AlertTriangle,
      highlight: false,
      effectiveness: 'excellent',
      urbanSafety: 'poor',
      collateralDamage: 'very-high',
      cost: 'very-high',
      reusability: 'poor',
      description: 'Drone-on-drone combat',
      badge: null
    }
  ];

  const getScoreIndicator = (score: string) => {
    const indicators = {
      'excellent': { icon: CheckCircle, color: 'text-green-600', label: 'Excellent' },
      'good': { icon: CheckCircle, color: 'text-blue-600', label: 'Good' },
      'poor': { icon: XCircle, color: 'text-red-600', label: 'Poor' },
      'minimal': { color: 'text-green-600', label: 'Minimal' },
      'medium': { color: 'text-yellow-600', label: 'Medium' },
      'high': { color: 'text-red-600', label: 'High' },
      'very-high': { color: 'text-red-600', label: 'Very High' },
      'low': { color: 'text-green-600', label: 'Low' }
    };

    const indicator = indicators[score as keyof typeof indicators];
    
    if (indicator.icon) {
      const IconComponent = indicator.icon;
      return (
        <div className="flex items-center justify-center">
          <IconComponent className={`h-5 w-5 ${indicator.color}`} />
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center">
        <span className={`text-sm font-medium ${indicator.color}`}>
          {indicator.label}
        </span>
      </div>
    );
  };

  const getBadge = (badge: string | null) => {
    if (!badge) return null;

    return (
      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
        <Star className="h-3 w-3 mr-1" />
        {badge}
      </div>
    );
  };

  return (
    <section
      id="drone-stats"
      ref={ref}
      className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden bg-gradient-to-t from-gray-50 via-white to-gray-50"
    >
      <div className="container mx-auto px-6 z-10">
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
            className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-6"
          >
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <span className="text-blue-600 font-medium">TARGET ANALYSIS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Drone Performance
            <br />
            <span className="text-blue-600">Sub-150m Altitude Class</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Maximum speed analysis for drones operating below 150m altitude threshold.
            HydroShield targets this critical operational range with precision.
          </motion.p>
        </motion.div>

        {/* Chart Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Max Speed Comparison</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>All drones operate below 150m altitude</span>
              </div>
              <div className="text-gray-400">•</div>
              <span>Speed range: 15-140 km/h</span>
            </div>
          </motion.div>

          {/* Horizontal Bar Chart */}
          <div className="space-y-2">
            {droneData.map((drone, index) => (
              <motion.div
                key={drone.name}
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.95 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.1 + index * 0.08,
                  ease: "easeOut"
                }}
                className="flex items-center space-x-4 group"
              >
                {/* Drone Name */}
                <div className="w-40 text-right">
                  <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {drone.name}
                  </span>
                </div>
                
                {/* Bar */}
                <div className="flex-1 relative">
                  <div className="bg-gray-100 rounded-full h-6 relative overflow-hidden group-hover:bg-gray-200 transition-colors">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${(drone.speed / maxSpeed) * 100}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 1.3 + index * 0.08,
                        ease: "easeOut"
                      }}
                      className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full flex items-center justify-end pr-2 group-hover:from-blue-500 group-hover:to-blue-700 transition-all shadow-sm"
                    >
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 1.8 + index * 0.08 }}
                        className="text-white text-xs font-medium"
                      >
                        {drone.speed} km/h
                      </motion.span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="mt-6 pt-4 border-t border-gray-200"
          >
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>X-axis: Max Speed (km/h)</span>
              <span>Y-axis: Drone Models</span>
            </div>
            <div className="mt-1 text-xs text-gray-400">
              Note: All listed drones operate at typical flight altitudes below 150m threshold
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DroneStats;