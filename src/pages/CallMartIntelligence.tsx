import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock, 
  Shield, 
  Mic, 
  Brain, 
  Target, 
  Award,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Play,
  Star,
  Headphones,
  MessageCircle,
  Activity
} from 'lucide-react';

const CallMartIntelligence: React.FC = () => {
  const callMetrics = [
    { label: 'Call Volume Analyzed', value: '125K+', icon: Phone, trend: '+32%' },
    { label: 'Active Agents', value: '1,200', icon: Users, trend: '+18%' },
    { label: 'Accuracy Score', value: '95.3%', icon: Target, trend: '+2.1%' },
    { label: 'Avg Resolution Time', value: '4.2min', icon: Clock, trend: '-12%' },
    { label: 'Customer Satisfaction', value: '4.9/5', icon: Star, trend: '+0.3' },
    { label: 'Quality Score', value: '94.7%', icon: Award, trend: '+5.2%' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Sentiment Analysis',
      description: 'Real-time emotional analysis of customer interactions with 95.3% accuracy',
      metrics: '12 Emotion States Detected'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive agent performance tracking with predictive insights',
      metrics: '50+ KPIs Monitored'
    },
    {
      icon: Mic,
      title: 'Speech Recognition',
      description: 'Advanced voice-to-text conversion with multi-language support',
      metrics: '22 Languages Supported'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Automated quality scoring and compliance monitoring system',
      metrics: '100% Call Coverage'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting for call volume and agent scheduling',
      metrics: '87% Prediction Accuracy'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Live dashboard with instant alerts and performance notifications',
      metrics: 'Sub-second Updates'
    }
  ];

  const analyticsFeatures = [
    {
      category: 'Call Analytics',
      items: [
        'Real-time call transcription and analysis',
        'Sentiment tracking throughout conversations',
        'Key phrase and topic identification',
        'Call outcome prediction and optimization'
      ]
    },
    {
      category: 'Agent Performance',
      items: [
        'Individual and team performance metrics',
        'Talk time and silence analysis',
        'Customer satisfaction correlation',
        'Coaching recommendations and insights'
      ]
    },
    {
      category: 'Quality Management',
      items: [
        'Automated quality scoring algorithms',
        'Compliance monitoring and reporting',
        'Custom evaluation criteria setup',
        'Historical trend analysis and benchmarking'
      ]
    },
    {
      category: 'Business Intelligence',
      items: [
        'Customer journey mapping and analysis',
        'Revenue impact correlation studies',
        'Operational efficiency optimization',
        'ROI measurement and improvement tracking'
      ]
    }
  ];

  const performanceData = [
    {
      metric: 'Call Resolution Rate',
      current: '92.4%',
      improvement: '+8.7%',
      benchmark: 'Industry: 84.2%'
    },
    {
      metric: 'First Call Resolution',
      current: '87.1%',
      improvement: '+12.3%',
      benchmark: 'Industry: 74.8%'
    },
    {
      metric: 'Customer Satisfaction',
      current: '4.9/5',
      improvement: '+0.6',
      benchmark: 'Industry: 4.1/5'
    },
    {
      metric: 'Agent Productivity',
      current: '156%',
      improvement: '+23%',
      benchmark: 'Baseline: 100%'
    }
  ];

  const integrations = [
    { name: 'Salesforce CRM', status: 'active', type: 'CRM Integration' },
    { name: 'Microsoft Teams', status: 'active', type: 'Communication' },
    { name: 'Zendesk', status: 'active', type: 'Support Platform' },
    { name: 'Slack', status: 'active', type: 'Team Communication' },
    { name: 'HubSpot', status: 'active', type: 'Marketing Hub' },
    { name: 'Twilio', status: 'active', type: 'Voice Platform' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-teal-900 to-dark-950"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        {/* Floating Call Icons */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                y: [0, -25, 0],
                x: [0, Math.random() * 40 - 20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 6 + i * 1.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Phone className="w-5 h-5 text-green-400" />
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl flex items-center justify-center mb-6">
                <Phone className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl font-black mb-6">
              <span className="gradient-text">CallMart Intelligence</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Advanced call center analytics platform with 95.3% accuracy in sentiment analysis, 
              real-time performance monitoring, and predictive quality assurance
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn-primary flex items-center space-x-2 group">
                <Play className="w-4 h-4" />
                <span>Live Demo</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Analytics Dashboard</span>
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text-success">85%</div>
                <div className="text-sm text-gray-400">Complete</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text-warning">6 weeks</div>
                <div className="text-sm text-gray-400">To Launch</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text">$650K</div>
                <div className="text-sm text-gray-400">Valuation</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-white">1,200</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics Dashboard */}
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
              <span className="gradient-text">Real-time Analytics</span>
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive metrics driving operational excellence and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {callMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <metric.icon className="w-8 h-8 text-green-400 mx-auto mb-4" />
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
              <span className="gradient-text">Intelligent Features</span>
            </h2>
            <p className="text-xl text-gray-400">
              AI-powered capabilities transforming call center operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-sm font-semibold gradient-text-success">{feature.metrics}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
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
              <span className="gradient-text">Performance Improvements</span>
            </h2>
            <p className="text-xl text-gray-400">
              Measurable impact on key business metrics vs industry benchmarks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {performanceData.map((data, index) => (
              <motion.div
                key={data.metric}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{data.metric}</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Current Performance</span>
                    <span className="text-2xl font-bold gradient-text-success">{data.current}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Improvement</span>
                    <span className="text-lg font-bold text-green-400">{data.improvement}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <span className="text-gray-400">Industry Benchmark</span>
                    <span className="text-sm text-gray-500">{data.benchmark}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-16 bg-gradient-to-b from-dark-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Advanced Analytics</span>
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive feature set for complete call center intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
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
              <span className="gradient-text">Platform Integrations</span>
            </h2>
            <p className="text-xl text-gray-400">
              Seamless connectivity with your existing business tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="text-sm text-gray-400">{integration.type}</div>
                <div className="text-xs text-green-400 font-medium mt-2">Active Integration</div>
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
              Transform Your Call Center Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 1,200+ agents already using CallMart Intelligence to exceed performance targets
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">6 weeks</div>
                <div className="text-gray-400">To Beta Launch</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-success mb-2">$120K</div>
                <div className="text-gray-400">Year 1 Revenue Target</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-warning mb-2">95.3%</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center space-x-2 group">
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <span>View Analytics</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CallMartIntelligence;