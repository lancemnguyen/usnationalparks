import { Park } from '@/types/park';

export const hawaiiParks: Park[] = [
  {
    id: 'hawaii-volcanoes',
    name: 'Hawai\'i Volcanoes National Park',
    description: 'Home to two of the world\'s most active volcanoes, Kīlauea and Mauna Loa, this park offers unique volcanic landscapes and Hawaiian cultural sites.',
    location: {
      state: 'Hawaii',
      coordinates: {
        latitude: 19.4197,
        longitude: -155.2883
      }
    },
    established: '1916',
    size: '323,431 acres',
    highlights: [
      'Kīlauea Caldera',
      'Mauna Loa',
      'Chain of Craters Road',
      'Thurston Lava Tube',
      'Holei Sea Arch'
    ],
    activities: [
      'Volcano Viewing',
      'Hiking',
      'Scenic Drives',
      'Cultural Sites',
      'Photography'
    ],
    bestTimeToVisit: 'Year-round',
    hikingTrails: [
      {
        name: 'Kīlauea Iki Trail',
        difficulty: 'Moderate',
        length: '4 miles round trip',
        elevationGain: '400 feet',
        description: 'Trail across a solidified lava lake with steam vents.'
      },
      {
        name: 'Devastation Trail',
        difficulty: 'Easy',
        length: '1 mile round trip',
        elevationGain: '50 feet',
        description: 'Paved trail through a landscape devastated by 1959 eruption.'
      },
      {
        name: 'Mauna Loa Trail',
        difficulty: 'Strenuous',
        length: '12.6 miles round trip',
        elevationGain: '2,000 feet',
        description: 'Challenging trail to Mauna Loa\'s summit area.'
      }
    ],
    airports: [
      {
        name: 'Hilo International Airport',
        code: 'ITO',
        distance: '30 miles',
        driveTime: '45 minutes'
      },
      {
        name: 'Kona International Airport',
        code: 'KOA',
        distance: '95 miles',
        driveTime: '2 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Volcano',
        state: 'Hawaii',
        distance: '1 mile',
        driveTime: '5 minutes'
      },
      {
        name: 'Hilo',
        state: 'Hawaii',
        distance: '30 miles',
        driveTime: '45 minutes'
      },
      {
        name: 'Pahala',
        state: 'Hawaii',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ]
  },
  {
    id: 'haleakala',
    name: 'Haleakalā National Park',
    description: 'Featuring a massive shield volcano, this park protects the unique ecosystems of Maui\'s highest peak and the Kipahulu coastal area.',
    location: {
      state: 'Hawaii',
      coordinates: {
        latitude: 20.7208,
        longitude: -156.1552
      }
    },
    established: '1916',
    size: '33,265 acres',
    highlights: [
      'Haleakalā Crater',
      'Seven Sacred Pools',
      'Waimoku Falls',
      'Sliding Sands Trail',
      'Hosmer Grove'
    ],
    activities: [
      'Sunrise Viewing',
      'Hiking',
      'Stargazing',
      'Bird Watching',
      'Photography'
    ],
    bestTimeToVisit: 'Year-round',
    hikingTrails: [
      {
        name: 'Sliding Sands Trail',
        difficulty: 'Strenuous',
        length: '11 miles round trip',
        elevationGain: '2,800 feet',
        description: 'Trail descending into the volcanic crater.'
      },
      {
        name: 'Pipiwai Trail',
        difficulty: 'Moderate',
        length: '4 miles round trip',
        elevationGain: '650 feet',
        description: 'Trail through bamboo forest to Waimoku Falls.'
      },
      {
        name: 'Hosmer Grove Trail',
        difficulty: 'Easy',
        length: '0.5 miles loop',
        elevationGain: '100 feet',
        description: 'Trail through unique forest ecosystem.'
      }
    ],
    airports: [
      {
        name: 'Kahului Airport',
        code: 'OGG',
        distance: '35 miles',
        driveTime: '1 hour'
      },
      {
        name: 'Hana Airport',
        code: 'HNM',
        distance: '2 miles',
        driveTime: '5 minutes'
      }
    ],
    nearbyCities: [
      {
        name: 'Kula',
        state: 'Hawaii',
        distance: '15 miles',
        driveTime: '30 minutes'
      },
      {
        name: 'Hana',
        state: 'Hawaii',
        distance: '2 miles',
        driveTime: '5 minutes'
      },
      {
        name: 'Pukalani',
        state: 'Hawaii',
        distance: '10 miles',
        driveTime: '20 minutes'
      }
    ]
  }
]; 