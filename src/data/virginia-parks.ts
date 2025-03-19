import { Park } from '@/types/park';

export const virginiaParks: Park[] = [
  {
    id: 'shenandoah',
    name: 'Shenandoah National Park',
    description: 'Known for its beautiful mountain views, hiking trails, and diverse wildlife, Shenandoah is a popular destination for outdoor enthusiasts.',
    location: {
      state: 'Virginia',
      coordinates: {
        latitude: 38.2928,
        longitude: -78.5210
      }
    },
    established: '1935',
    size: '200,000 acres',
    highlights: [
      'Skyline Drive',
      'Old Rag Mountain',
      'Dark Hollow Falls'
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
        name: 'Old Rag Mountain Trail',
        difficulty: 'Strenuous',
        length: '9.2 miles round trip',
        elevationGain: '2,200 feet',
        description: 'A challenging hike with rock scrambles and stunning views from the summit.'
      }
    ],
    airports: [
      {
        name: 'Washington Dulles International Airport',
        code: 'IAD',
        distance: '70 miles',
        driveTime: '1.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Luray',
        state: 'Virginia',
        distance: '15 miles',
        driveTime: '30 minutes'
      }
    ]
  },
  {
    id: 'appomattox',
    name: 'Appomattox Court House National Historical Park',
    description: 'This park preserves the site of the surrender of General Robert E. Lee, marking the end of the Civil War.',
    location: {
      state: 'Virginia',
      coordinates: {
        latitude: 37.3500,
        longitude: -78.8000
      }
    },
    established: '1940',
    size: '1,800 acres',
    highlights: [
      'Historic Court House',
      'Visitor Center',
      'Reconstructed Buildings'
    ],
    activities: [
      'Historical Tours',
      'Wildlife Viewing',
      'Photography'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [],
    airports: [
      {
        name: 'Lynchburg Regional Airport',
        code: 'LYH',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ],
    nearbyCities: [
      {
        name: 'Appomattox',
        state: 'Virginia',
        distance: '5 miles',
        driveTime: '10 minutes'
      }
    ]
  }
]; 