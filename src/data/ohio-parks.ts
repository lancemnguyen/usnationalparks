import { Park } from '@/types/park';

export const ohioParks: Park[] = [
  {
    id: 'cuyahoga-valley',
    name: 'Cuyahoga Valley National Park',
    description: 'Located between Cleveland and Akron, this park features beautiful landscapes, waterfalls, and a rich cultural history.',
    location: {
      state: 'Ohio',
      coordinates: {
        latitude: 41.4332,
        longitude: -81.5500
      }
    },
    established: '2000',
    size: '32,572 acres',
    highlights: [
      'Brandywine Falls',
      'Ohio & Erie Canal Towpath Trail',
      'Cuyahoga River'
    ],
    activities: [
      'Hiking',
      'Biking',
      'Wildlife Watching',
      'Photography'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Brandywine Gorge Trail',
        difficulty: 'Moderate',
        length: '1.5 miles loop',
        elevationGain: '200 feet',
        description: 'A scenic trail that leads to the stunning Brandywine Falls.'
      }
    ],
    airports: [
      {
        name: 'Cleveland Hopkins International Airport',
        code: 'CLE',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ],
    nearbyCities: [
      {
        name: 'Peninsula',
        state: 'Ohio',
        distance: '5 miles',
        driveTime: '10 minutes'
      }
    ]
  },
  {
    id: 'hopewell-culture',
    name: 'Hopewell Culture National Historical Park',
    description: 'This park preserves the earthworks and mounds built by ancient Native American cultures, offering insights into their history and culture.',
    location: {
      state: 'Ohio',
      coordinates: {
        latitude: 39.3480,
        longitude: -82.5160
      }
    },
    established: '1992',
    size: '1,200 acres',
    highlights: [
      'Mound City Group',
      'Seip Earthworks',
      'Visitor Center'
    ],
    activities: [
      'Historical Tours',
      'Wildlife Viewing',
      'Photography'
    ],
    bestTimeToVisit: 'Spring and Fall',
    hikingTrails: [
      {
        name: 'Mound City Group Trail',
        difficulty: 'Easy',
        length: '0.5 miles loop',
        elevationGain: 'Minimal',
        description: 'A short loop trail that provides access to the mounds and earthworks.'
      }
    ],
    airports: [
      {
        name: 'Port Columbus International Airport',
        code: 'CMH',
        distance: '60 miles',
        driveTime: '1 hour'
      }
    ],
    nearbyCities: [
      {
        name: 'Chillicothe',
        state: 'Ohio',
        distance: '10 miles',
        driveTime: '15 minutes'
      }
    ]
  }
]; 