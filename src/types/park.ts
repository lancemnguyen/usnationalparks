export interface Park {
  id: string;
  name: string;
  description: string;
  location: {
    state: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  established: string;
  size: string;
  highlights: string[];
  activities: string[];
  bestTimeToVisit: string;
  hikingTrails: {
    name: string;
    difficulty: 'Easy' | 'Moderate' | 'Strenuous';
    length: string;
    elevationGain: string;
    description: string;
  }[];
  airports: {
    name: string;
    code: string;
    distance: string;
    driveTime: string;
  }[];
  nearbyCities: {
    name: string;
    state: string;
    distance: string;
    driveTime: string;
  }[];
} 