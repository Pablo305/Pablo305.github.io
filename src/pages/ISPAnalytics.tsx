import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Wifi, 
  TrendingUp, 
  MapPin, 
  DollarSign, 
  Zap, 
  Signal, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Play,
  Star,
  Activity,
  Users
} from 'lucide-react';

const ISPAnalytics: React.FC = () => {
  const metrics = [
    { label: 'ISPs Analyzed', value: '2,500+', icon: Globe, trend: '+15%' },
    { label: 'Active Users', value: '3,100', icon: Users, trend: '+28%' },
    { label: 'Data Accuracy', value: '97.8%', icon: Activity, trend: '+1.2%' },
    { label: 'Coverage Areas', value: '95%', icon: MapPin, trend: '+8%' },
    { label: 'Speed Tests/Day', value: '50K+', icon: Zap, trend: '+22%' },
    { label: 'Cost Savings', value: '32%', icon: DollarSign, trend: 'Avg User' }
  ];

  const features = [
    {
      icon: Signal,
      title: 'Speed Analytics',
      description: 'Comprehensive internet speed testing and performance analysis across all major ISPs',
      metrics: '1M+ Tests Daily'
    },
    {
      icon: MapPin,
      title: 'Coverage Mapping',
      description: 'Detailed coverage maps showing ISP availability and service quality by location',
      metrics: '95% US Coverage'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Intelligent cost comparison and optimization recommendations',
      metrics: '32% Avg Savings'
    },
    {
      icon: BarChart3,
      title: 'Performance Benchmarks',
      description: 'Real-time performance benchmarking against industry standards',
      metrics: '50+ Metrics Tracked'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-cyan-900 to-dark-950"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center mb-6">
                <Globe className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl font-black mb-6">
              <span className="gradient-text">ISP Analytics</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive internet provider intelligence platform with 97.8% data accuracy, 
              real-time performance monitoring, and intelligent cost optimization
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn-primary flex items-center space-x-2 group">
                <Play className="w-4 h-4" />
                <span>Live Demo</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Coverage Map</span>
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text-success">90%</div>
                <div className="text-sm text-gray-400">Complete</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text-warning">3 weeks</div>
                <div className="text-sm text-gray-400">To Launch</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text">$720K</div>
                <div className="text-sm text-gray-400">Valuation</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-white">3,100</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
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
              <span className="gradient-text">Platform Metrics</span>
            </h2>
            <p className="text-xl text-gray-400">
              Real-time intelligence on internet service providers nationwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <metric.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                <div className="text-xs text-green-400 font-medium">{metric.trend}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-gradient-to-b from-transparent to-dark-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Core Features</span>
            </h2>
            <p className="text-xl text-gray-400">
              Advanced capabilities for comprehensive ISP analysis and optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-sm font-semibold gradient-text">{feature.metrics}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Optimize Your Internet Strategy
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 3,100+ users making data-driven ISP decisions with our intelligence platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center space-x-2 group">
                <span>Start Analysis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <span>View Coverage</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ISPAnalytics;