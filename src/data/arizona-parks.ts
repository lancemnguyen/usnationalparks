import { Park } from '@/types/park';

export const arizonaParks: Park[] = [
  {
    id: 'grand-canyon',
    name: 'Grand Canyon National Park',
    description: 'One of the world\'s most spectacular natural wonders, the Grand Canyon reveals Earth\'s geologic history through its colorful layers of rock and the mighty Colorado River.',
    location: {
      state: 'Arizona',
      coordinates: {
        latitude: 36.0544,
        longitude: -112.1401
      }
    },
    established: '1919',
    size: '1,201,647 acres',
    highlights: [
      'South Rim',
      'North Rim',
      'Colorado River',
      'Bright Angel Trail',
      'Desert View Watchtower'
    ],
    activities: [
      'Hiking',
      'Scenic Drives',
      'River Rafting',
      'Photography',
      'Stargazing'
    ],
    bestTimeToVisit: 'March to May, September to November',
    hikingTrails: [
      {
        name: 'Bright Angel Trail',
        difficulty: 'Strenuous',
        length: '9.3 miles round trip to Plateau Point',
        elevationGain: '3,060 feet',
        description: 'Popular trail with water stations and rest houses.'
      },
      {
        name: 'South Kaibab Trail',
        difficulty: 'Strenuous',
        length: '6.8 miles round trip to Skeleton Point',
        elevationGain: '2,040 feet',
        description: 'Steep trail with spectacular views.'
      },
      {
        name: 'Rim Trail',
        difficulty: 'Easy',
        length: '13 miles one-way',
        elevationGain: '200 feet',
        description: 'Paved trail along the South Rim with shuttle access.'
      }
    ],
    airports: [
      {
        name: 'Flagstaff Pulliam Airport',
        code: 'FLG',
        distance: '80 miles',
        driveTime: '1.5 hours'
      },
      {
        name: 'Phoenix Sky Harbor International Airport',
        code: 'PHX',
        distance: '230 miles',
        driveTime: '4 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Grand Canyon Village',
        state: 'Arizona',
        distance: '0 miles',
        driveTime: '0 minutes'
      },
      {
        name: 'Williams',
        state: 'Arizona',
        distance: '60 miles',
        driveTime: '1 hour'
      },
      {
        name: 'Flagstaff',
        state: 'Arizona',
        distance: '80 miles',
        driveTime: '1.5 hours'
      }
    ]
  },
  {
    id: 'petrified-forest',
    name: 'Petrified Forest National Park',
    description: 'A landscape of colorful badlands and ancient petrified wood, this park preserves one of the world\'s largest and most colorful concentrations of petrified wood.',
    location: {
      state: 'Arizona',
      coordinates: {
        latitude: 35.0847,
        longitude: -109.8062
      }
    },
    established: '1962',
    size: '221,390 acres',
    highlights: [
      'Painted Desert',
      'Crystal Forest',
      'Blue Mesa',
      'Agate Bridge',
      'Giant Logs'
    ],
    activities: [
      'Scenic Drives',
      'Hiking',
      'Photography',
      'Fossil Viewing',
      'Stargazing'
    ],
    bestTimeToVisit: 'March to May, September to November',
    hikingTrails: [
      {
        name: 'Giant Logs Trail',
        difficulty: 'Easy',
        length: '0.4 miles loop',
        elevationGain: '20 feet',
        description: 'Short trail past some of the largest petrified logs.'
      },
      {
        name: 'Blue Mesa Trail',
        difficulty: 'Moderate',
        length: '1 mile loop',
        elevationGain: '100 feet',
        description: 'Trail through colorful badlands formations.'
      },
      {
        name: 'Crystal Forest Trail',
        difficulty: 'Easy',
        length: '0.75 miles loop',
        elevationGain: '30 feet',
        description: 'Trail through dense concentration of petrified wood.'
      }
    ],
    airports: [
      {
        name: 'Flagstaff Pulliam Airport',
        code: 'FLG',
        distance: '100 miles',
        driveTime: '2 hours'
      },
      {
        name: 'Gallup Municipal Airport',
        code: 'GUP',
        distance: '90 miles',
        driveTime: '1.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Holbrook',
        state: 'Arizona',
        distance: '20 miles',
        driveTime: '30 minutes'
      },
      {
        name: 'Winslow',
        state: 'Arizona',
        distance: '60 miles',
        driveTime: '1 hour'
      },
      {
        name: 'Flagstaff',
        state: 'Arizona',
        distance: '100 miles',
        driveTime: '2 hours'
      }
    ]
  },
  {
    id: 'saguaro',
    name: 'Saguaro National Park',
    description: 'Home to the nation\'s largest cacti, Saguaro National Park protects the giant saguaro cactus and the unique desert ecosystem of the Sonoran Desert.',
    location: {
      state: 'Arizona',
      coordinates: {
        latitude: 32.1167,
        longitude: -110.9333
      }
    },
    established: '1994',
    size: '91,327 acres',
    highlights: [
      'Saguaro Cactus Forest',
      'Rincon Mountains',
      'Tucson Mountains',
      'Signal Hill Petroglyphs',
      'Desert Museum'
    ],
    activities: [
      'Hiking',
      'Scenic Drives',
      'Wildlife Watching',
      'Photography',
      'Stargazing'
    ],
    bestTimeToVisit: 'October to April',
    hikingTrails: [
      {
        name: 'Cactus Forest Loop Drive',
        difficulty: 'Easy',
        length: '8 miles loop',
        elevationGain: '100 feet',
        description: 'Scenic drive through dense saguaro forest.'
      },
      {
        name: 'Signal Hill Trail',
        difficulty: 'Easy',
        length: '0.3 miles round trip',
        elevationGain: '50 feet',
        description: 'Trail to ancient petroglyphs.'
      },
      {
        name: 'Douglas Spring Trail',
        difficulty: 'Strenuous',
        length: '6.4 miles round trip',
        elevationGain: '1,300 feet',
        description: 'Trail to Douglas Spring in the Rincon Mountains.'
      }
    ],
    airports: [
      {
        name: 'Tucson International Airport',
        code: 'TUS',
        distance: '15 miles',
        driveTime: '30 minutes'
      },
      {
        name: 'Phoenix Sky Harbor International Airport',
        code: 'PHX',
        distance: '120 miles',
        driveTime: '2 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Tucson',
        state: 'Arizona',
        distance: '15 miles',
        driveTime: '30 minutes'
      },
      {
        name: 'Vail',
        state: 'Arizona',
        distance: '25 miles',
        driveTime: '40 minutes'
      },
      {
        name: 'Marana',
        state: 'Arizona',
        distance: '35 miles',
        driveTime: '1 hour'
      }
    ]
  }
]; 