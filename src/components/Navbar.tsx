import React, { useState, useEffect } from 'react';
import { Menu, X, AlertTriangle } from 'lucide-react';
import { useSectionScroll } from '../contexts/SectionScrollContext';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const { activeSection, sections } = useSectionScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', section: 'hero' },
    { name: 'Product', section: 'product' },
    { name: 'Pricing', section: 'comparison' },
    { name: 'Features', section: 'features' },
    { name: 'Contact', section: 'footer' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="text-orange-500" size={28} />
            <span className={`font-bold text-xl ${isScrolled ? 'text-orange-600' : 'text-white'}`}>
              HydroShield
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className={`font-medium transition-colors duration-300 ${
                  activeSection === link.section
                    ? 'text-orange-500'
                    : isScrolled
                    ? 'text-gray-800 hover:text-orange-500'
                    : 'text-white hover:text-orange-300'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-orange-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          <button
            className={`rounded-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 font-medium hidden md:block transition-all duration-300 ${
              isScrolled ? 'shadow-md' : ''
            }`}
            onClick={() => scrollToSection('waitlist')}
          >
            Join Waitlist
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex justify-end p-6">
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} className="text-gray-800" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 p-8">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className={`font-medium text-lg ${
                  activeSection === link.section ? 'text-orange-500' : 'text-gray-800'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              className="rounded-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 font-medium w-full mt-4"
              onClick={() => scrollToSection('waitlist')}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;