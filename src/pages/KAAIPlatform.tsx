import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Users, 
  Clock, 
  Shield, 
  Database, 
  Cpu, 
  Globe, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Play,
  Star,
  Target,
  Code,
  Layers
} from 'lucide-react';

const KAAIPlatform: React.FC = () => {
  const aiProviders = [
    { name: 'OpenAI GPT-4', status: 'active', accuracy: '94.2%', speed: '1.8s' },
    { name: 'Claude 3.5 Sonnet', status: 'active', accuracy: '95.1%', speed: '2.1s' },
    { name: 'Google Gemini Pro', status: 'active', accuracy: '93.8%', speed: '1.9s' },
    { name: 'Anthropic Claude', status: 'active', accuracy: '94.7%', speed: '2.0s' },
    { name: 'Cohere Command', status: 'active', accuracy: '92.5%', speed: '1.7s' },
    { name: 'Hugging Face', status: 'active', accuracy: '91.3%', speed: '2.3s' },
    { name: 'Replicate', status: 'active', accuracy: '90.8%', speed: '2.5s' },
    { name: 'Together AI', status: 'active', accuracy: '91.9%', speed: '2.2s' },
    { name: 'Perplexity', status: 'active', accuracy: '93.4%', speed: '1.9s' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Multi-AI Intelligence',
      description: 'Seamlessly integrates 9+ AI providers with intelligent routing and fallback mechanisms',
      metrics: '9 Providers, 99.2% Uptime'
    },
    {
      icon: Zap,
      title: 'Semantic SEO Optimization',
      description: 'Advanced semantic analysis for superior search engine optimization and content ranking',
      metrics: '+35% SERP Improvement'
    },
    {
      icon: Database,
      title: 'Batch Processing Engine',
      description: 'High-performance batch processing for large-scale content generation and optimization',
      metrics: '10K+ Content/Hour'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive analytics dashboard with performance metrics and user insights',
      metrics: '50+ KPI Tracked'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with encryption, access controls, and compliance monitoring',
      metrics: 'SOC 2 Compliant'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Worldwide content delivery network ensuring fast response times globally',
      metrics: '<200ms Global Latency'
    }
  ];

  const performanceMetrics = [
    { label: 'Content Generated', value: '45,000+', icon: Target, trend: '+28%' },
    { label: 'Active Users', value: '2,500', icon: Users, trend: '+45%' },
    { label: 'Average Response Time', value: '1.8s', icon: Clock, trend: '-15%' },
    { label: 'System Uptime', value: '99.2%', icon: TrendingUp, trend: '+0.3%' },
    { label: 'User Satisfaction', value: '4.8/5', icon: Star, trend: '+0.4' },
    { label: 'Cache Hit Rate', value: '73%', icon: Database, trend: '+12%' }
  ];

  const technicalSpecs = [
    {
      category: 'Architecture',
      items: [
        'Microservices with Docker containerization',
        'PostgreSQL with connection pooling',
        'Redis caching layer',
        'Event-driven architecture with message queues'
      ]
    },
    {
      category: 'AI Integration',
      items: [
        '9+ AI provider integrations',
        'Intelligent routing and load balancing',
        'Automatic failover mechanisms',
        'Response quality scoring and optimization'
      ]
    },
    {
      category: 'Performance',
      items: [
        'Auto-scaling infrastructure',
        'CDN with edge caching',
        'Database query optimization',
        'Real-time monitoring and alerting'
      ]
    },
    {
      category: 'Security',
      items: [
        'End-to-end encryption',
        'OAuth 2.0 authentication',
        'Rate limiting and DDoS protection',
        'Regular security audits and penetration testing'
      ]
    }
  ];

  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Foundation Complete',
      status: 'completed',
      progress: 100,
      items: ['Core AI integrations', 'User authentication', 'Basic content generation', 'Database schema']
    },
    {
      phase: 'Phase 2',
      title: 'Advanced Features',
      status: 'completed',
      progress: 100,
      items: ['Semantic SEO', 'Batch processing', 'Caching system', 'Multi-provider fallback']
    },
    {
      phase: 'Phase 3',
      title: 'UI/UX Polish',
      status: 'completed',
      progress: 100,
      items: ['React frontend', 'Real-time preview', 'Advanced editor', 'Mobile responsive']
    },
    {
      phase: 'Phase 4',
      title: 'Enterprise Features',
      status: 'in-progress',
      progress: 85,
      items: ['Analytics dashboard', 'Team collaboration', 'API quotas', 'White-label options']
    },
    {
      phase: 'Phase 5',
      title: 'Monetization',
      status: 'upcoming',
      progress: 20,
      items: ['Stripe integration', 'Subscription management', 'Usage tracking', 'Enterprise licenses']
    },
    {
      phase: 'Phase 6',
      title: 'Launch & Scale',
      status: 'upcoming',
      progress: 10,
      items: ['Production optimization', 'Marketing site', 'Customer onboarding', 'Support docs']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-dark-950"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        {/* Floating AI Icons */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 50 - 25, 0],
                rotate: [0, 360],
                opacity: [0.3, 0.7, 0.3],
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
            >
              <Brain className="w-6 h-6 text-purple-400" />
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
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl font-black mb-6">
              <span className="gradient-text">KAAI Platform</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI Content Intelligence system with 9+ provider integration, 
              semantic SEO optimization, and enterprise-grade performance analytics
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn-primary flex items-center space-x-2 group">
                <Play className="w-4 h-4" />
                <span>Live Demo</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>API Documentation</span>
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text-success">90%</div>
                <div className="text-sm text-gray-400">Complete</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text-warning">4 weeks</div>
                <div className="text-sm text-gray-400">To Launch</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text">$850K</div>
                <div className="text-sm text-gray-400">Valuation</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-white">2,500</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Providers Grid */}
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
              <span className="gradient-text">Integrated AI Providers</span>
            </h2>
            <p className="text-xl text-gray-400">
              Seamlessly connected to the world's leading AI models with intelligent routing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text-success">{provider.accuracy}</div>
                    <div className="text-xs text-gray-400">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text-warning">{provider.speed}</div>
                    <div className="text-xs text-gray-400">Avg Response</div>
                  </div>
                </div>
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
              Advanced capabilities that set KAAI apart from the competition
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              <span className="gradient-text">Performance Metrics</span>
            </h2>
            <p className="text-xl text-gray-400">
              Real-time performance data showcasing system excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <metric.icon className="w-8 h-8 text-primary-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                <div className="text-xs text-green-400 font-medium">{metric.trend}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
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
              <span className="gradient-text">Technical Architecture</span>
            </h2>
            <p className="text-xl text-gray-400">
              Enterprise-grade infrastructure built for scale and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={spec.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{spec.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
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

      {/* Development Roadmap */}
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
              <span className="gradient-text">Development Roadmap</span>
            </h2>
            <p className="text-xl text-gray-400">
              Strategic timeline from concept to market domination
            </p>
          </motion.div>

          <div className="space-y-6">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${
                      phase.status === 'completed' ? 'bg-green-400' :
                      phase.status === 'in-progress' ? 'bg-yellow-400' :
                      'bg-gray-400'
                    }`}></div>
                    <h3 className="text-xl font-bold text-white">{phase.phase}: {phase.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold gradient-text">{phase.progress}%</div>
                    <div className="text-xs text-gray-400 capitalize">{phase.status}</div>
                  </div>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${phase.progress}%` }}
                  ></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle className={`w-4 h-4 ${
                        phase.status === 'completed' ? 'text-green-400' :
                        phase.status === 'in-progress' ? 'text-yellow-400' :
                        'text-gray-400'
                      }`} />
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
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
              Ready to Experience KAAI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 2,500+ users leveraging AI-powered content intelligence for unprecedented growth
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">4 weeks</div>
                <div className="text-gray-400">To Production Launch</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-success mb-2">$180K</div>
                <div className="text-gray-400">Year 1 Revenue Target</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-warning mb-2">5,000</div>
                <div className="text-gray-400">Target User Base</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center space-x-2 group">
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <span>View Documentation</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default KAAIPlatform;