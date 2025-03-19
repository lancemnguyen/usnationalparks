import { Park } from '@/types/park';

export const oregonParks: Park[] = [
  {
    id: 'crater-lake',
    name: 'Crater Lake National Park',
    description: 'Home to the deepest lake in the United States, Crater Lake features stunning blue waters, volcanic formations, and diverse wildlife in a pristine mountain setting.',
    location: {
      state: 'Oregon',
      coordinates: {
        latitude: 42.8684,
        longitude: -122.1685
      }
    },
    established: '1902',
    size: '183,224 acres',
    highlights: [
      'Crater Lake',
      'Wizard Island',
      'Rim Drive',
      'Watchman Peak',
      'Cleetwood Cove'
    ],
    activities: [
      'Scenic Drives',
      'Hiking',
      'Boat Tours',
      'Photography',
      'Stargazing'
    ],
    bestTimeToVisit: 'July to September',
    hikingTrails: [
      {
        name: 'Garfield Peak Trail',
        difficulty: 'Moderate',
        length: '3.4 miles round trip',
        elevationGain: '1,010 feet',
        description: 'Trail to panoramic views of Crater Lake.'
      },
      {
        name: 'Cleetwood Cove Trail',
        difficulty: 'Strenuous',
        length: '2.2 miles round trip',
        elevationGain: '700 feet',
        description: 'Steep trail to the lake shore and boat dock.'
      },
      {
        name: 'Watchman Peak Trail',
        difficulty: 'Moderate',
        length: '1.6 miles round trip',
        elevationGain: '420 feet',
        description: 'Trail to views of Wizard Island and the lake.'
      }
    ],
    airports: [
      {
        name: 'Rogue Valley International Airport',
        code: 'MFR',
        distance: '80 miles',
        driveTime: '1.5 hours'
      },
      {
        name: 'Eugene Airport',
        code: 'EUG',
        distance: '140 miles',
        driveTime: '2.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Klamath Falls',
        state: 'Oregon',
        distance: '60 miles',
        driveTime: '1.5 hours'
      },
      {
        name: 'Medford',
        state: 'Oregon',
        distance: '80 miles',
        driveTime: '1.5 hours'
      },
      {
        name: 'Bend',
        state: 'Oregon',
        distance: '100 miles',
        driveTime: '2 hours'
      }
    ]
  }
]; 