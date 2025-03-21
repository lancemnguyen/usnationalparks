'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Background from '@/components/Background';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative min-h-screen">
      <Background />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            US National Parks
          </h1>
          <p className="text-xl text-gray-200">
            Discover America&apos;s natural treasures
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-2xl"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a national park..."
              className="w-full px-6 py-4 text-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
            <MagnifyingGlassIcon className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-300" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300">
            Browse by state using the sidebar, or search for a specific park above
          </p>
        </motion.div>
      </div>
    </div>
  );
}
