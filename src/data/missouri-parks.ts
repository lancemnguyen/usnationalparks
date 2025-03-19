import { Park } from '@/types/park';

export const missouriParks: Park[] = [
  {
    id: 'gateway-arch',
    name: 'Gateway Arch National Park',
    description: 'Home to the iconic Gateway Arch, this park commemorates the westward expansion of the United States.',
    location: {
      state: 'Missouri',
      coordinates: {
        latitude: 38.6247,
        longitude: -90.1848
      }
    },
    established: '2018',
    size: '91 acres',
    highlights: [
      'Gateway Arch',
      'Museum at the Gateway Arch',
      'Riverfront'
    ],
    activities: [
      'Sightseeing',
      'Photography',
      'Walking',
      'Educational Programs'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [],
    airports: [
      {
        name: 'St. Louis Lambert International Airport',
        code: 'STL',
        distance: '15 miles',
        driveTime: '20 minutes'
      }
    ],
    nearbyCities: [
      {
        name: 'St. Louis',
        state: 'Missouri',
        distance: '0 miles',
        driveTime: 'N/A'
      }
    ]
  },
  {
    id: 'mark-twain',
    name: 'Mark Twain National Forest',
    description: 'A vast forest area offering a variety of recreational opportunities, including hiking, camping, and fishing.',
    location: {
      state: 'Missouri',
      coordinates: {
        latitude: 37.2000,
        longitude: -92.6000
      }
    },
    established: '1939',
    size: '1.5 million acres',
    highlights: [
      'Hiking Trails',
      'Scenic Rivers',
      'Wildlife Viewing'
    ],
    activities: [
      'Hiking',
      'Camping',
      'Fishing',
      'Canoeing'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Ozark Trail',
        difficulty: 'Moderate',
        length: '200 miles (various segments)',
        elevationGain: 'Varies',
        description: 'A long-distance trail that traverses the Ozark region, offering beautiful scenery and diverse wildlife.'
      }
    ],
    airports: [
      {
        name: 'Springfield-Branson National Airport',
        code: 'SGF',
        distance: '30 miles',
        driveTime: '45 minutes'
      }
    ],
    nearbyCities: [
      {
        name: 'Rolla',
        state: 'Missouri',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ]
  }
]; 