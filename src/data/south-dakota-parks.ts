import { Park } from '@/types/park';

export const southDakotaParks: Park[] = [
  {
    id: 'badlands',
    name: 'Badlands National Park',
    description: 'Known for its dramatic landscapes, rich fossil beds, and diverse wildlife, Badlands offers stunning views and unique geological formations.',
    location: {
      state: 'South Dakota',
      coordinates: {
        latitude: 43.8554,
        longitude: -102.3397
      }
    },
    established: '1978',
    size: '244,000 acres',
    highlights: [
      'Badlands Loop Road',
      'Fossil Exhibit Trail',
      'Wildlife Viewing'
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
        name: 'Notch Trail',
        difficulty: 'Moderate',
        length: '1.5 miles round trip',
        elevationGain: '300 feet',
        description: 'A scenic trail that leads to a breathtaking view of the Badlands.'
      }
    ],
    airports: [
      {
        name: 'Rapid City Regional Airport',
        code: 'RAP',
        distance: '50 miles',
        driveTime: '1 hour'
      }
    ],
    nearbyCities: [
      {
        name: 'Wall',
        state: 'South Dakota',
        distance: '10 miles',
        driveTime: '15 minutes'
      }
    ]
  },
  {
    id: 'wind-cave',
    name: 'Wind Cave National Park',
    description: 'One of the oldest national parks in the U.S., Wind Cave is known for its unique cave system and diverse ecosystems above ground.',
    location: {
      state: 'South Dakota',
      coordinates: {
        latitude: 43.5853,
        longitude: -103.4870
      }
    },
    established: '1903',
    size: '28,295 acres',
    highlights: [
      'Wind Cave',
      'Bison Herd',
      'Scenic Drives'
    ],
    activities: [
      'Caving',
      'Hiking',
      'Wildlife Watching',
      'Photography'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Rankin Ridge Trail',
        difficulty: 'Moderate',
        length: '1.5 miles round trip',
        elevationGain: '200 feet',
        description: 'A trail that leads to a viewpoint overlooking the park.'
      }
    ],
    airports: [
      {
        name: 'Rapid City Regional Airport',
        code: 'RAP',
        distance: '30 miles',
        driveTime: '45 minutes'
      }
    ],
    nearbyCities: [
      {
        name: 'Hot Springs',
        state: 'South Dakota',
        distance: '15 miles',
        driveTime: '20 minutes'
      }
    ]
  }
]; 