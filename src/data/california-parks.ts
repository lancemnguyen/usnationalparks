import { Park } from '@/types/park';

export const californiaParks: Park[] = [
  {
    id: 'yosemite',
    name: 'Yosemite National Park',
    description: 'Famous for its towering granite cliffs, waterfalls, and giant sequoia groves, Yosemite National Park is one of America\'s most iconic national parks.',
    location: {
      state: 'California',
      coordinates: {
        latitude: 37.8651,
        longitude: -119.5383
      }
    },
    established: '1890',
    size: '759,620 acres',
    highlights: [
      'Half Dome',
      'El Capitan',
      'Yosemite Falls',
      'Glacier Point',
      'Mariposa Grove'
    ],
    activities: [
      'Hiking',
      'Rock Climbing',
      'Photography',
      'Wildlife Watching',
      'Camping'
    ],
    bestTimeToVisit: 'May to September',
    hikingTrails: [
      {
        name: 'Half Dome Trail',
        difficulty: 'Strenuous',
        length: '14.2 miles round trip',
        elevationGain: '4,800 feet',
        description: 'Iconic trail leading to the summit of Half Dome, featuring the famous cable section.'
      },
      {
        name: 'Mist Trail',
        difficulty: 'Moderate',
        length: '3 miles round trip',
        elevationGain: '1,000 feet',
        description: 'Popular trail passing Vernal and Nevada Falls, offering spectacular waterfall views.'
      },
      {
        name: 'Lower Yosemite Falls Trail',
        difficulty: 'Easy',
        length: '1 mile round trip',
        elevationGain: '50 feet',
        description: 'Accessible trail leading to the base of Yosemite Falls.'
      }
    ],
    airports: [
      {
        name: 'Fresno Yosemite International Airport',
        code: 'FAT',
        distance: '65 miles',
        driveTime: '1.5 hours'
      },
      {
        name: 'Merced Regional Airport',
        code: 'MCE',
        distance: '80 miles',
        driveTime: '2 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Yosemite Village',
        state: 'California',
        distance: 'Inside Park',
        driveTime: 'N/A'
      },
      {
        name: 'Mariposa',
        state: 'California',
        distance: '35 miles',
        driveTime: '1 hour'
      },
      {
        name: 'Groveland',
        state: 'California',
        distance: '25 miles',
        driveTime: '45 minutes'
      }
    ]
  },
  {
    id: 'sequoia',
    name: 'Sequoia & Kings Canyon National Parks',
    description: 'Home to the world\'s largest trees, these twin parks protect some of the most magnificent forests on Earth.',
    location: {
      state: 'California',
      coordinates: {
        latitude: 36.4864,
        longitude: -118.5658
      }
    },
    established: '1890',
    size: '404,063 acres',
    highlights: [
      'General Sherman Tree',
      'Moro Rock',
      'Crystal Cave',
      'Kings Canyon',
      'Giant Forest'
    ],
    activities: [
      'Hiking',
      'Cave Tours',
      'Wildlife Watching',
      'Scenic Drives',
      'Camping'
    ],
    bestTimeToVisit: 'June to September',
    hikingTrails: [],
    airports: [],
    nearbyCities: []
  }
]; 