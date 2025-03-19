import { Park } from '@/types/park';

interface AirportsProps {
  airports: Park['airports'];
}

export default function Airports({ airports }: AirportsProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Nearby Airports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {airports.map((airport, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white mb-1">{airport.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-gray-400">{airport.code}</span>
              <span className="text-gray-500">•</span>
              <span className="text-sm text-gray-400">{airport.distance}</span>
            </div>
            <p className="text-sm text-gray-400">Drive time: {airport.driveTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 