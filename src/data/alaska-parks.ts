import { Park } from '@/types/park';

export const alaskaParks: Park[] = [
  {
    id: 'denali',
    name: 'Denali National Park',
    description: 'Home to North America\'s highest peak, Denali National Park offers stunning landscapes and diverse wildlife.',
    location: {
      state: 'Alaska',
      coordinates: {
        latitude: 63.0695,
        longitude: -151.0074
      }
    },
    established: '1917',
    size: '6,075,030 acres',
    highlights: [
      'Denali Peak',
      'Wildlife Viewing',
      'Glacier Hiking',
      'Scenic Drives',
      'Backcountry Camping'
    ],
    activities: [
      'Hiking',
      'Wildlife Watching',
      'Photography',
      'Camping',
      'Rafting'
    ],
    bestTimeToVisit: 'May to September',
    hikingTrails: [
      {
        name: 'Mount Healy Overlook Trail',
        difficulty: 'Moderate',
        length: '5 miles round trip',
        elevationGain: '1,000 feet',
        description: 'A scenic trail leading to a stunning overlook of the park.'
      },
      {
        name: 'Savage River Loop Trail',
        difficulty: 'Easy',
        length: '2 mile loop',
        elevationGain: '200 feet',
        description: 'A family-friendly trail with beautiful views of the Savage River.'
      }
    ],
    airports: [
      {
        name: 'Fairbanks International Airport',
        code: 'FAI',
        distance: '120 miles',
        driveTime: '2.5 hours'
      },
      {
        name: 'Anchorage Ted Stevens International Airport',
        code: 'ANC',
        distance: '240 miles',
        driveTime: '4 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Talkeetna',
        state: 'Alaska',
        distance: '112 miles',
        driveTime: '2.5 hours'
      },
      {
        name: 'Healy',
        state: 'Alaska',
        distance: '11 miles',
        driveTime: '15 minutes'
      }
    ]
  },
  {
    id: 'kenai-fjords',
    name: 'Kenai Fjords National Park',
    location: {
      state: 'Alaska',
      coordinates: { latitude: 60.1020, longitude: -149.6070 },
    },
    established: '1980',
    size: '669,984 acres',
    highlights: [
      'Spectacular glaciers and fjords',
      'Rich marine wildlife, including sea otters and orcas',
      'Hiking trails with breathtaking views',
    ],
    activities: [
      'Kayaking',
      'Wildlife viewing',
      'Hiking',
      'Glacier tours',
    ],
    bestTimeToVisit: 'Late spring to early fall (May to September)',
    hikingTrails: [
      {
        name: 'Exit Glacier Trail',
        difficulty: 'Easy',
        length: '1.2 miles round trip',
        elevationGain: '200 feet',
        description: 'A short trail leading to the base of Exit Glacier.',
      },
      {
        name: 'Harding Icefield Trail',
        difficulty: 'Strenuous',
        length: '8.2 miles round trip',
        elevationGain: '1,000 feet',
        description: 'A challenging hike with stunning views of the icefield.',
      },
    ],
    airports: [
      {
        name: 'Seward Airport',
        code: 'SWD',
        distance: '10 miles',
        driveTime: '20 minutes',
      },
      {
        name: 'Anchorage Ted Stevens International Airport',
        code: 'ANC',
        distance: '130 miles',
        driveTime: '2.5 hours',
      },
    ],
    nearbyCities: [
      {
        name: 'Seward',
        state: 'Alaska',
        distance: '2 miles',
        driveTime: '5 minutes',
      },
      {
        name: 'Homer',
        state: 'Alaska',
        distance: '80 miles',
        driveTime: '1.5 hours',
      },
    ],
    description: 'Kenai Fjords National Park is renowned for its stunning glaciers, fjords, and rich marine wildlife. Visitors can explore the park through kayaking, hiking, and guided tours, making it a perfect destination for nature lovers.',
  },
  // Add more parks as needed
]; 