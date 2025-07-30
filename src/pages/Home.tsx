import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Phone, 
  Globe, 
  Truck, 
  MessageSquare, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Users, 
  Star,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const Home: React.FC = () => {
  const apps = [
    {
      name: 'KAAI Platform',
      path: '/kaai-platform',
      icon: Brain,
      emoji: '🧠',
      description: 'Enterprise-Grade AI Content Optimization with 10+ provider integration',
      status: '90% Complete',
      completion: 90,
      value: '$850K',
      features: ['Multi-AI Integration (10+ providers)', 'Semantic SEO & E-E-A-T', 'Batch Processing (30K+ pages)', 'Voice Search Optimization'],
      gradient: 'ff-bg-cosmic',
      launchWeeks: 4,
      users: '30,247+',
      metrics: { uptime: '99.94%', quality: '89.2/100', speed: '420 pages/hour' }
    },
    {
      name: 'CallMart Intelligence',
      path: '/callmart-intelligence',
      icon: Phone,
      emoji: '📞',
      description: 'Enterprise Call Center Intelligence with 95.3% accuracy & 588 processed calls',
      status: '85% Complete',
      completion: 85,
      value: '$720K',
      features: ['Call Analytics (588 recordings)', 'AI Agent Coaching', 'Voice Search Engine', 'Real-time Sentiment Analysis'],
      gradient: 'ff-bg-energy',
      launchWeeks: 6,
      users: '450+ agents',
      metrics: { accuracy: '95.3%', processed: '350K+ calls', improvement: '23% conversion' }
    },
    {
      name: 'ISP Analytics',
      path: '/isp-analytics',
      icon: Globe,
      emoji: '🌐',
      description: 'AI-Powered ISP Comparison Platform covering 50K+ ZIP codes',
      status: '90% Complete',
      completion: 90,
      value: '$650K',
      features: ['ZIP Code Coverage (50K+)', 'AI Assistant Integration', 'Interactive Mapping', '25+ ISP Providers'],
      gradient: 'ff-bg-energy',
      launchWeeks: 3,
      users: '1,247 daily',
      metrics: { coverage: '50K+ ZIPs', accuracy: '99.2%', conversion: '34.7%' }
    },
    {
      name: 'EasyMovee Platform',
      path: '/easymovee',
      icon: Truck,
      emoji: '🚚',
      description: 'AI-Powered Moving Platform with 80% stress reduction & comprehensive CRM',
      status: '80% Complete',
      completion: 80,
      value: '$480K',
      features: ['AI Stress Companion', 'Professional CRM (25+ tables)', 'Smart Automation', 'Utility Coordination'],
      gradient: 'ff-bg-flame',
      launchWeeks: 8,
      users: '25+ database tables',
      metrics: { stressReduction: '80%', efficiency: '60%', success: '95.3%' }
    },
    {
      name: 'Dual Chat AI',
      path: '/dual-chat-ai',
      icon: MessageSquare,
      emoji: '💬',
      description: 'Multi-Provider AI Orchestration with 99.5% uptime & intelligent fallbacks',
      status: '85% Complete',
      completion: 85,
      value: '$300K',
      features: ['9 AI Providers', 'Intelligent Fallbacks', 'Cost Optimization (70%)', 'Performance Monitoring'],
      gradient: 'ff-bg-cosmic',
      launchWeeks: 5,
      users: '1,000+ concurrent',
      metrics: { uptime: '99.5%', costSaving: '70%', responseTime: '2.3s' }
    },
    {
      name: 'BPO Reconciliation',
      path: '/bpo-reconciliation',
      icon: CheckCircle,
      emoji: '⚡',
      description: 'Enterprise Payroll Reconciliation with 100% SSN accuracy & 8 districts',
      status: '100% Complete',
      completion: 100,
      value: '$250K',
      features: ['100% SSN Accuracy', '8 Districts Supported', '95% Time Reduction', 'Real-time Progress'],
      gradient: 'ff-bg-energy',
      launchWeeks: 0,
      users: 'Production Active',
      metrics: { accuracy: '100%', timeReduction: '95%', districts: '8 active' }
    },
    {
      name: 'Projectile Onit',
      path: '/projectile-onit',
      icon: Zap,
      emoji: '🚀',
      description: '3D Project Management Platform with AI assistant & galaxy visualization',
      status: '60% Complete',
      completion: 60,
      value: 'Innovation Project',
      features: ['3D Galaxy Dashboard', 'AI-Powered Assistant', 'JWT Security', 'Real-time Updates'],
      gradient: 'ff-bg-cosmic',
      launchWeeks: 2,
      users: 'Beta Testing',
      metrics: { responseTime: '103ms', performance: '5/5 stars', uptime: '100%' }
    }
  ];

  const stats = [
    { label: 'Total Portfolio Value', value: '$2.8M', icon: TrendingUp, color: 'ff-tech-text' },
    { label: 'Applications Suite', value: '7', icon: Zap, color: 'ff-tech-text' },
    { label: 'AI Providers Integrated', value: '15+', icon: Brain, color: 'ff-tech-text' },
    { label: 'Average Completion', value: '85%', icon: Star, color: 'ff-tech-text' },
  ];

  const features = [
    'Enterprise-grade scalability',
    'Multi-AI provider integration',
    'Real-time analytics dashboard',
    'Advanced security protocols',
    'Microservices architecture',
    'Cloud-native deployment'
  ];

  return (
    <div className="min-h-screen ff-hex-pattern">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden ff-circuit">
        {/* Retro-Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-space-black via-space-darker to-space-black"></div>
        
        {/* Particle System */}
        <div className="ff-particles">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="ff-particle"
              animate={{
                y: [0, -200, 0],
                x: [0, Math.random() * 400 - 200, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                delay: i * 0.8,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-9xl font-black mb-6">
              <span className="ff-title ff-hologram">DCS</span>
              <br />
              <span className="ff-title text-white">APP SUITE</span>
            </h1>
            
            <p className="text-xl md:text-2xl ff-subtitle mb-8 max-w-4xl mx-auto leading-relaxed">
              <span className="ff-tech-text">REVOLUTIONARY AI-POWERED ECOSYSTEM</span>
              <br />
              Transforming industries with
              <span className="gradient-text-success font-semibold"> 15+ AI providers</span>,
              <span className="gradient-text-warning font-semibold"> $2.8M portfolio value</span>, and
              <span className="ff-hologram font-semibold"> enterprise-grade intelligence</span>
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="glass ff-circuit p-6 text-center group hover:scale-105 transition-transform duration-300"
                >
                  <stat.icon className={`w-10 h-10 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold ff-hologram mb-1">{stat.value}</div>
                  <div className="text-sm ff-tech-text">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/overview"
                className="ff-btn-primary flex items-center space-x-3 group text-lg px-8 py-4"
              >
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button className="ff-btn-secondary flex items-center space-x-3 text-lg px-8 py-4">
                <ExternalLink className="w-5 h-5" />
                <span>TECHNICAL SPECS</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-primary-400 to-transparent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Applications Grid */}
      <section className="py-24 relative ff-hex-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-space-black to-space-darker"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="ff-title ff-hologram">ENTERPRISE APPLICATIONS</span>
            </h2>
            <p className="text-xl ff-subtitle max-w-4xl mx-auto">
              <span className="ff-tech-text">COMPREHENSIVE AI-POWERED ECOSYSTEM</span>
              <br />
              Revolutionary solutions engineered for enterprise-scale operations with
              <span className="gradient-text-success"> real performance metrics</span> and
              <span className="gradient-text-warning"> proven ROI</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={app.path} className="block">
                  <div className="glass ff-circuit rounded-3xl p-8 h-full hover:scale-105 transition-all duration-500 relative overflow-hidden">
                    {/* Progress Ring */}
                    <div className="absolute top-6 right-6">
                      <div className="relative w-20 h-20">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="rgba(96, 165, 250, 0.1)"
                            strokeWidth="6"
                            fill="none"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="url(#ff-progress-gradient)"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 40}`}
                            strokeDashoffset={`${2 * Math.PI * 40 * (1 - app.completion / 100)}`}
                            className="transition-all duration-1000 drop-shadow-[0_0_10px_rgba(0,217,255,0.5)]"
                          />
                          <defs>
                            <linearGradient id="ff-progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#00D9FF" />
                              <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold ff-tech-text">{app.completion}%</span>
                        </div>
                      </div>
                    </div>

                    {/* App Icon & Title */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-20 h-20 ${app.gradient} rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 border-2 border-blue-400/30`}>
                        {app.emoji}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold ff-title text-white group-hover:text-blue-300 transition-colors duration-300">
                          {app.name}
                        </h3>
                        <p className="text-sm ff-tech-text">{app.status}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="ff-subtitle mb-6 leading-relaxed">
                      {app.description}
                    </p>

                    {/* Real Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6 bg-black/20 rounded-xl p-4 border border-blue-500/20">
                      {app.metrics && Object.entries(app.metrics).map(([key, value], idx) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold ff-hologram">{value}</div>
                          <div className="text-xs ff-tech-text capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Key Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold gradient-text-success">{app.value}</div>
                        <div className="text-xs ff-tech-text">Valuation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold gradient-text-warning">{app.launchWeeks}w</div>
                        <div className="text-xs ff-tech-text">To Launch</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold gradient-text">{app.users}</div>
                        <div className="text-xs ff-tech-text">Scale</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {app.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm ff-subtitle">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium ff-tech-text group-hover:text-blue-300 transition-colors duration-300">
                        DEEP DIVE ANALYSIS
                      </span>
                      <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-24 relative ff-circuit">
        <div className="absolute inset-0 bg-gradient-to-b from-space-darker to-space-black"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="ff-title ff-hologram">TECHNICAL EXCELLENCE</span>
              </h2>
              <p className="text-xl ff-subtitle mb-8 leading-relaxed">
                <span className="ff-tech-text">ENTERPRISE-GRADE ARCHITECTURE</span>
                <br />
                Built with cutting-edge technology and designed for massive scale operations, 
                delivering quantifiable results and proven ROI across all systems.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="ff-subtitle text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass ff-circuit rounded-3xl p-8">
                <h3 className="text-2xl font-bold ff-title text-white mb-6">ECOSYSTEM METRICS</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-blue-500/20 pb-2">
                    <span className="ff-tech-text">Total Development Investment</span>
                    <span className="text-2xl font-bold gradient-text">$1.04M+</span>
                  </div>
                  
                  <div className="flex justify-between items-center border-b border-blue-500/20 pb-2">
                    <span className="ff-tech-text">AI Providers Integrated</span>
                    <span className="text-2xl font-bold gradient-text-success">15+</span>
                  </div>
                  
                  <div className="flex justify-between items-center border-b border-blue-500/20 pb-2">
                    <span className="ff-tech-text">Average System Uptime</span>
                    <span className="text-2xl font-bold gradient-text-warning">99.6%</span>
                  </div>
                  
                  <div className="flex justify-between items-center border-b border-blue-500/20 pb-2">
                    <span className="ff-tech-text">Total Addressable Market</span>
                    <span className="text-2xl font-bold ff-hologram">$17.7B</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-blue-500/30 bg-black/30 rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold ff-hologram mb-2">$2.8M</div>
                    <div className="ff-tech-text">Conservative Portfolio Valuation</div>
                    <div className="text-sm text-green-400 mt-2 ff-subtitle">Based on real development metrics & market analysis</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative ff-hex-pattern">
        <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-darker to-space-black"></div>
        <div className="ff-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="ff-particle"
              animate={{
                y: [0, -150, 0],
                x: [0, Math.random() * 300 - 150, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="ff-title ff-hologram">READY TO TRANSFORM</span>
              <br />
              <span className="ff-title text-white">YOUR ENTERPRISE?</span>
            </h2>
            <p className="text-xl ff-subtitle mb-12 leading-relaxed max-w-4xl mx-auto">
              <span className="ff-tech-text">ENTERPRISE-GRADE AI ECOSYSTEM</span>
              <br />
              Experience the power of our comprehensive AI-driven solutions designed to scale 
              with <span className="gradient-text-success">proven metrics</span> and 
              <span className="gradient-text-warning">real ROI</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link to="/overview" className="ff-btn-primary flex items-center space-x-3 group text-lg px-10 py-5">
                <span>VIEW COMPLETE ECOSYSTEM</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button className="ff-btn-secondary flex items-center space-x-3 text-lg px-10 py-5">
                <span>TECHNICAL DEEP DIVE</span>
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;