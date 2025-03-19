'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Park } from '@/types/park';
import HikingTrails from '@/components/park/HikingTrails';
import Airports from '@/components/park/Airports';
import NearbyCities from '@/components/park/NearbyCities';

interface ParkPageContentProps {
  park: Park;
  state: string;
  displayName: string;
}

export default function ParkPageContent({ park, state, displayName }: ParkPageContentProps) {
  return (
    <div className="relative min-h-screen p-8">
      <Link
        href={`/state/${state.toLowerCase()}`}
        className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Back to {displayName} Parks
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">
            {park.name}
          </h1>
          <p className="text-gray-300">
            {park.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">About</h2>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold text-white">Established:</span> {park.established}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-white">Size:</span> {park.size}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-white">Location:</span> {park.location.state}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-white">Best Time to Visit:</span> {park.bestTimeToVisit}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Highlights</h2>
            <ul className="space-y-2">
              {park.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-white mr-2">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Activities</h2>
          <div className="flex flex-wrap gap-2">
            {park.activities.map((activity, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 rounded-full text-white"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>

        <HikingTrails trails={park.hikingTrails} />
        <Airports airports={park.airports} />
        <NearbyCities cities={park.nearbyCities} />
      </motion.div>
    </div>
  );
} 