import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Mail, MessageCircle, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { useSectionScroll } from '../../contexts/SectionScrollContext';

const Footer: React.FC = () => {
  const { registerSection } = useSectionScroll();

  useEffect(() => {
    registerSection('footer');
  }, [registerSection]);

  const links = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#comparison' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Distributors', href: '#' },
    ],
    resources: [
      { name: 'Disaster Preparedness', href: '#' },
      { name: 'Community Safety', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Support', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Accessibility', href: '#' },
    ],
  };

  const socialIcons = [
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer id="footer" className="bg-gray-900 text-white py-20 snap-start">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <AlertTriangle className="text-orange-500" size={28} />
              <span className="font-bold text-2xl">HydroShield</span>
            </div>
            <p className="text-white mb-6 max-w-xs">
              Helping families stay safe and connected during natural disasters with innovative, reliable technology.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              {links.product.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} AlertBox. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;