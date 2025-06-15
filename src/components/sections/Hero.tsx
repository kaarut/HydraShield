import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { useSectionScroll } from '../../contexts/SectionScrollContext';

const Hero: React.FC = () => {
  const { registerSection } = useSectionScroll();

  useEffect(() => {
    registerSection('hero');
  }, [registerSection]);

  return (
    <section
      id="hero"
      className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/50 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/public/drone-vid-1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-6 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <AlertTriangle size={56} className="text-orange-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto"
        >
          Autonomous anti-drone system for urban areas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10"
        >
          AI powered drone detection and attack system
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#waitlist"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-orange-500/30"
          >
            Join Waitlist
          </a>
          <a
            href="#product"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full text-lg transition-all"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <a
          href="#product"
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
        >
          <p className="text-sm mb-1">Scroll to discover</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1"
          >
            <motion.div className="bg-white w-1 h-2 rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;