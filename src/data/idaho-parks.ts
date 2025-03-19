import { Park } from '@/types/park';

export const idahoParks: Park[] = [
  {
    id: 'yellowstone',
    name: 'Yellowstone National Park',
    description: 'While primarily in Wyoming, a small portion of Yellowstone extends into Idaho, featuring geothermal features and diverse wildlife.',
    location: {
      state: 'Idaho',
      coordinates: {
        latitude: 44.4280,
        longitude: -111.1000
      }
    },
    established: '1872',
    size: '2,219,791 acres (portion in Idaho)',
    highlights: [
      'Beaver Creek',
      'Island Park',
      'Henry\'s Lake',
      'Targhee Pass',
      'Bechler Region'
    ],
    activities: [
      'Hiking',
      'Wildlife Watching',
      'Fishing',
      'Scenic Drives',
      'Photography'
    ],
    bestTimeToVisit: 'June to September',
    hikingTrails: [
      {
        name: 'Bechler Meadows Trail',
        difficulty: 'Easy',
        length: '3.6 miles round trip',
        elevationGain: '100 feet',
        description: 'Trail through meadows with views of waterfalls.'
      },
      {
        name: 'Cave Falls Trail',
        difficulty: 'Easy',
        length: '1.2 miles round trip',
        elevationGain: '50 feet',
        description: 'Trail to a wide waterfall on the Falls River.'
      }
    ],
    airports: [
      {
        name: 'Idaho Falls Regional Airport',
        code: 'IDA',
        distance: '90 miles',
        driveTime: '2 hours'
      },
      {
        name: 'Jackson Hole Airport',
        code: 'JAC',
        distance: '100 miles',
        driveTime: '2.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Island Park',
        state: 'Idaho',
        distance: '20 miles',
        driveTime: '30 minutes'
      },
      {
        name: 'Ashton',
        state: 'Idaho',
        distance: '30 miles',
        driveTime: '45 minutes'
      },
      {
        name: 'Rexburg',
        state: 'Idaho',
        distance: '60 miles',
        driveTime: '1.5 hours'
      }
    ]
  }
]; 