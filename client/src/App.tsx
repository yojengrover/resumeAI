import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Briefcase } from 'lucide-react';
import PromptPage from './pages/PromptPage';
import JobsPage from './pages/JobsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 fixed w-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Prompt
                </Link>
                <Link
                  to="/jobs"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  Jobs
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16"
        >
          <Routes>
            <Route path="/" element={<PromptPage />} />
            <Route path="/jobs" element={<JobsPage />} />
          </Routes>
        </motion.div>
      </div>
    </BrowserRouter>
  );
}

export default App;