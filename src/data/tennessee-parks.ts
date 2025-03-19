import { Park } from '@/types/park';

export const tennesseeParks: Park[] = [
  {
    id: 'great-smoky-mountains',
    name: 'Great Smoky Mountains National Park',
    description: 'Famous for its biodiversity and stunning mountain views, this park is a haven for outdoor enthusiasts.',
    location: {
      state: 'Tennessee',
      coordinates: {
        latitude: 35.6532,
        longitude: -83.5070
      }
    },
    established: '1934',
    size: '522,427 acres',
    highlights: [
      'Clingmans Dome',
      'Cades Cove',
      'Roaring Fork Motor Nature Trail'
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
        name: 'Alum Cave Trail',
        difficulty: 'Moderate',
        length: '5 miles round trip',
        elevationGain: '1,200 feet',
        description: 'A popular trail leading to the summit of Mount LeConte with stunning views.'
      }
    ],
    airports: [
      {
        name: 'McGhee Tyson Airport',
        code: 'TYS',
        distance: '40 miles',
        driveTime: '1 hour'
      }
    ],
    nearbyCities: [
      {
        name: 'Gatlinburg',
        state: 'Tennessee',
        distance: '10 miles',
        driveTime: '20 minutes'
      }
    ]
  },
  {
    id: 'chickamauga',
    name: 'Chickamauga and Chattanooga National Military Park',
    description: 'The first national military park in the U.S., it preserves the sites of the Civil War battles of Chickamauga and Chattanooga.',
    location: {
      state: 'Tennessee',
      coordinates: {
        latitude: 34.9250,
        longitude: -85.2500
      }
    },
    established: '1890',
    size: '5,000 acres',
    highlights: [
      'Historic Battlefields',
      'Visitor Center',
      'Scenic Drives'
    ],
    activities: [
      'Historical Tours',
      'Hiking',
      'Wildlife Viewing',
      'Photography'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Chickamauga Battlefield Trail',
        difficulty: 'Easy',
        length: '3 miles loop',
        elevationGain: 'Minimal',
        description: 'A loop trail that provides access to key sites of the battlefield.'
      }
    ],
    airports: [
      {
        name: 'Chattanooga Metropolitan Airport',
        code: 'CHA',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ],
    nearbyCities: [
      {
        name: 'Chickamauga',
        state: 'Georgia',
        distance: '5 miles',
        driveTime: '10 minutes'
      }
    ]
  }
]; 