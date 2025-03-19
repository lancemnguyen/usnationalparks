import { Park } from '@/types/park';

export const southCarolinaParks: Park[] = [
  {
    id: 'congaree',
    name: 'Congaree National Park',
    description: 'Home to one of the largest intact expanses of old growth bottomland hardwood forest in the United States, Congaree offers unique biodiversity and scenic trails.',
    location: {
      state: 'South Carolina',
      coordinates: {
        latitude: 33.7866,
        longitude: -80.7580
      }
    },
    established: '2003',
    size: '22,000 acres',
    highlights: [
      'Boardwalk Loop Trail',
      'Old Growth Forest',
      'Wildlife Viewing'
    ],
    activities: [
      'Hiking',
      'Canoeing',
      'Camping',
      'Bird Watching'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Boardwalk Loop Trail',
        difficulty: 'Easy',
        length: '2.4 miles loop',
        elevationGain: 'Minimal',
        description: 'A boardwalk trail that provides access to the heart of the forest.'
      }
    ],
    airports: [
      {
        name: 'Columbia Metropolitan Airport',
        code: 'CAE',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ],
    nearbyCities: [
      {
        name: 'Columbia',
        state: 'South Carolina',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ]
  },
  {
    id: 'fort-moultrie',
    name: 'Fort Moultrie National Historical Park',
    description: 'A historic site that preserves the history of the American Revolution and the Civil War, featuring the original fort and visitor center.',
    location: {
      state: 'South Carolina',
      coordinates: {
        latitude: 32.7500,
        longitude: -79.8700
      }
    },
    established: '1942',
    size: '1,000 acres',
    highlights: [
      'Fort Moultrie',
      'Visitor Center',
      'Scenic Views'
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
        name: 'Charleston International Airport',
        code: 'CHS',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ],
    nearbyCities: [
      {
        name: 'Sullivan\'s Island',
        state: 'South Carolina',
        distance: '5 miles',
        driveTime: '10 minutes'
      }
    ]
  }
]; 