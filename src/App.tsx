import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import KAAIPlatform from './pages/KAAIPlatform';
import CallMartIntelligence from './pages/CallMartIntelligence';
import ISPAnalytics from './pages/ISPAnalytics';
import EasyMovee from './pages/EasyMovee';
import DualChatAI from './pages/DualChatAI';
import Overview from './pages/Overview';

function App() {
  return (
    <Router>
      <div className="App bg-dark-950 min-h-screen text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/kaai-platform" element={<KAAIPlatform />} />
            <Route path="/callmart-intelligence" element={<CallMartIntelligence />} />
            <Route path="/isp-analytics" element={<ISPAnalytics />} />
            <Route path="/easymovee" element={<EasyMovee />} />
            <Route path="/dual-chat-ai" element={<DualChatAI />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;