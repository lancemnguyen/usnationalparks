import { Park } from '@/types/park';

export const westVirginiaParks: Park[] = [
  {
    id: 'new-river-gorge',
    name: 'New River Gorge National Park and Preserve',
    description: 'Known for its stunning gorge, whitewater rafting, and rock climbing, this park offers a variety of outdoor activities and breathtaking views.',
    location: {
      state: 'West Virginia',
      coordinates: {
        latitude: 38.0583,
        longitude: -81.0830
      }
    },
    established: '2020',
    size: '70,000 acres',
    highlights: [
      'New River Gorge Bridge',
      'Endless Wall Trail',
      'Whitewater Rafting'
    ],
    activities: [
      'Hiking',
      'Rock Climbing',
      'Whitewater Rafting',
      'Camping'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Endless Wall Trail',
        difficulty: 'Moderate',
        length: '2 miles round trip',
        elevationGain: '200 feet',
        description: 'A scenic trail with stunning views of the gorge and the New River.'
      }
    ],
    airports: [
      {
        name: 'Yeager Airport',
        code: 'CRW',
        distance: '50 miles',
        driveTime: '1 hour'
      }
    ],
    nearbyCities: [
      {
        name: 'Fayetteville',
        state: 'West Virginia',
        distance: '10 miles',
        driveTime: '15 minutes'
      }
    ]
  },
  {
    id: 'blackwater-falls',
    name: 'Blackwater Falls State Park',
    description: 'Famous for its stunning waterfall and scenic views, this park offers a variety of outdoor activities and beautiful landscapes.',
    location: {
      state: 'West Virginia',
      coordinates: {
        latitude: 39.0850,
        longitude: -79.4870
      }
    },
    established: '1937',
    size: '2,500 acres',
    highlights: [
      'Blackwater Falls',
      'Elk River',
      'Scenic Overlooks'
    ],
    activities: [
      'Hiking',
      'Fishing',
      'Camping',
      'Wildlife Watching'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Blackwater Falls Trail',
        difficulty: 'Easy',
        length: '1 mile round trip',
        elevationGain: '100 feet',
        description: 'A short trail leading to the viewing platform for the stunning Blackwater Falls.'
      }
    ],
    airports: [
      {
        name: 'North Central West Virginia Airport',
        code: 'CKB',
        distance: '60 miles',
        driveTime: '1.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Davis',
        state: 'West Virginia',
        distance: '5 miles',
        driveTime: '10 minutes'
      }
    ]
  }
]; 