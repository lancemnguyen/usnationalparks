import { Park } from '@/types/park';

export const montanaParks: Park[] = [
  {
    id: 'glacier',
    name: 'Glacier National Park',
    description: 'Known as the "Crown of the Continent," Glacier National Park features stunning mountain peaks, pristine lakes, and diverse wildlife, including the iconic Going-to-the-Sun Road.',
    location: {
      state: 'Montana',
      coordinates: {
        latitude: 48.7596,
        longitude: -113.7870
      }
    },
    established: '1910',
    size: '1,013,322 acres',
    highlights: [
      'Going-to-the-Sun Road',
      'Lake McDonald',
      'Many Glacier',
      'Logan Pass',
      'Grinnell Glacier'
    ],
    activities: [
      'Scenic Drives',
      'Hiking',
      'Wildlife Viewing',
      'Photography',
      'Boat Tours'
    ],
    bestTimeToVisit: 'June to September',
    hikingTrails: [
      {
        name: 'Avalanche Lake Trail',
        difficulty: 'Moderate',
        length: '4.6 miles round trip',
        elevationGain: '730 feet',
        description: 'Popular trail through cedar forest to a beautiful lake.'
      },
      {
        name: 'Highline Trail',
        difficulty: 'Strenuous',
        length: '11.8 miles one-way',
        elevationGain: '1,950 feet',
        description: 'Spectacular trail along the Garden Wall with panoramic views.'
      },
      {
        name: 'Grinnell Glacier Trail',
        difficulty: 'Strenuous',
        length: '10.6 miles round trip',
        elevationGain: '1,600 feet',
        description: 'Trail to one of the park\'s most accessible glaciers.'
      }
    ],
    airports: [
      {
        name: 'Glacier Park International Airport',
        code: 'FCA',
        distance: '30 miles',
        driveTime: '40 minutes'
      },
      {
        name: 'Great Falls International Airport',
        code: 'GTF',
        distance: '200 miles',
        driveTime: '3.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Whitefish',
        state: 'Montana',
        distance: '25 miles',
        driveTime: '35 minutes'
      },
      {
        name: 'Kalispell',
        state: 'Montana',
        distance: '30 miles',
        driveTime: '40 minutes'
      },
      {
        name: 'Columbia Falls',
        state: 'Montana',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ]
  }
]; 