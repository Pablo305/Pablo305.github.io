import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Star, 
  ArrowRight,
  Brain,
  Phone,
  Globe,
  Truck,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Calendar,
  Target
} from 'lucide-react';

const Overview: React.FC = () => {
  const portfolioStats = [
    { 
      label: 'Total Portfolio Value', 
      value: '$2.8M', 
      change: '+15%', 
      trend: 'up',
      icon: DollarSign,
      description: 'Conservative estimate based on current development state'
    },
    { 
      label: 'Applications in Suite', 
      value: '5', 
      change: '100%', 
      trend: 'up',
      icon: Target,
      description: 'Production-ready AI-powered solutions'
    },
    { 
      label: 'Total Active Users', 
      value: '9.5K+', 
      change: '+28%', 
      trend: 'up',
      icon: Users,
      description: 'Across all platforms and applications'
    },
    { 
      label: 'Average Completion', 
      value: '86%', 
      change: '+12%', 
      trend: 'up',
      icon: TrendingUp,
      description: 'Ready for production deployment'
    },
    { 
      label: 'Development Hours', 
      value: '2,400+', 
      change: 'Ongoing', 
      trend: 'neutral',
      icon: Clock,
      description: 'Total engineering effort invested'
    },
    { 
      label: 'User Satisfaction', 
      value: '4.8/5', 
      change: '+0.3', 
      trend: 'up',
      icon: Star,
      description: 'Average rating across all applications'
    }
  ];

  const applications = [
    {
      name: 'KAAI Platform',
      path: '/kaai-platform',
      icon: Brain,
      emoji: '🧠',
      completion: 90,
      value: '$850K',
      users: '2,500',
      weeksToLaunch: 4,
      status: 'Production Ready',
      description: 'AI Content Intelligence with 9+ provider integration, semantic SEO optimization, and enterprise-grade analytics.',
      keyMetrics: {
        accuracy: '94.2%',
        responseTime: '1.8s',
        uptime: '99.2%'
      },
      revenueProjection: {
        year1: '$180K',
        year2: '$420K',
        year3: '$680K'
      },
      gradient: 'from-purple-500 to-blue-600'
    },
    {
      name: 'CallMart Intelligence',
      path: '/callmart-intelligence',
      icon: Phone,
      emoji: '📞',
      completion: 85,
      value: '$650K',
      users: '1,200',
      weeksToLaunch: 6,
      status: 'Beta Testing',
      description: 'Advanced call center analytics with sentiment analysis, quality scoring, and performance optimization.',
      keyMetrics: {
        accuracy: '95.3%',
        processing: '0.3s',
        satisfaction: '4.9/5'
      },
      revenueProjection: {
        year1: '$120K',
        year2: '$280K',
        year3: '$450K'
      },
      gradient: 'from-green-500 to-teal-600'
    },
    {
      name: 'ISP Analytics',
      path: '/isp-analytics',
      icon: Globe,
      emoji: '🌐',
      completion: 90,
      value: '$720K',
      users: '3,100',
      weeksToLaunch: 3,
      status: 'Production Ready',
      description: 'Comprehensive internet provider intelligence with coverage analysis, speed testing, and cost optimization.',
      keyMetrics: {
        dataPoints: '1M+',
        accuracy: '97.8%',
        coverage: '95%'
      },
      revenueProjection: {
        year1: '$150K',
        year2: '$350K',
        year3: '$520K'
      },
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'EasyMovee',
      path: '/easymovee',
      icon: Truck,
      emoji: '🚚',
      completion: 80,
      value: '$580K',
      users: '850',
      weeksToLaunch: 8,
      status: 'Development',
      description: 'Intelligent moving services platform with route optimization, inventory management, and customer portal.',
      keyMetrics: {
        efficiency: '+35%',
        costSaving: '28%',
        satisfaction: '4.7/5'
      },
      revenueProjection: {
        year1: '$90K',
        year2: '$210K',
        year3: '$380K'
      },
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'Dual Chat AI',
      path: '/dual-chat-ai',
      icon: MessageSquare,
      emoji: '💬',
      completion: 85,
      value: '$490K',
      users: '1,800',
      weeksToLaunch: 5,
      status: 'Beta Testing',
      description: 'Multi-AI orchestration system with intelligent routing, context preservation, and performance monitoring.',
      keyMetrics: {
        providers: '9',
        uptime: '99.7%',
        latency: '<200ms'
      },
      revenueProjection: {
        year1: '$80K',
        year2: '$190K',
        year3: '$320K'
      },
      gradient: 'from-pink-500 to-purple-600'
    }
  ];

  const milestones = [
    {
      quarter: 'Q1 2024',
      title: 'Foundation Complete',
      status: 'completed',
      items: [
        'Core architecture implementation',
        'AI provider integrations',
        'Database schema design',
        'Security framework'
      ]
    },
    {
      quarter: 'Q2 2024',
      title: 'Beta Launch',
      status: 'in-progress',
      items: [
        'KAAI Platform launch',
        'ISP Analytics deployment',
        'User feedback integration',
        'Performance optimization'
      ]
    },
    {
      quarter: 'Q3 2024',
      title: 'Market Expansion',
      status: 'upcoming',
      items: [
        'CallMart Intelligence launch',
        'Dual Chat AI deployment',
        'Enterprise features',
        'Scale infrastructure'
      ]
    },
    {
      quarter: 'Q4 2024',
      title: 'Full Portfolio',
      status: 'upcoming',
      items: [
        'EasyMovee launch',
        'Advanced analytics',
        'Partnership integrations',
        'Revenue optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"></div>
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-black mb-6">
              <span className="gradient-text">Portfolio Overview</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive analysis of our AI-powered application suite, 
              performance metrics, and strategic roadmap for market domination
            </p>
          </motion.div>

          {/* Portfolio Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {portfolioStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-primary-400" />
                  <div className={`flex items-center space-x-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-400' : 
                    stat.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {stat.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-300 mb-2">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Deep Dive */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Application Portfolio</span>
            </h2>
            <p className="text-xl text-gray-400">
              Detailed breakdown of our comprehensive AI solution suite
            </p>
          </motion.div>

          <div className="space-y-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* App Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${app.gradient} rounded-2xl flex items-center justify-center text-3xl`}>
                        {app.emoji}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{app.name}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm font-medium text-green-400">{app.status}</span>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-gray-400">{app.completion}% Complete</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{app.description}</p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(app.keyMetrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold gradient-text-success">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>

                    {/* Revenue Projections */}
                    <div className="bg-white/5 rounded-2xl p-4">
                      <h4 className="text-sm font-semibold text-white mb-3">Revenue Projections</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{app.revenueProjection.year1}</div>
                          <div className="text-xs text-gray-400">Year 1</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{app.revenueProjection.year2}</div>
                          <div className="text-xs text-gray-400">Year 2</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">{app.revenueProjection.year3}</div>
                          <div className="text-xs text-gray-400">Year 3</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Panel */}
                  <div className="space-y-6">
                    {/* Progress Circle */}
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="8"
                            fill="none"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="url(#gradient)"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 40}`}
                            strokeDashoffset={`${2 * Math.PI * 40 * (1 - app.completion / 100)}`}
                            className="transition-all duration-1000"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold text-white">{app.completion}%</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">Development Complete</div>
                    </div>

                    {/* Key Stats */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Valuation</span>
                        <span className="font-bold gradient-text">{app.value}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Active Users</span>
                        <span className="font-bold text-white">{app.users}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Launch Timeline</span>
                        <span className="font-bold gradient-text-warning">{app.weeksToLaunch} weeks</span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Link
                      to={app.path}
                      className="w-full btn-primary flex items-center justify-center space-x-2 group mt-6"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Strategic Roadmap</span>
            </h2>
            <p className="text-xl text-gray-400">
              Our timeline to market leadership and revenue optimization
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-purple-500 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.quarter}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="w-full lg:w-5/12">
                    <div className="glass rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-3 h-3 rounded-full ${
                          milestone.status === 'completed' ? 'bg-green-400' :
                          milestone.status === 'in-progress' ? 'bg-yellow-400' :
                          'bg-gray-400'
                        }`}></div>
                        <span className="text-sm font-medium text-gray-400">{milestone.quarter}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                      
                      <div className="space-y-2">
                        {milestone.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-2">
                            {milestone.status === 'completed' ? (
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            ) : milestone.status === 'in-progress' ? (
                              <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                            ) : (
                              <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            )}
                            <span className="text-sm text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className={`w-6 h-6 rounded-full border-4 ${
                      milestone.status === 'completed' ? 'bg-green-400 border-green-400' :
                      milestone.status === 'in-progress' ? 'bg-yellow-400 border-yellow-400' :
                      'bg-gray-400 border-gray-400'
                    } shadow-lg`}></div>
                  </div>

                  <div className="w-full lg:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Summary */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Investment Opportunity</h2>
            <p className="text-xl text-gray-300 mb-8">
              A comprehensive AI application portfolio positioned for explosive growth 
              in the rapidly expanding AI services market
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">$2.8M</div>
                <div className="text-gray-400">Conservative Valuation</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text-success mb-2">$620K</div>
                <div className="text-gray-400">Year 1 Revenue Target</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text-warning mb-2">5.2 weeks</div>
                <div className="text-gray-400">Average Time to Market</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Request Full Due Diligence
              </button>
              <button className="btn-secondary">
                Schedule Investor Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Overview;