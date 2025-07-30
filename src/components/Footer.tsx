import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const apps = [
    { name: 'KAAI Platform', path: '/kaai-platform' },
    { name: 'CallMart Intelligence', path: '/callmart-intelligence' },
    { name: 'ISP Analytics', path: '/isp-analytics' },
    { name: 'EasyMovee', path: '/easymovee' },
    { name: 'Dual Chat AI', path: '/dual-chat-ai' },
  ];

  const company = [
    { name: 'Overview', path: '/overview' },
    { name: 'About', path: '#' },
    { name: 'Careers', path: '#' },
    { name: 'Contact', path: '#' },
  ];

  const resources = [
    { name: 'Documentation', path: '#' },
    { name: 'API Reference', path: '#' },
    { name: 'Support', path: '#' },
    { name: 'Community', path: '#' },
  ];

  return (
    <footer className="relative bg-dark-900 border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-hero-pattern rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-hero-pattern rounded-xl blur-lg opacity-30"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold gradient-text">DCS App Suite</h2>
                <p className="text-sm text-gray-400">Revolutionary AI-Powered Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transforming businesses with cutting-edge AI technology. Our comprehensive suite of applications 
              delivers intelligent solutions for content creation, analytics, and automation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 glass rounded-lg">
                <div className="text-2xl font-bold gradient-text-success">5</div>
                <div className="text-xs text-gray-400">Apps Built</div>
              </div>
              <div className="text-center p-3 glass rounded-lg">
                <div className="text-2xl font-bold gradient-text-success">$2.8M</div>
                <div className="text-xs text-gray-400">Total Value</div>
              </div>
              <div className="text-center p-3 glass rounded-lg">
                <div className="text-2xl font-bold gradient-text-success">95%</div>
                <div className="text-xs text-gray-400">Avg Complete</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 glass rounded-lg hover:bg-white/10 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="p-2 glass rounded-lg hover:bg-white/10 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="p-2 glass rounded-lg hover:bg-white/10 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="mailto:contact@dcs.com" 
                className="p-2 glass rounded-lg hover:bg-white/10 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Applications</h3>
            <ul className="space-y-3">
              {apps.map((app) => (
                <li key={app.path}>
                  <Link
                    to={app.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    {app.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    {item.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    {item.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest updates on our AI-powered solutions.</p>
            </div>
            <div className="flex space-x-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-gray-400"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 DCS App Suite. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-white transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500 rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: '90%',
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;