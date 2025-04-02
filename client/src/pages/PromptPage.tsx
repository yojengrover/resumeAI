import axios from 'axios';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

function PromptPage() {
  const [message, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:3000/updatedoc', { prompt: message })
      .then((response) => {
        console.log('Full Response:', response); // Log full response
       // console.log('Response Data:', response.data); // Log actual response data
      //  console.log('Extracted Response:', response.data.response); // Log nested property
  
        if (response.data && response.data.response) {
          setAnswer(response.data.response); // Extract the correct value
        } else {
          setAnswer("No response received"); // Fallback message
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4">
      <div className="grid grid-cols-1 gap-4 h-[calc(100vh-2rem)]">
        <div className="grid grid-cols-2 gap-4 h-[88%]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-4 border border-gray-200/50"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-3">Prompt</h2>
            <textarea
              value={message}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-[calc(100%-3.5rem)] resize-none rounded-xl border-gray-300 focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all duration-200"
              placeholder="Enter your prompt here..."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-4 border border-gray-200/50"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-3">Answer</h2>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full h-[calc(100%-3.5rem)] resize-none rounded-xl border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Answer will appear here..."
              readOnly
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-start h-[12%]"
        >
          <button
            onClick={handleSubmit}
            className="inline-flex items-center px-6 py-2.5 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Send className="w-5 h-5 mr-2" />
            Send
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default PromptPage;