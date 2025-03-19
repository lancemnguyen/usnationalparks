import { Park } from '@/types/park';

export const northCarolinaParks: Park[] = [
  {
    id: 'great-smoky-mountains',
    name: 'Great Smoky Mountains National Park',
    description: 'Famous for its biodiversity and stunning mountain views, this park is a haven for outdoor enthusiasts.',
    location: {
      state: 'North Carolina',
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
    id: 'cape-hatteras',
    name: 'Cape Hatteras National Seashore',
    description: 'Known for its beautiful beaches, lighthouses, and rich maritime history, this seashore offers a unique coastal experience.',
    location: {
      state: 'North Carolina',
      coordinates: {
        latitude: 35.2000,
        longitude: -75.5000
      }
    },
    established: '1953',
    size: '30,000 acres',
    highlights: [
      'Cape Hatteras Lighthouse',
      'Ocracoke Island',
      'Wildlife Viewing'
    ],
    activities: [
      'Swimming',
      'Fishing',
      'Camping',
      'Surfing'
    ],
    bestTimeToVisit: 'Late Spring and Early Fall',
    hikingTrails: [
      {
        name: 'Buxton Woods Trail',
        difficulty: 'Easy',
        length: '1.5 miles loop',
        elevationGain: 'Minimal',
        description: 'A loop trail through maritime forest with opportunities for bird watching.'
      }
    ],
    airports: [
      {
        name: 'Tweed New Haven Airport',
        code: 'HVN',
        distance: '80 miles',
        driveTime: '2 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Buxton',
        state: 'North Carolina',
        distance: '5 miles',
        driveTime: '10 minutes'
      }
    ]
  }
]; 