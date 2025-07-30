import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Brain, 
  Zap, 
  Shield, 
  Activity, 
  Users, 
  Clock, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Play,
  Star,
  Cpu,
  Network
} from 'lucide-react';

const DualChatAI: React.FC = () => {
  const metrics = [
    { label: 'AI Providers', value: '9', icon: Brain, trend: 'Active' },
    { label: 'Active Users', value: '1,800', icon: Users, trend: '+42%' },
    { label: 'System Uptime', value: '99.7%', icon: Activity, trend: '+0.2%' },
    { label: 'Avg Response', value: '<200ms', icon: Clock, trend: '-15%' },
    { label: 'User Rating', value: '4.6/5', icon: Star, trend: '+0.3' },
    { label: 'Context Accuracy', value: '96.4%', icon: TrendingUp, trend: '+2.1%' }
  ];

  const aiProviders = [
    { name: 'OpenAI GPT-4', status: 'active', health: '99%' },
    { name: 'Claude 3.5 Sonnet', status: 'active', health: '98%' },
    { name: 'Google Gemini', status: 'active', health: '97%' },
    { name: 'Anthropic Claude', status: 'active', health: '99%' },
    { name: 'Cohere Command', status: 'active', health: '96%' },
    { name: 'Mistral AI', status: 'active', health: '95%' },
    { name: 'Together AI', status: 'active', health: '97%' },
    { name: 'Perplexity', status: 'active', health: '98%' },
    { name: 'Hugging Face', status: 'active', health: '94%' }
  ];

  const features = [
    {
      icon: Network,
      title: 'Multi-AI Routing',
      description: 'Intelligent routing system automatically selects optimal AI provider based on query type',
      metrics: '9 Providers Connected'
    },
    {
      icon: Brain,
      title: 'Context Preservation',
      description: 'Advanced context management maintaining conversation continuity across AI switches',
      metrics: '96.4% Context Accuracy'
    },
    {
      icon: Activity,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring of AI provider performance with automatic failover',
      metrics: '<200ms Response Time'
    },
    {
      icon: Shield,
      title: 'Fallback Systems',
      description: 'Redundant failover mechanisms ensuring 99.7% system availability',
      metrics: '3-Layer Redundancy'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-dark-950"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6">
                <MessageSquare className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl font-black mb-6">
              <span className="gradient-text">Dual Chat AI</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Multi-AI orchestration system with intelligent routing, context preservation, 
              and 99.7% uptime across 9 leading AI providers
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn-primary flex items-center space-x-2 group">
                <Play className="w-4 h-4" />
                <span>Live Demo</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>API Console</span>
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text-success">85%</div>
                <div className="text-sm text-gray-400">Complete</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text-warning">5 weeks</div>
                <div className="text-sm text-gray-400">To Launch</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text">$490K</div>
                <div className="text-sm text-gray-400">Valuation</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-white">1,800</div>
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
              <span className="gradient-text">System Performance</span>
            </h2>
            <p className="text-xl text-gray-400">
              Enterprise-grade multi-AI orchestration with intelligent routing
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
                <metric.icon className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                <div className="text-xs text-green-400 font-medium">{metric.trend}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Providers Grid */}
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
              <span className="gradient-text">Connected AI Providers</span>
            </h2>
            <p className="text-xl text-gray-400">
              Seamless integration with leading AI models and intelligent routing
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
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Health Score</span>
                  <span className="text-lg font-bold gradient-text-success">{provider.health}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
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
              <span className="gradient-text">Advanced Features</span>
            </h2>
            <p className="text-xl text-gray-400">
              Intelligent orchestration capabilities for seamless AI interactions
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
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              Experience Multi-AI Intelligence
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 1,800+ users leveraging the power of 9 AI providers in one unified platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center space-x-2 group">
                <span>Try Platform</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <span>View Console</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DualChatAI;