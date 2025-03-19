import { Park } from '@/types/park';

export const northDakotaParks: Park[] = [
  {
    id: 'theodore-roosevelt',
    name: 'Theodore Roosevelt National Park',
    description: 'Known for its stunning badlands, wildlife, and rich history, this park honors the legacy of President Theodore Roosevelt.',
    location: {
      state: 'North Dakota',
      coordinates: {
        latitude: 46.9750,
        longitude: -103.5000
      }
    },
    established: '1978',
    size: '70,446 acres',
    highlights: [
      'Badlands',
      'Wildlife Viewing',
      'Scenic Drives'
    ],
    activities: [
      'Hiking',
      'Camping',
      'Wildlife Watching',
      'Photography'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Caprock Coulee Trail',
        difficulty: 'Moderate',
        length: '2.5 miles round trip',
        elevationGain: '300 feet',
        description: 'A scenic trail with views of the badlands and opportunities to see wildlife.'
      }
    ],
    airports: [
      {
        name: 'Williston Basin International Airport',
        code: 'XWA',
        distance: '60 miles',
        driveTime: '1 hour'
      }
    ],
    nearbyCities: [
      {
        name: 'Medora',
        state: 'North Dakota',
        distance: '5 miles',
        driveTime: '10 minutes'
      }
    ]
  },
  {
    id: 'fort-union',
    name: 'Fort Union Trading Post National Historic Site',
    description: 'A historic site that preserves the history of the fur trade in the 19th century, offering insights into the lives of traders and Native Americans.',
    location: {
      state: 'North Dakota',
      coordinates: {
        latitude: 47.1000,
        longitude: -104.0000
      }
    },
    established: '1966',
    size: '1,200 acres',
    highlights: [
      'Historic Fort',
      'Visitor Center',
      'Cultural Programs'
    ],
    activities: [
      'Historical Tours',
      'Wildlife Viewing',
      'Photography'
    ],
    bestTimeToVisit: 'Summer',
    hikingTrails: [],
    airports: [
      {
        name: 'Williston Basin International Airport',
        code: 'XWA',
        distance: '50 miles',
        driveTime: '1 hour'
      }
    ],
    nearbyCities: [
      {
        name: 'Williston',
        state: 'North Dakota',
        distance: '50 miles',
        driveTime: '1 hour'
      }
    ]
  }
]; 