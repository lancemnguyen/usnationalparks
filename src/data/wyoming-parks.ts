import { Park } from '@/types/park';

export const wyomingParks: Park[] = [
  {
    id: 'yellowstone',
    name: 'Yellowstone National Park',
    description: 'America\'s first national park, Yellowstone features spectacular geothermal features, including the iconic Old Faithful geyser, along with diverse wildlife and stunning landscapes.',
    location: {
      state: 'Wyoming',
      coordinates: {
        latitude: 44.4280,
        longitude: -110.5885
      }
    },
    established: '1872',
    size: '2,219,791 acres',
    highlights: [
      'Old Faithful Geyser',
      'Grand Prismatic Spring',
      'Yellowstone Lake',
      'Grand Canyon of the Yellowstone',
      'Mammoth Hot Springs'
    ],
    activities: [
      'Geyser Viewing',
      'Wildlife Watching',
      'Hiking',
      'Scenic Drives',
      'Photography'
    ],
    bestTimeToVisit: 'April to October',
    hikingTrails: [
      {
        name: 'Fairy Falls Trail',
        difficulty: 'Easy',
        length: '5 miles round trip',
        elevationGain: '170 feet',
        description: 'Trail to a beautiful waterfall with views of Grand Prismatic Spring.'
      },
      {
        name: 'Uncle Tom\'s Trail',
        difficulty: 'Strenuous',
        length: '0.7 miles round trip',
        elevationGain: '500 feet',
        description: 'Steep trail with stairs to views of Lower Falls.'
      },
      {
        name: 'Lone Star Geyser Trail',
        difficulty: 'Moderate',
        length: '4.8 miles round trip',
        elevationGain: '150 feet',
        description: 'Trail to a predictable geyser eruption every 3 hours.'
      }
    ],
    airports: [
      {
        name: 'Yellowstone Regional Airport',
        code: 'COD',
        distance: '50 miles',
        driveTime: '1 hour'
      },
      {
        name: 'Jackson Hole Airport',
        code: 'JAC',
        distance: '60 miles',
        driveTime: '1.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'West Yellowstone',
        state: 'Montana',
        distance: '1 mile',
        driveTime: '5 minutes'
      },
      {
        name: 'Gardiner',
        state: 'Montana',
        distance: '5 miles',
        driveTime: '10 minutes'
      },
      {
        name: 'Cody',
        state: 'Wyoming',
        distance: '50 miles',
        driveTime: '1 hour'
      }
    ]
  },
  {
    id: 'grand-teton',
    name: 'Grand Teton National Park',
    description: 'Home to the stunning Teton Range, this park features dramatic mountain peaks, pristine lakes, and abundant wildlife, offering some of the most iconic mountain scenery in America.',
    location: {
      state: 'Wyoming',
      coordinates: {
        latitude: 43.7904,
        longitude: -110.6818
      }
    },
    established: '1929',
    size: '310,044 acres',
    highlights: [
      'Teton Range',
      'Jenny Lake',
      'Jackson Lake',
      'Mormon Row',
      'Signal Mountain'
    ],
    activities: [
      'Hiking',
      'Scenic Drives',
      'Wildlife Viewing',
      'Photography',
      'Rock Climbing'
    ],
    bestTimeToVisit: 'May to September',
    hikingTrails: [
      {
        name: 'Jenny Lake Loop',
        difficulty: 'Easy',
        length: '7.1 miles loop',
        elevationGain: '400 feet',
        description: 'Scenic trail around Jenny Lake with mountain views.'
      },
      {
        name: 'Cascade Canyon Trail',
        difficulty: 'Moderate',
        length: '9.1 miles round trip',
        elevationGain: '1,100 feet',
        description: 'Popular trail through a beautiful canyon with waterfall views.'
      },
      {
        name: 'Taggart Lake Trail',
        difficulty: 'Easy',
        length: '3.2 miles round trip',
        elevationGain: '300 feet',
        description: 'Trail to a scenic lake with Teton views.'
      }
    ],
    airports: [
      {
        name: 'Jackson Hole Airport',
        code: 'JAC',
        distance: '5 miles',
        driveTime: '10 minutes'
      },
      {
        name: 'Yellowstone Regional Airport',
        code: 'COD',
        distance: '60 miles',
        driveTime: '1.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Jackson',
        state: 'Wyoming',
        distance: '5 miles',
        driveTime: '10 minutes'
      },
      {
        name: 'Wilson',
        state: 'Wyoming',
        distance: '15 miles',
        driveTime: '25 minutes'
      },
      {
        name: 'Teton Village',
        state: 'Wyoming',
        distance: '12 miles',
        driveTime: '20 minutes'
      }
    ]
  }
]; 