import { Park } from '@/types/park';

export const newMexicoParks: Park[] = [
  {
    id: 'carlsbad-caverns',
    name: 'Carlsbad Caverns National Park',
    description: 'Famous for its stunning limestone caves, Carlsbad Caverns offers a unique underground experience and diverse wildlife.',
    location: {
      state: 'New Mexico',
      coordinates: {
        latitude: 32.1479,
        longitude: -104.5560
      }
    },
    established: '1930',
    size: '46,766 acres',
    highlights: [
      'Big Room',
      'Lechuguilla Cave',
      'Bat Flight Program'
    ],
    activities: [
      'Cave Tours',
      'Hiking',
      'Wildlife Watching',
      'Photography'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Natural Entrance Trail',
        difficulty: 'Moderate',
        length: '1.5 miles one way',
        elevationGain: '750 feet',
        description: 'A trail leading into the cave with stunning views of the surrounding landscape.'
      }
    ],
    airports: [
      {
        name: 'Cavern City Air Terminal',
        code: 'CNM',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ],
    nearbyCities: [
      {
        name: 'Carlsbad',
        state: 'New Mexico',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ]
  },
  {
    id: 'bandelier',
    name: 'Bandelier National Monument',
    description: 'Known for its ancient cliff dwellings and beautiful canyons, Bandelier offers a glimpse into the lives of the Ancestral Puebloans.',
    location: {
      state: 'New Mexico',
      coordinates: {
        latitude: 35.5889,
        longitude: -106.2920
      }
    },
    established: '1916',
    size: '33,677 acres',
    highlights: [
      'Cliff Dwellings',
      'Frijoles Canyon',
      'Scenic Trails'
    ],
    activities: [
      'Hiking',
      'Camping',
      'Wildlife Watching',
      'Cultural Programs'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Main Loop Trail',
        difficulty: 'Easy',
        length: '1.2 miles loop',
        elevationGain: '100 feet',
        description: 'A loop trail that passes by ancient dwellings and offers beautiful canyon views.'
      }
    ],
    airports: [
      {
        name: 'Santa Fe Regional Airport',
        code: 'SAF',
        distance: '50 miles',
        driveTime: '1 hour'
      }
    ],
    nearbyCities: [
      {
        name: 'Los Alamos',
        state: 'New Mexico',
        distance: '15 miles',
        driveTime: '20 minutes'
      }
    ]
  }
]; 