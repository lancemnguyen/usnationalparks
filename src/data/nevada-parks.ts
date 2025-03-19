import { Park } from '@/types/park';

export const nevadaParks: Park[] = [
  {
    id: 'great-basin',
    name: 'Great Basin National Park',
    description: 'A diverse landscape featuring ancient bristlecone pines, the Lehman Caves, and Wheeler Peak, Nevada\'s second highest mountain.',
    location: {
      state: 'Nevada',
      coordinates: {
        latitude: 38.9859,
        longitude: -114.2166
      }
    },
    established: '1986',
    size: '77,180 acres',
    highlights: [
      'Wheeler Peak',
      'Lehman Caves',
      'Bristlecone Pine Grove',
      'Stella Lake',
      'Lexington Arch'
    ],
    activities: [
      'Cave Tours',
      'Hiking',
      'Stargazing',
      'Scenic Drives',
      'Photography'
    ],
    bestTimeToVisit: 'May to October',
    hikingTrails: [
      {
        name: 'Bristlecone Pine Trail',
        difficulty: 'Moderate',
        length: '2.8 miles round trip',
        elevationGain: '600 feet',
        description: 'Trail through groves of ancient bristlecone pines.'
      },
      {
        name: 'Wheeler Peak Summit Trail',
        difficulty: 'Strenuous',
        length: '8.6 miles round trip',
        elevationGain: '2,900 feet',
        description: 'Challenging trail to the summit of Wheeler Peak.'
      },
      {
        name: 'Alpine Lakes Loop',
        difficulty: 'Moderate',
        length: '2.7 miles round trip',
        elevationGain: '600 feet',
        description: 'Trail passing Stella and Teresa Lakes.'
      }
    ],
    airports: [
      {
        name: 'Elko Regional Airport',
        code: 'EKO',
        distance: '150 miles',
        driveTime: '3 hours'
      },
      {
        name: 'Cedar City Regional Airport',
        code: 'CDC',
        distance: '180 miles',
        driveTime: '3.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Baker',
        state: 'Nevada',
        distance: '5 miles',
        driveTime: '10 minutes'
      },
      {
        name: 'Ely',
        state: 'Nevada',
        distance: '65 miles',
        driveTime: '1.5 hours'
      },
      {
        name: 'Delta',
        state: 'Utah',
        distance: '90 miles',
        driveTime: '2 hours'
      }
    ]
  }
]; 