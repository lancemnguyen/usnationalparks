import { Park } from '@/types/park';

export const texasParks: Park[] = [
  {
    id: 'big-bend',
    name: 'Big Bend National Park',
    description: 'Known for its stunning desert landscapes, mountains, and the Rio Grande, Big Bend offers a unique wilderness experience.',
    location: {
      state: 'Texas',
      coordinates: {
        latitude: 29.1275,
        longitude: -103.2405
      }
    },
    established: '1944',
    size: '801,163 acres',
    highlights: [
      'Chisos Mountains',
      'Rio Grande',
      'Santa Elena Canyon'
    ],
    activities: [
      'Hiking',
      'Camping',
      'Wildlife Watching',
      'Stargazing'
    ],
    bestTimeToVisit: 'Fall and Spring',
    hikingTrails: [
      {
        name: 'Lost Mine Trail',
        difficulty: 'Moderate',
        length: '4.8 miles round trip',
        elevationGain: '1,100 feet',
        description: 'A scenic trail that leads to a viewpoint overlooking the Chisos Mountains.'
      }
    ],
    airports: [
      {
        name: 'El Paso International Airport',
        code: 'ELP',
        distance: '200 miles',
        driveTime: '4 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Terlingua',
        state: 'Texas',
        distance: '30 miles',
        driveTime: '40 minutes'
      }
    ]
  },
  {
    id: 'guadalupe-mountains',
    name: 'Guadalupe Mountains National Park',
    description: 'Home to the highest peak in Texas, this park features stunning mountain landscapes and diverse ecosystems.',
    location: {
      state: 'Texas',
      coordinates: {
        latitude: 31.8921,
        longitude: -104.8738
      }
    },
    established: '1972',
    size: '86,416 acres',
    highlights: [
      'Guadalupe Peak',
      'McKittrick Canyon',
      'Salt Basin Dunes'
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
        name: 'Guadalupe Peak Trail',
        difficulty: 'Strenuous',
        length: '8.4 miles round trip',
        elevationGain: '3,000 feet',
        description: 'A challenging hike to the highest point in Texas with breathtaking views.'
      }
    ],
    airports: [
      {
        name: 'El Paso International Airport',
        code: 'ELP',
        distance: '110 miles',
        driveTime: '2 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Carlsbad',
        state: 'New Mexico',
        distance: '40 miles',
        driveTime: '1 hour'
      }
    ]
  }
]; 