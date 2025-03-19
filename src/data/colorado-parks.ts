import { Park } from '@/types/park';

export const coloradoParks: Park[] = [
  {
    id: 'rocky-mountain',
    name: 'Rocky Mountain National Park',
    description: 'A landscape of towering peaks, alpine lakes, and diverse wildlife, Rocky Mountain National Park offers some of the most spectacular mountain scenery in the United States.',
    location: {
      state: 'Colorado',
      coordinates: {
        latitude: 40.3428,
        longitude: -105.6836
      }
    },
    established: '1915',
    size: '265,807 acres',
    highlights: [
      'Trail Ridge Road',
      'Longs Peak',
      'Bear Lake',
      'Alpine Visitor Center',
      'Moraine Park'
    ],
    activities: [
      'Hiking',
      'Scenic Drives',
      'Wildlife Viewing',
      'Photography',
      'Rock Climbing'
    ],
    bestTimeToVisit: 'June to September',
    hikingTrails: [
      {
        name: 'Bear Lake Loop',
        difficulty: 'Easy',
        length: '0.8 miles loop',
        elevationGain: '45 feet',
        description: 'Popular trail around scenic Bear Lake with mountain views.'
      },
      {
        name: 'Emerald Lake Trail',
        difficulty: 'Moderate',
        length: '3.6 miles round trip',
        elevationGain: '605 feet',
        description: 'Trail past three alpine lakes with stunning mountain views.'
      },
      {
        name: 'Sky Pond Trail',
        difficulty: 'Strenuous',
        length: '9.4 miles round trip',
        elevationGain: '1,580 feet',
        description: 'Challenging trail to a beautiful alpine lake with waterfall views.'
      }
    ],
    airports: [
      {
        name: 'Denver International Airport',
        code: 'DEN',
        distance: '80 miles',
        driveTime: '1.5 hours'
      },
      {
        name: 'Eagle County Regional Airport',
        code: 'EGE',
        distance: '120 miles',
        driveTime: '2.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Estes Park',
        state: 'Colorado',
        distance: '5 miles',
        driveTime: '10 minutes'
      },
      {
        name: 'Grand Lake',
        state: 'Colorado',
        distance: '10 miles',
        driveTime: '20 minutes'
      },
      {
        name: 'Boulder',
        state: 'Colorado',
        distance: '40 miles',
        driveTime: '1 hour'
      }
    ]
  },
  {
    id: 'mesa-verde',
    name: 'Mesa Verde National Park',
    description: 'Home to some of the best-preserved Ancestral Puebloan archaeological sites in the United States, Mesa Verde offers a fascinating glimpse into ancient Native American life.',
    location: {
      state: 'Colorado',
      coordinates: {
        latitude: 37.2309,
        longitude: -108.4618
      }
    },
    established: '1906',
    size: '52,485 acres',
    highlights: [
      'Cliff Palace',
      'Balcony House',
      'Long House',
      'Chapin Mesa',
      'Spruce Tree House'
    ],
    activities: [
      'Archaeological Tours',
      'Hiking',
      'Scenic Drives',
      'Photography',
      'Stargazing'
    ],
    bestTimeToVisit: 'April to October',
    hikingTrails: [
      {
        name: 'Petroglyph Point Trail',
        difficulty: 'Moderate',
        length: '2.4 miles loop',
        elevationGain: '300 feet',
        description: 'Trail to ancient petroglyphs with canyon views.'
      },
      {
        name: 'Spruce Canyon Trail',
        difficulty: 'Moderate',
        length: '2.4 miles loop',
        elevationGain: '500 feet',
        description: 'Trail through canyon with archaeological sites.'
      },
      {
        name: 'Point Lookout Trail',
        difficulty: 'Moderate',
        length: '2.2 miles round trip',
        elevationGain: '430 feet',
        description: 'Trail to panoramic views of the park.'
      }
    ],
    airports: [
      {
        name: 'Cortez Municipal Airport',
        code: 'CEZ',
        distance: '10 miles',
        driveTime: '20 minutes'
      },
      {
        name: 'Durango-La Plata County Airport',
        code: 'DRO',
        distance: '45 miles',
        driveTime: '1 hour'
      }
    ],
    nearbyCities: [
      {
        name: 'Cortez',
        state: 'Colorado',
        distance: '10 miles',
        driveTime: '20 minutes'
      },
      {
        name: 'Mancos',
        state: 'Colorado',
        distance: '8 miles',
        driveTime: '15 minutes'
      },
      {
        name: 'Durango',
        state: 'Colorado',
        distance: '45 miles',
        driveTime: '1 hour'
      }
    ]
  },
  {
    id: 'great-sand-dunes',
    name: 'Great Sand Dunes National Park & Preserve',
    description: 'Home to the tallest dunes in North America, this unique landscape features massive sand dunes against a backdrop of snow-capped mountains.',
    location: {
      state: 'Colorado',
      coordinates: {
        latitude: 37.7925,
        longitude: -105.5942
      }
    },
    established: '2004',
    size: '149,137 acres',
    highlights: [
      'High Dune',
      'Star Dune',
      'Medano Creek',
      'Sangre de Cristo Mountains',
      'Dunes Overlook'
    ],
    activities: [
      'Sandboarding',
      'Hiking',
      'Photography',
      'Stargazing',
      'Medano Creek Play'
    ],
    bestTimeToVisit: 'April to October',
    hikingTrails: [
      {
        name: 'High Dune Trail',
        difficulty: 'Strenuous',
        length: '2.5 miles round trip',
        elevationGain: '699 feet',
        description: 'Challenging hike to the top of High Dune with panoramic views.'
      },
      {
        name: 'Mosca Pass Trail',
        difficulty: 'Moderate',
        length: '7 miles round trip',
        elevationGain: '1,500 feet',
        description: 'Trail through forest to historic pass.'
      },
      {
        name: 'Dunes Overlook Trail',
        difficulty: 'Moderate',
        length: '1 mile round trip',
        elevationGain: '200 feet',
        description: 'Trail to views of the dune field.'
      }
    ],
    airports: [
      {
        name: 'Alamosa Municipal Airport',
        code: 'ALS',
        distance: '35 miles',
        driveTime: '45 minutes'
      },
      {
        name: 'Colorado Springs Airport',
        code: 'COS',
        distance: '160 miles',
        driveTime: '3 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Alamosa',
        state: 'Colorado',
        distance: '35 miles',
        driveTime: '45 minutes'
      },
      {
        name: 'Mosca',
        state: 'Colorado',
        distance: '15 miles',
        driveTime: '20 minutes'
      },
      {
        name: 'Monte Vista',
        state: 'Colorado',
        distance: '45 miles',
        driveTime: '1 hour'
      }
    ]
  },
  {
    id: 'black-canyon',
    name: 'Black Canyon of the Gunnison National Park',
    description: 'A dramatic landscape of steep cliffs and narrow canyons carved by the Gunnison River, featuring some of the oldest exposed rock on Earth.',
    location: {
      state: 'Colorado',
      coordinates: {
        latitude: 38.5733,
        longitude: -107.7322
      }
    },
    established: '1999',
    size: '30,750 acres',
    highlights: [
      'Painted Wall',
      'Gunnison Point',
      'Chasm View',
      'Cedar Point',
      'Warner Point'
    ],
    activities: [
      'Scenic Drives',
      'Hiking',
      'Rock Climbing',
      'Photography',
      'Stargazing'
    ],
    bestTimeToVisit: 'April to October',
    hikingTrails: [
      {
        name: 'Rim Rock Nature Trail',
        difficulty: 'Easy',
        length: '1 mile loop',
        elevationGain: '50 feet',
        description: 'Accessible trail with canyon views.'
      },
      {
        name: 'Warner Point Nature Trail',
        difficulty: 'Moderate',
        length: '1.5 miles round trip',
        elevationGain: '400 feet',
        description: 'Trail to panoramic views of the canyon.'
      },
      {
        name: 'Oak Flat Loop Trail',
        difficulty: 'Moderate',
        length: '2 miles loop',
        elevationGain: '400 feet',
        description: 'Trail through forest with canyon views.'
      }
    ],
    airports: [
      {
        name: 'Montrose Regional Airport',
        code: 'MTJ',
        distance: '15 miles',
        driveTime: '25 minutes'
      },
      {
        name: 'Gunnison-Crested Butte Regional Airport',
        code: 'GUC',
        distance: '65 miles',
        driveTime: '1.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Montrose',
        state: 'Colorado',
        distance: '15 miles',
        driveTime: '25 minutes'
      },
      {
        name: 'Gunnison',
        state: 'Colorado',
        distance: '65 miles',
        driveTime: '1.5 hours'
      },
      {
        name: 'Delta',
        state: 'Colorado',
        distance: '45 miles',
        driveTime: '1 hour'
      }
    ]
  }
]; 