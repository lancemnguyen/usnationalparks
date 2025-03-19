import { Park } from '@/types/park';

interface HikingTrailsProps {
  trails: Park['hikingTrails'];
}

export default function HikingTrails({ trails }: HikingTrailsProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Popular Hiking Trails</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trails.map((trail, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium text-white">{trail.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                trail.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                trail.difficulty === 'Moderate' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {trail.difficulty}
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-2">{trail.description}</p>
            <div className="flex gap-4 text-sm text-gray-400">
              <span>{trail.length}</span>
              <span>•</span>
              <span>{trail.elevationGain} gain</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 