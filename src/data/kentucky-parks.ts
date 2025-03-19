import { Park } from '@/types/park';

export const kentuckyParks: Park[] = [
  {
    id: 'mammoth-cave',
    name: 'Mammoth Cave National Park',
    description: 'Home to the longest cave system in the world, Mammoth Cave offers unique geological formations and rich biodiversity.',
    location: {
      state: 'Kentucky',
      coordinates: {
        latitude: 37.1019,
        longitude: -86.1002
      }
    },
    established: '1941',
    size: '52,830 acres',
    highlights: [
      'Mammoth Cave',
      'Historic Tours',
      'Hiking Trails'
    ],
    activities: [
      'Caving',
      'Hiking',
      'Camping',
      'Wildlife Watching'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Green River Bluffs Trail',
        difficulty: 'Moderate',
        length: '2.5 miles round trip',
        elevationGain: '200 feet',
        description: 'A scenic trail with views of the Green River and surrounding landscape.'
      }
    ],
    airports: [
      {
        name: 'Nashville International Airport',
        code: 'BNA',
        distance: '90 miles',
        driveTime: '1.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Cave City',
        state: 'Kentucky',
        distance: '10 miles',
        driveTime: '15 minutes'
      }
    ]
  },
  {
    id: 'red-river-gorge',
    name: 'Red River Gorge',
    description: 'Known for its stunning natural arches and rock climbing opportunities, Red River Gorge is a favorite among outdoor enthusiasts.',
    location: {
      state: 'Kentucky',
      coordinates: {
        latitude: 37.7580,
        longitude: -83.6630
      }
    },
    established: '1976',
    size: '29,000 acres',
    highlights: [
      'Natural Bridges',
      'Rock Climbing',
      'Hiking Trails'
    ],
    activities: [
      'Hiking',
      'Rock Climbing',
      'Camping',
      'Wildlife Watching'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Sky Bridge Trail',
        difficulty: 'Moderate',
        length: '1.5 miles round trip',
        elevationGain: '300 feet',
        description: 'A short hike to a stunning natural arch with beautiful views.'
      }
    ],
    airports: [
      {
        name: 'Lexington Blue Grass Airport',
        code: 'LEX',
        distance: '50 miles',
        driveTime: '1 hour'
      }
    ],
    nearbyCities: [
      {
        name: 'Slade',
        state: 'Kentucky',
        distance: '5 miles',
        driveTime: '10 minutes'
      }
    ]
  }
]; 