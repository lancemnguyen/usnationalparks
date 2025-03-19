import { Park } from '@/types/park';

export const michiganParks: Park[] = [
  {
    id: 'isle-royale',
    name: 'Isle Royale National Park',
    description: 'A remote island park known for its rugged wilderness, wildlife, and stunning views of Lake Superior.',
    location: {
      state: 'Michigan',
      coordinates: {
        latitude: 48.0994,
        longitude: -88.5400
      }
    },
    established: '1940',
    size: '894 square miles',
    highlights: [
      'Rock Harbor',
      'Windigo',
      'Moose and Wolf Watching'
    ],
    activities: [
      'Hiking',
      'Canoeing',
      'Camping',
      'Fishing'
    ],
    bestTimeToVisit: 'June to September',
    hikingTrails: [
      {
        name: 'Greenstone Ridge Trail',
        difficulty: 'Strenuous',
        length: '40 miles',
        elevationGain: '1,200 feet',
        description: 'A challenging trail that runs the length of the island, offering stunning views.'
      }
    ],
    airports: [
      {
        name: 'Houghton County Memorial Airport',
        code: 'CMX',
        distance: '60 miles',
        driveTime: '1.5 hours to the ferry'
      }
    ],
    nearbyCities: [
      {
        name: 'Houghton',
        state: 'Michigan',
        distance: '60 miles',
        driveTime: '1.5 hours'
      }
    ]
  },
  {
    id: 'sleeping-bear-dunes',
    name: 'Sleeping Bear Dunes National Lakeshore',
    description: 'Famous for its towering sand dunes and beautiful beaches along Lake Michigan, this park offers stunning views and recreational opportunities.',
    location: {
      state: 'Michigan',
      coordinates: {
        latitude: 44.7439,
        longitude: -86.0214
      }
    },
    established: '1970',
    size: '71,199 acres',
    highlights: [
      'Dune Climb',
      'Pierce Stocking Scenic Drive',
      'Lake Michigan Beaches'
    ],
    activities: [
      'Hiking',
      'Swimming',
      'Camping',
      'Wildlife Watching'
    ],
    bestTimeToVisit: 'May to October',
    hikingTrails: [
      {
        name: 'Empire Bluff Trail',
        difficulty: 'Moderate',
        length: '1.5 miles round trip',
        elevationGain: '200 feet',
        description: 'A scenic trail leading to breathtaking views of Lake Michigan.'
      }
    ],
    airports: [
      {
        name: 'Cherry Capital Airport',
        code: 'TVC',
        distance: '30 miles',
        driveTime: '45 minutes'
      }
    ],
    nearbyCities: [
      {
        name: 'Empire',
        state: 'Michigan',
        distance: '5 miles',
        driveTime: '10 minutes'
      }
    ]
  }
]; 