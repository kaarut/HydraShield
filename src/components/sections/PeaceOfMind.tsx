import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSectionScroll } from '../../contexts/SectionScrollContext';
import { ShieldCheck } from 'lucide-react';

const PeaceOfMind: React.FC = () => {
  const { registerSection } = useSectionScroll();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    registerSection('peaceofmind');
  }, [registerSection]);

  return (
    <section
      id="peaceofmind"
      ref={ref}
      className="min-h-screen w-full snap-start bg-gradient-to-br from-blue-900 to-indigo-900 py-24 flex items-center justify-center text-white"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ opacity: 0.1 }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 10 + 2 + 'px',
              height: Math.random() * 10 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-10 md:p-16 shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-10">
            <motion.div
              className="bg-orange-500 text-white p-5 rounded-full"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
            >
              <ShieldCheck size={48} />
            </motion.div>
          </div>

          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              "The only device that works without Internet, Electricity, or Phone Signal."
            </h2>
            <p className="text-xl text-blue-200">
              Because when it matters most, nothing else should fail.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Battery Backup',
                description: 'Integrated lithium battery provides days of continuous operation.',
                delay: 0.6,
              },
              {
                title: 'Early Warning System',
                description: 'Stay connected. Stay safe. Even when everything else goes dark.',
                delay: 0.8,
              },
              {
                title: 'Emergency SOS',
                description: 'Send distress signals even when all other communications fail.',
                delay: 1.0,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-200">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a
              href="#waitlist"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-orange-500/30"
            >
              Secure Your Family's Safety
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default PeaceOfMind;