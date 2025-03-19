import { Park } from '@/types/park';

export const minnesotaParks: Park[] = [
  {
    id: 'voyageurs',
    name: 'Voyageurs National Park',
    description: 'A water-based park known for its beautiful lakes, islands, and rich history of fur trading.',
    location: {
      state: 'Minnesota',
      coordinates: {
        latitude: 48.5000,
        longitude: -92.5000
      }
    },
    established: '1975',
    size: '218,055 acres',
    highlights: [
      'Kabetogama Lake',
      'Rainy Lake',
      'Historic Sites'
    ],
    activities: [
      'Canoeing',
      'Fishing',
      'Camping',
      'Wildlife Watching'
    ],
    bestTimeToVisit: 'May to September',
    hikingTrails: [
      {
        name: 'Kabetogama Peninsula Trail',
        difficulty: 'Moderate',
        length: '3 miles round trip',
        elevationGain: '100 feet',
        description: 'A scenic trail with views of Kabetogama Lake and opportunities for wildlife viewing.'
      }
    ],
    airports: [
      {
        name: 'Falls International Airport',
        code: 'INL',
        distance: '30 miles',
        driveTime: '45 minutes'
      }
    ],
    nearbyCities: [
      {
        name: 'International Falls',
        state: 'Minnesota',
        distance: '30 miles',
        driveTime: '45 minutes'
      }
    ]
  },
  {
    id: 'split-rock-lighthouse',
    name: 'Split Rock Lighthouse State Park',
    description: 'Home to the iconic Split Rock Lighthouse, this park offers stunning views of Lake Superior and beautiful hiking trails.',
    location: {
      state: 'Minnesota',
      coordinates: {
        latitude: 47.6631,
        longitude: -91.3840
      }
    },
    established: '1961',
    size: '2,500 acres',
    highlights: [
      'Split Rock Lighthouse',
      'Lake Superior Shoreline',
      'Hiking Trails'
    ],
    activities: [
      'Hiking',
      'Camping',
      'Fishing',
      'Wildlife Watching'
    ],
    bestTimeToVisit: 'May to October',
    hikingTrails: [
      {
        name: 'Split Rock River Loop',
        difficulty: 'Moderate',
        length: '2.5 miles loop',
        elevationGain: '300 feet',
        description: 'A loop trail with views of the Split Rock River and Lake Superior.'
      }
    ],
    airports: [
      {
        name: 'Duluth International Airport',
        code: 'DLH',
        distance: '50 miles',
        driveTime: '1 hour'
      }
    ],
    nearbyCities: [
      {
        name: 'Two Harbors',
        state: 'Minnesota',
        distance: '15 miles',
        driveTime: '20 minutes'
      }
    ]
  }
]; 