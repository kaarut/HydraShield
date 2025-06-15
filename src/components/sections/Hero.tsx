import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Play, X } from 'lucide-react';
import { useSectionScroll } from '../../contexts/SectionScrollContext';

const Hero: React.FC = () => {
  const { registerSection } = useSectionScroll();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    registerSection('hero');
  }, [registerSection]);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <>


      <section
        id="hero"
        className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden"
      >
        {/* Background with enhanced blue gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/85 to-indigo-900/90 z-10"></div>
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

        {/* Animated background elements */}
        <div className="absolute inset-0 z-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-400/10"
              style={{
                width: Math.random() * 8 + 4 + 'px',
                height: Math.random() * 8 + 4 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                y: [-30, -60, -30],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-150"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-full shadow-2xl">
                <Shield size={56} />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 max-w-5xl mx-auto"
          >
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              AI Powered Water Cannon
            </span>
            <br />
            <span className="text-white">for Fighting Drones</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            AI-powered drone detection and neutralization system designed for urban environments during peace time 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          >
            <motion.a
              href="#waitlist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center justify-center gap-3"
            >
              Get Protected Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.button
              onClick={openVideo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40 font-semibold py-4 px-10 rounded-full text-lg transition-all flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>

        </div>
      </section>

      {/* Video Lightbox */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeVideo}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
            >
              <X size={24} />
            </button>
            <iframe
              src="https://www.youtube.com/embed/DtMVeD4d63c?autoplay=1"
              title="Demo Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Hero;