import { Park } from '@/types/park';

export const washingtonParks: Park[] = [
  {
    id: 'olympic',
    name: 'Olympic National Park',
    description: 'A diverse landscape featuring temperate rainforests, rugged coastlines, and glacier-capped mountains, Olympic National Park offers a unique blend of ecosystems.',
    location: {
      state: 'Washington',
      coordinates: {
        latitude: 47.8021,
        longitude: -123.6044
      }
    },
    established: '1938',
    size: '922,650 acres',
    highlights: [
      'Hoh Rain Forest',
      'Hurricane Ridge',
      'Ruby Beach',
      'Lake Crescent',
      'Sol Duc Falls'
    ],
    activities: [
      'Hiking',
      'Beachcombing',
      'Wildlife Viewing',
      'Photography',
      'Camping'
    ],
    bestTimeToVisit: 'July to September',
    hikingTrails: [
      {
        name: 'Hoh River Trail',
        difficulty: 'Moderate',
        length: '5.2 miles round trip',
        elevationGain: '200 feet',
        description: 'Trail through temperate rainforest along the Hoh River.'
      },
      {
        name: 'Hurricane Hill Trail',
        difficulty: 'Moderate',
        length: '3.2 miles round trip',
        elevationGain: '700 feet',
        description: 'Trail with panoramic mountain views.'
      },
      {
        name: 'Sol Duc Falls Trail',
        difficulty: 'Easy',
        length: '1.6 miles round trip',
        elevationGain: '200 feet',
        description: 'Trail to a beautiful waterfall in the rainforest.'
      }
    ],
    airports: [
      {
        name: 'William R. Fairchild International Airport',
        code: 'CLM',
        distance: '50 miles',
        driveTime: '1 hour'
      },
      {
        name: 'Seattle-Tacoma International Airport',
        code: 'SEA',
        distance: '150 miles',
        driveTime: '3 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Port Angeles',
        state: 'Washington',
        distance: '5 miles',
        driveTime: '10 minutes'
      },
      {
        name: 'Sequim',
        state: 'Washington',
        distance: '20 miles',
        driveTime: '30 minutes'
      },
      {
        name: 'Forks',
        state: 'Washington',
        distance: '50 miles',
        driveTime: '1 hour'
      }
    ]
  },
  {
    id: 'mount-rainier',
    name: 'Mount Rainier National Park',
    description: 'Home to the iconic Mount Rainier, this park features the most glaciated peak in the contiguous United States, surrounded by old-growth forests and wildflower meadows.',
    location: {
      state: 'Washington',
      coordinates: {
        latitude: 46.8800,
        longitude: -121.7269
      }
    },
    established: '1899',
    size: '236,381 acres',
    highlights: [
      'Mount Rainier',
      'Paradise',
      'Sunrise',
      'Grove of the Patriarchs',
      'Reflection Lakes'
    ],
    activities: [
      'Hiking',
      'Mountain Climbing',
      'Wildflower Viewing',
      'Photography',
      'Snow Sports'
    ],
    bestTimeToVisit: 'July to September',
    hikingTrails: [
      {
        name: 'Skyline Trail',
        difficulty: 'Strenuous',
        length: '5.5 miles loop',
        elevationGain: '1,700 feet',
        description: 'Popular trail with mountain and wildflower views.'
      },
      {
        name: 'Grove of the Patriarchs Trail',
        difficulty: 'Easy',
        length: '1.5 miles round trip',
        elevationGain: '50 feet',
        description: 'Trail through ancient forest giants.'
      },
      {
        name: 'Naches Peak Loop',
        difficulty: 'Moderate',
        length: '3.5 miles loop',
        elevationGain: '600 feet',
        description: 'Trail with views of Mount Rainier and wildflowers.'
      }
    ],
    airports: [
      {
        name: 'Seattle-Tacoma International Airport',
        code: 'SEA',
        distance: '85 miles',
        driveTime: '2 hours'
      },
      {
        name: 'Yakima Air Terminal',
        code: 'YKM',
        distance: '90 miles',
        driveTime: '2 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Ashford',
        state: 'Washington',
        distance: '6 miles',
        driveTime: '15 minutes'
      },
      {
        name: 'Packwood',
        state: 'Washington',
        distance: '20 miles',
        driveTime: '30 minutes'
      },
      {
        name: 'Enumclaw',
        state: 'Washington',
        distance: '40 miles',
        driveTime: '1 hour'
      }
    ]
  },
  {
    id: 'north-cascades',
    name: 'North Cascades National Park',
    description: 'Known as the "American Alps," this park features jagged peaks, glaciers, and pristine lakes in a remote wilderness setting.',
    location: {
      state: 'Washington',
      coordinates: {
        latitude: 48.7718,
        longitude: -121.2987
      }
    },
    established: '1968',
    size: '504,654 acres',
    highlights: [
      'Diablo Lake',
      'Cascade Pass',
      'Ross Lake',
      'Sahale Arm',
      'Stehekin Valley'
    ],
    activities: [
      'Hiking',
      'Backpacking',
      'Rock Climbing',
      'Photography',
      'Wildlife Viewing'
    ],
    bestTimeToVisit: 'July to September',
    hikingTrails: [
      {
        name: 'Cascade Pass Trail',
        difficulty: 'Moderate',
        length: '3.7 miles round trip',
        elevationGain: '1,800 feet',
        description: 'Trail with spectacular mountain and glacier views.'
      },
      {
        name: 'Thunder Creek Trail',
        difficulty: 'Moderate',
        length: '4.6 miles round trip',
        elevationGain: '500 feet',
        description: 'Trail through old-growth forest along a creek.'
      },
      {
        name: 'Blue Lake Trail',
        difficulty: 'Moderate',
        length: '4.4 miles round trip',
        elevationGain: '1,050 feet',
        description: 'Trail to a beautiful alpine lake.'
      }
    ],
    airports: [
      {
        name: 'Seattle-Tacoma International Airport',
        code: 'SEA',
        distance: '120 miles',
        driveTime: '2.5 hours'
      },
      {
        name: 'Bellingham International Airport',
        code: 'BLI',
        distance: '60 miles',
        driveTime: '1.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Marblemount',
        state: 'Washington',
        distance: '5 miles',
        driveTime: '10 minutes'
      },
      {
        name: 'Concrete',
        state: 'Washington',
        distance: '20 miles',
        driveTime: '30 minutes'
      },
      {
        name: 'Bellingham',
        state: 'Washington',
        distance: '60 miles',
        driveTime: '1.5 hours'
      }
    ]
  }
]; 