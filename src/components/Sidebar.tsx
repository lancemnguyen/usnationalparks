'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon } from '@heroicons/react/24/outline';

const states = [
  'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Florida', 
  'Hawaii', 'Idaho', 'Indiana', 'Kentucky', 'Maine', 'Michigan', 'Minnesota', 
  'Missouri', 'Montana', 'Nevada', 'New Mexico', 'North Carolina', 'North Dakota', 
  'Ohio', 'Oregon', 'South Carolina', 'South Dakota', 'Tennessee', 
  'Texas', 'Utah', 'Virginia', 'Washington', 'West Virginia', 'Wyoming'
].sort();

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-56 bg-white/10 backdrop-blur-lg border-r border-white/20 h-screen flex flex-col">
      <div className="p-3 border-b border-white/20">
        <Link 
          href="/"
          className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
            pathname === '/' 
              ? 'bg-white/20 text-white' 
              : 'text-gray-200 hover:bg-white/10 hover:text-white'
          }`}
        >
          <HomeIcon className="w-5 h-5" />
          <span className="font-medium">Home</span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
          States
        </h2>
        <div className="space-y-1">
          {states.map((state) => (
            <Link
              key={state}
              href={`/state/${state.toLowerCase().replace(/\s+/g, '')}`}
              className={`block px-2 py-1.5 rounded-lg text-sm transition-colors ${
                pathname === `/state/${state.toLowerCase()}`
                  ? 'bg-white/20 text-white'
                  : 'text-gray-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              {state}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 