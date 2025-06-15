import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSectionScroll } from '../../contexts/SectionScrollContext';
import { 
  Battery, 
  WifiOff, 
  AlertTriangle, 
  Users, 
  Briefcase, 
  Radio
} from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const FeatureGrid: React.FC = () => {
  const { registerSection } = useSectionScroll();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    registerSection('features');
  }, [registerSection]);

  const features: Feature[] = [
    {
      icon: AlertTriangle,
      title: 'Always-On Safety',
      description: 'Monitors for disasters 24/7, even without internet or power.',
      color: 'orange',
    },
    {
      icon: WifiOff,
      title: 'Works when cell networks and internet are down',
      description: 'Works when cell networks and internet are down.',
      color: 'red',
    },
    {
      icon: Radio,
      title: '24/7 Connectivity',
      description: 'Connects with other devices to extend coverage.',
      color: 'blue',
    },
    {
      icon: Battery,
      title: 'Extended Battery Life',
      description: 'Up to 30 days of operation on a single charge.',
      color: 'green',
    },
    {
      icon: Users,
      title: 'Community-Powered',
      description: 'Join a network of safety-conscious neighbors.',
      color: 'purple',
    },
    {
      icon: Briefcase,
      title: 'Portable & Family-Friendly',
      description: 'Easy to use for all ages, take it anywhere.',
      color: 'teal',
    },
  ];

  const colorMap: Record<string, string> = {
    orange: 'bg-orange-500',
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    teal: 'bg-teal-500',
  };

  const bgColorMap: Record<string, string> = {
    orange: 'bg-orange-50',
    red: 'bg-red-50',
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    purple: 'bg-purple-50',
    teal: 'bg-teal-50',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="features"
      ref={ref}
      className="min-h-screen w-full snap-start bg-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for When It Matters Most
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AlertBox combines cutting-edge technology with intuitive design to keep your family safe in any situation.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${bgColorMap[feature.color]} rounded-xl p-8 transition-all duration-300 hover:shadow-xl group`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className={`${colorMap[feature.color]} text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#peaceofmind"
            className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
          >
            <span>Learn more about our technology</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;