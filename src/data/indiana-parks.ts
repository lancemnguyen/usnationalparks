import { Park } from '@/types/park';

export const indianaParks: Park[] = [
  {
    id: 'indiana-dunes',
    name: 'Indiana Dunes National Park',
    description: 'Located along the southern shore of Lake Michigan, this park features beautiful beaches, dunes, and diverse ecosystems.',
    location: {
      state: 'Indiana',
      coordinates: {
        latitude: 41.6000,
        longitude: -87.2000
      }
    },
    established: '2019',
    size: '15,349 acres',
    highlights: [
      'Mount Baldy',
      'West Beach',
      'Dune Succession Trail'
    ],
    activities: [
      'Hiking',
      'Bird Watching',
      'Swimming',
      'Camping'
    ],
    bestTimeToVisit: 'May to September',
    hikingTrails: [
      {
        name: 'Dune Succession Trail',
        difficulty: 'Moderate',
        length: '1.5 miles loop',
        elevationGain: '200 feet',
        description: 'A trail that showcases the unique dune ecosystems of the area.'
      },
      {
        name: 'Mount Baldy Trail',
        difficulty: 'Moderate',
        length: '1 mile round trip',
        elevationGain: '200 feet',
        description: 'A short hike to the top of Mount Baldy with stunning views of Lake Michigan.'
      }
    ],
    airports: [
      {
        name: 'Chicago Midway International Airport',
        code: 'MDW',
        distance: '40 miles',
        driveTime: '1 hour'
      }
    ],
    nearbyCities: [
      {
        name: 'Chesterton',
        state: 'Indiana',
        distance: '5 miles',
        driveTime: '10 minutes'
      },
      {
        name: 'Porter',
        state: 'Indiana',
        distance: '10 miles',
        driveTime: '15 minutes'
      }
    ]
  },
  {
    id: 'brown-county',
    name: 'Brown County State Park',
    description: 'Known for its stunning fall foliage, this park offers rolling hills, hiking trails, and scenic vistas.',
    location: {
      state: 'Indiana',
      coordinates: {
        latitude: 39.2070,
        longitude: -86.2030
      }
    },
    established: '1929',
    size: '15,776 acres',
    highlights: [
      'Ogle Lake',
      'Strahl Lake',
      'Scenic Overlooks'
    ],
    activities: [
      'Hiking',
      'Biking',
      'Horseback Riding',
      'Camping'
    ],
    bestTimeToVisit: 'Fall for foliage, Spring for wildflowers',
    hikingTrails: [
      {
        name: 'Strahl Lake Trail',
        difficulty: 'Easy',
        length: '2 miles round trip',
        elevationGain: '100 feet',
        description: 'A scenic trail around Strahl Lake with opportunities for wildlife viewing.'
      }
    ],
    airports: [
      {
        name: 'Indianapolis International Airport',
        code: 'IND',
        distance: '60 miles',
        driveTime: '1.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Nashville',
        state: 'Indiana',
        distance: '10 miles',
        driveTime: '15 minutes'
      }
    ]
  }
]; 