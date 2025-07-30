import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Route, 
  Package, 
  Calculator, 
  Users, 
  Clock, 
  MapPin, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Play,
  Star,
  Shield,
  Calendar
} from 'lucide-react';

const EasyMovee: React.FC = () => {
  const metrics = [
    { label: 'Moves Coordinated', value: '1,250+', icon: Truck, trend: '+45%' },
    { label: 'Active Users', value: '850', icon: Users, trend: '+32%' },
    { label: 'Route Efficiency', value: '+35%', icon: Route, trend: 'Improvement' },
    { label: 'Cost Savings', value: '28%', icon: Calculator, trend: 'Average' },
    { label: 'Customer Rating', value: '4.7/5', icon: Star, trend: '+0.4' },
    { label: 'On-Time Delivery', value: '94%', icon: Clock, trend: '+12%' }
  ];

  const features = [
    {
      icon: Route,
      title: 'Route Optimization',
      description: 'AI-powered route planning reducing travel time and fuel costs by up to 35%',
      metrics: 'Smart GPS Integration'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Comprehensive tracking system for all moving items with real-time updates',
      metrics: 'Barcode & QR Scanning'
    },
    {
      icon: Calculator,
      title: 'Cost Estimation',
      description: 'Accurate pricing calculator based on distance, items, and service requirements',
      metrics: '95% Price Accuracy'
    },
    {
      icon: Users,
      title: 'Customer Portal',
      description: 'User-friendly portal for booking, tracking, and managing moving services',
      metrics: '24/7 Self-Service'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-dark-950"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mb-6">
                <Truck className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl font-black mb-6">
              <span className="gradient-text">EasyMovee</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Intelligent moving services platform with route optimization, inventory management, 
              and customer portal delivering 35% efficiency improvements
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn-primary flex items-center space-x-2 group">
                <Play className="w-4 h-4" />
                <span>Live Demo</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Customer Portal</span>
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text-success">80%</div>
                <div className="text-sm text-gray-400">Complete</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text-warning">8 weeks</div>
                <div className="text-sm text-gray-400">To Launch</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold gradient-text">$580K</div>
                <div className="text-sm text-gray-400">Valuation</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-white">850</div>
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
              <span className="gradient-text">Platform Performance</span>
            </h2>
            <p className="text-xl text-gray-400">
              Optimizing moving operations with intelligent logistics solutions
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
                <metric.icon className="w-8 h-8 text-orange-400 mx-auto mb-4" />
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
              <span className="gradient-text">Smart Features</span>
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive tools for modern moving service management
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
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              Revolutionize Your Moving Business
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 850+ users optimizing their moving operations with intelligent logistics
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center space-x-2 group">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <span>View Features</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EasyMovee;