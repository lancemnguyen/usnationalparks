import { Park } from '@/types/park';
import Link from 'next/link';

interface ParkCardProps {
  park: Park;
}

export default function ParkCard({ park }: ParkCardProps) {
  return (
    <Link 
      href={`/state/${park.location.state.toLowerCase().replace(/\s+/g, '')}/park/${park.id}`}
      className="block bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-colors h-[400px]"
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-2">{park.name}</h2>
          <p className="text-gray-300 mb-4 line-clamp-3">{park.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400">Established</h3>
              <p className="text-white">{park.established}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400">Size</h3>
              <p className="text-white">{park.size}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Highlights</h3>
            <div className="flex flex-wrap gap-2">
              {park.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 