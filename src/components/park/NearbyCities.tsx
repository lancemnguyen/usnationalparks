import { Park } from '@/types/park';

interface NearbyCitiesProps {
  cities: Park['nearbyCities'];
}

export default function NearbyCities({ cities }: NearbyCitiesProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Nearby Cities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cities.map((city, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white mb-1">
              {city.name}, {city.state}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-400">{city.distance}</span>
              {city.driveTime !== 'N/A' && (
                <>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm text-gray-400">Drive time: {city.driveTime}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 