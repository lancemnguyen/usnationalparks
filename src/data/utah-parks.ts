import { Park } from '@/types/park';

export const utahParks: Park[] = [
  {
    id: 'arches',
    name: 'Arches National Park',
    description: 'Home to over 2,000 natural sandstone arches, this park features a stunning landscape of red rock formations, including the iconic Delicate Arch.',
    location: {
      state: 'Utah',
      coordinates: {
        latitude: 38.7331,
        longitude: -109.5925
      }
    },
    established: '1971',
    size: '76,679 acres',
    highlights: [
      'Delicate Arch',
      'Landscape Arch',
      'Double Arch',
      'Fiery Furnace',
      'Balanced Rock'
    ],
    activities: [
      'Hiking',
      'Photography',
      'Scenic Drives',
      'Rock Climbing',
      'Stargazing'
    ],
    bestTimeToVisit: 'March to May, September to October',
    hikingTrails: [
      {
        name: 'Delicate Arch Trail',
        difficulty: 'Moderate',
        length: '3 miles round trip',
        elevationGain: '480 feet',
        description: 'Popular trail to the iconic Delicate Arch.'
      },
      {
        name: 'Landscape Arch Trail',
        difficulty: 'Easy',
        length: '1.6 miles round trip',
        elevationGain: '50 feet',
        description: 'Trail to one of the world\'s longest natural arches.'
      },
      {
        name: 'Double Arch Trail',
        difficulty: 'Easy',
        length: '0.5 miles round trip',
        elevationGain: '30 feet',
        description: 'Short trail to impressive double arch formation.'
      }
    ],
    airports: [
      {
        name: 'Moab Regional Airport',
        code: 'CNY',
        distance: '20 miles',
        driveTime: '30 minutes'
      },
      {
        name: 'Grand Junction Regional Airport',
        code: 'GJT',
        distance: '110 miles',
        driveTime: '2 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Moab',
        state: 'Utah',
        distance: '5 miles',
        driveTime: '10 minutes'
      },
      {
        name: 'Green River',
        state: 'Utah',
        distance: '50 miles',
        driveTime: '1 hour'
      },
      {
        name: 'Grand Junction',
        state: 'Colorado',
        distance: '110 miles',
        driveTime: '2 hours'
      }
    ]
  },
  {
    id: 'bryce-canyon',
    name: 'Bryce Canyon National Park',
    description: 'Famous for its unique hoodoo rock formations, Bryce Canyon features a stunning amphitheater of red, orange, and white rock spires.',
    location: {
      state: 'Utah',
      coordinates: {
        latitude: 37.5930,
        longitude: -112.1871
      }
    },
    established: '1928',
    size: '35,835 acres',
    highlights: [
      'Sunset Point',
      'Sunrise Point',
      'Inspiration Point',
      'Bryce Amphitheater',
      'Navajo Loop'
    ],
    activities: [
      'Hiking',
      'Scenic Drives',
      'Photography',
      'Stargazing',
      'Horseback Riding'
    ],
    bestTimeToVisit: 'May to September',
    hikingTrails: [
      {
        name: 'Navajo Loop Trail',
        difficulty: 'Moderate',
        length: '1.3 miles loop',
        elevationGain: '550 feet',
        description: 'Popular trail through hoodoos and switchbacks.'
      },
      {
        name: 'Queens Garden Trail',
        difficulty: 'Moderate',
        length: '1.8 miles round trip',
        elevationGain: '320 feet',
        description: 'Trail through hoodoo formations with great views.'
      },
      {
        name: 'Fairyland Loop Trail',
        difficulty: 'Strenuous',
        length: '8 miles loop',
        elevationGain: '1,545 feet',
        description: 'Longer trail with spectacular hoodoo views.'
      }
    ],
    airports: [
      {
        name: 'Bryce Canyon Airport',
        code: 'BCE',
        distance: '5 miles',
        driveTime: '10 minutes'
      },
      {
        name: 'Cedar City Regional Airport',
        code: 'CDC',
        distance: '85 miles',
        driveTime: '1.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Bryce Canyon City',
        state: 'Utah',
        distance: '2 miles',
        driveTime: '5 minutes'
      },
      {
        name: 'Tropic',
        state: 'Utah',
        distance: '10 miles',
        driveTime: '15 minutes'
      },
      {
        name: 'Panguitch',
        state: 'Utah',
        distance: '25 miles',
        driveTime: '30 minutes'
      }
    ]
  },
  {
    id: 'canyonlands',
    name: 'Canyonlands National Park',
    description: 'A vast landscape of canyons, mesas, and buttes carved by the Colorado River and its tributaries, offering some of the most remote and rugged terrain in the American Southwest.',
    location: {
      state: 'Utah',
      coordinates: {
        latitude: 38.3269,
        longitude: -109.8783
      }
    },
    established: '1964',
    size: '337,598 acres',
    highlights: [
      'Island in the Sky',
      'Needles District',
      'Maze District',
      'Green River Overlook',
      'Mesa Arch'
    ],
    activities: [
      'Scenic Drives',
      'Hiking',
      'Photography',
      '4x4 Off-Roading',
      'River Rafting'
    ],
    bestTimeToVisit: 'April to May, September to October',
    hikingTrails: [
      {
        name: 'Mesa Arch Trail',
        difficulty: 'Easy',
        length: '0.5 miles round trip',
        elevationGain: '80 feet',
        description: 'Short trail to famous arch with canyon views.'
      },
      {
        name: 'Grand View Point Trail',
        difficulty: 'Moderate',
        length: '2 miles round trip',
        elevationGain: '100 feet',
        description: 'Trail along canyon rim with panoramic views.'
      },
      {
        name: 'Chesler Park Loop',
        difficulty: 'Strenuous',
        length: '11 miles loop',
        elevationGain: '1,500 feet',
        description: 'Challenging trail through the Needles District.'
      }
    ],
    airports: [
      {
        name: 'Moab Regional Airport',
        code: 'CNY',
        distance: '30 miles',
        driveTime: '45 minutes'
      },
      {
        name: 'Grand Junction Regional Airport',
        code: 'GJT',
        distance: '120 miles',
        driveTime: '2.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Moab',
        state: 'Utah',
        distance: '30 miles',
        driveTime: '45 minutes'
      },
      {
        name: 'Monticello',
        state: 'Utah',
        distance: '50 miles',
        driveTime: '1 hour'
      },
      {
        name: 'Blanding',
        state: 'Utah',
        distance: '70 miles',
        driveTime: '1.5 hours'
      }
    ]
  },
  {
    id: 'capitol-reef',
    name: 'Capitol Reef National Park',
    description: 'A hidden gem featuring the Waterpocket Fold, a geologic monocline that extends for nearly 100 miles, along with colorful canyons, cliffs, and domes.',
    location: {
      state: 'Utah',
      coordinates: {
        latitude: 38.3670,
        longitude: -111.2615
      }
    },
    established: '1971',
    size: '241,904 acres',
    highlights: [
      'Scenic Drive',
      'Capitol Dome',
      'Hickman Bridge',
      'Grand Wash',
      'Fruita Historic District'
    ],
    activities: [
      'Scenic Drives',
      'Hiking',
      'Photography',
      'Fruit Picking',
      'Stargazing'
    ],
    bestTimeToVisit: 'March to October',
    hikingTrails: [
      {
        name: 'Hickman Bridge Trail',
        difficulty: 'Moderate',
        length: '1.8 miles round trip',
        elevationGain: '400 feet',
        description: 'Trail to a natural bridge with canyon views.'
      },
      {
        name: 'Grand Wash Trail',
        difficulty: 'Easy',
        length: '4.4 miles round trip',
        elevationGain: '100 feet',
        description: 'Trail through a narrow canyon wash.'
      },
      {
        name: 'Cohab Canyon Trail',
        difficulty: 'Moderate',
        length: '3.4 miles round trip',
        elevationGain: '440 feet',
        description: 'Trail through narrow canyon with side canyons.'
      }
    ],
    airports: [
      {
        name: 'Richfield Municipal Airport',
        code: 'RIF',
        distance: '70 miles',
        driveTime: '1.5 hours'
      },
      {
        name: 'Cedar City Regional Airport',
        code: 'CDC',
        distance: '120 miles',
        driveTime: '2.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Torrey',
        state: 'Utah',
        distance: '10 miles',
        driveTime: '15 minutes'
      },
      {
        name: 'Bicknell',
        state: 'Utah',
        distance: '15 miles',
        driveTime: '20 minutes'
      },
      {
        name: 'Richfield',
        state: 'Utah',
        distance: '70 miles',
        driveTime: '1.5 hours'
      }
    ]
  },
  {
    id: 'zion',
    name: 'Zion National Park',
    description: 'Known for its towering sandstone cliffs, narrow canyons, and diverse plant and animal life, Zion offers some of the most spectacular scenery in the Southwest.',
    location: {
      state: 'Utah',
      coordinates: {
        latitude: 37.2982,
        longitude: -113.0263
      }
    },
    established: '1919',
    size: '147,242 acres',
    highlights: [
      'Angels Landing',
      'The Narrows',
      'Zion Canyon',
      'Emerald Pools',
      'Weeping Rock'
    ],
    activities: [
      'Hiking',
      'Scenic Drives',
      'Photography',
      'Canyoneering',
      'Rock Climbing'
    ],
    bestTimeToVisit: 'April to October',
    hikingTrails: [
      {
        name: 'Angels Landing Trail',
        difficulty: 'Strenuous',
        length: '5.4 miles round trip',
        elevationGain: '1,488 feet',
        description: 'Famous trail with steep drop-offs and chain sections.'
      },
      {
        name: 'The Narrows',
        difficulty: 'Strenuous',
        length: '16 miles round trip',
        elevationGain: '334 feet',
        description: 'River hike through narrow canyon walls.'
      },
      {
        name: 'Emerald Pools Trail',
        difficulty: 'Moderate',
        length: '3 miles round trip',
        elevationGain: '620 feet',
        description: 'Trail to three tiers of pools with waterfall views.'
      }
    ],
    airports: [
      {
        name: 'St. George Regional Airport',
        code: 'SGU',
        distance: '45 miles',
        driveTime: '1 hour'
      },
      {
        name: 'Cedar City Regional Airport',
        code: 'CDC',
        distance: '60 miles',
        driveTime: '1.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Springdale',
        state: 'Utah',
        distance: '1 mile',
        driveTime: '5 minutes'
      },
      {
        name: 'Hurricane',
        state: 'Utah',
        distance: '20 miles',
        driveTime: '30 minutes'
      },
      {
        name: 'St. George',
        state: 'Utah',
        distance: '45 miles',
        driveTime: '1 hour'
      }
    ]
  }
]; 