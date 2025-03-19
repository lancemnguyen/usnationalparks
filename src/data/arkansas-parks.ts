import { Park } from '@/types/park';

export const arkansasParks: Park[] = [
  {
    id: 'hot-springs',
    name: 'Hot Springs National Park',
    description: 'Known for its natural hot springs, this park offers a unique blend of outdoor activities and historic bathhouses.',
    location: {
      state: 'Arkansas',
      coordinates: {
        latitude: 34.5061,
        longitude: -93.0540
      }
    },
    established: '1921',
    size: '5,550 acres',
    highlights: [
      'Bathhouse Row',
      'Hot Springs Mountain Tower',
      'Garvan Woodland Gardens'
    ],
    activities: [
      'Hiking',
      'Spa Treatments',
      'Wildlife Watching',
      'Camping'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Hot Springs Mountain Trail',
        difficulty: 'Moderate',
        length: '2.5 miles round trip',
        elevationGain: '600 feet',
        description: 'A scenic trail leading to the summit of Hot Springs Mountain with panoramic views.'
      },
      {
        name: 'Grand Promenade',
        difficulty: 'Easy',
        length: '1 mile round trip',
        elevationGain: '50 feet',
        description: 'A paved trail that runs along the historic bathhouses and through the park.'
      }
    ],
    airports: [
      {
        name: 'Bill and Hillary Clinton National Airport',
        code: 'LIT',
        distance: '50 miles',
        driveTime: '1 hour'
      }
    ],
    nearbyCities: [
      {
        name: 'Hot Springs',
        state: 'Arkansas',
        distance: 'Inside Park',
        driveTime: 'N/A'
      },
      {
        name: 'Malvern',
        state: 'Arkansas',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ]
  },
  {
    id: 'buffalo-river',
    name: 'Buffalo National River',
    description: 'The first national river in the United States, known for its stunning scenery and recreational opportunities.',
    location: {
      state: 'Arkansas',
      coordinates: {
        latitude: 36.0344,
        longitude: -92.6105
      }
    },
    established: '1972',
    size: '95,730 acres',
    highlights: [
      'Buffalo River',
      'Hiking Trails',
      'Canoeing and Kayaking'
    ],
    activities: [
      'Canoeing',
      'Fishing',
      'Hiking',
      'Camping'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Hemmed-in-Hollow Trail',
        difficulty: 'Moderate',
        length: '5 miles round trip',
        elevationGain: '1,200 feet',
        description: 'A challenging hike to the tallest waterfall in Arkansas.'
      }
    ],
    airports: [
      {
        name: 'Northwest Arkansas Regional Airport',
        code: 'XNA',
        distance: '70 miles',
        driveTime: '1.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Jasper',
        state: 'Arkansas',
        distance: '15 miles',
        driveTime: '30 minutes'
      }
    ]
  }
]; 