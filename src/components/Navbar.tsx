import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const apps = [
    { name: 'KAAI Platform', path: '/kaai-platform', icon: '🧠', desc: 'AI Content Intelligence' },
    { name: 'CallMart Intelligence', path: '/callmart-intelligence', icon: '📞', desc: 'Call Center Analytics' },
    { name: 'ISP Analytics', path: '/isp-analytics', icon: '🌐', desc: 'Internet Provider Intelligence' },
    { name: 'EasyMovee', path: '/easymovee', icon: '🚚', desc: 'Moving Services Platform' },
    { name: 'Dual Chat AI', path: '/dual-chat-ai', icon: '💬', desc: 'Multi-AI Orchestration' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'glass backdrop-blur-xl shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-hero-pattern rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="absolute inset-0 bg-hero-pattern rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold gradient-text">DCS</h1>
            <p className="text-xs text-gray-400 -mt-1">App Suite</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
              isActive('/') 
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Home
          </Link>

          <Link
            to="/overview"
            className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
              isActive('/overview') 
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Overview
          </Link>

          {/* Apps Dropdown */}
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium">
              <span>Apps</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: dropdownOpen ? 1 : 0, y: dropdownOpen ? 0 : 10 }}
              className={`absolute top-12 left-0 w-80 glass rounded-2xl shadow-2xl p-4 ${
                dropdownOpen ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              <div className="space-y-2">
                {apps.map((app) => (
                  <Link
                    key={app.path}
                    to={app.path}
                    className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group ${
                      isActive(app.path)
                        ? 'bg-primary-600/20 border border-primary-600/30'
                        : 'hover:bg-white/5 hover:border-white/10 border border-transparent'
                    }`}
                  >
                    <div className="text-2xl">{app.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                        {app.name}
                      </div>
                      <div className="text-sm text-gray-400">{app.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors duration-300"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        className="lg:hidden overflow-hidden"
      >
        <div className="pt-4 pb-6 space-y-4">
          <Link
            to="/"
            className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive('/') 
                ? 'bg-primary-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/overview"
            className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive('/overview') 
                ? 'bg-primary-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Overview
          </Link>

          <div className="border-t border-white/10 pt-4 mt-4">
            <div className="text-sm font-semibold text-gray-400 px-4 mb-3">Applications</div>
            {apps.map((app) => (
              <Link
                key={app.path}
                to={app.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(app.path)
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl">{app.icon}</span>
                <div>
                  <div className="font-medium">{app.name}</div>
                  <div className="text-sm opacity-70">{app.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;