import { Park } from '@/types/park';

export const maineParks: Park[] = [
  {
    id: 'acadia',
    name: 'Acadia National Park',
    description: 'Known for its stunning coastal views, granite peaks, and diverse ecosystems, Acadia is a favorite destination for outdoor enthusiasts.',
    location: {
      state: 'Maine',
      coordinates: {
        latitude: 44.3382,
        longitude: -68.2733
      }
    },
    established: '1916',
    size: '49,075 acres',
    highlights: [
      'Cadillac Mountain',
      'Jordan Pond',
      'Park Loop Road'
    ],
    activities: [
      'Hiking',
      'Biking',
      'Wildlife Watching',
      'Camping'
    ],
    bestTimeToVisit: 'May to October',
    hikingTrails: [
      {
        name: 'Jordan Pond Path',
        difficulty: 'Easy',
        length: '3.3 miles loop',
        elevationGain: 'Minimal',
        description: 'A scenic loop around Jordan Pond with views of the Bubbles mountains.'
      },
      {
        name: 'Cadillac Mountain Summit Trail',
        difficulty: 'Moderate',
        length: '7 miles round trip',
        elevationGain: '1,500 feet',
        description: 'A challenging hike to the summit of Cadillac Mountain, the highest point on the East Coast.'
      }
    ],
    airports: [
      {
        name: 'Hancock County-Bar Harbor Airport',
        code: 'BHB',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ],
    nearbyCities: [
      {
        name: 'Bar Harbor',
        state: 'Maine',
        distance: '10 miles',
        driveTime: '15 minutes'
      }
    ]
  },
  {
    id: 'baxter',
    name: 'Baxter State Park',
    description: 'Home to Mount Katahdin, the highest peak in Maine, Baxter State Park offers rugged wilderness and stunning views.',
    location: {
      state: 'Maine',
      coordinates: {
        latitude: 45.9074,
        longitude: -68.9217
      }
    },
    established: '1931',
    size: '209,644 acres',
    highlights: [
      'Mount Katahdin',
      'Katahdin Stream Campground',
      'Hiking Trails'
    ],
    activities: [
      'Hiking',
      'Camping',
      'Fishing',
      'Wildlife Watching'
    ],
    bestTimeToVisit: 'June to September',
    hikingTrails: [
      {
        name: 'Knife Edge Trail',
        difficulty: 'Strenuous',
        length: '4.1 miles round trip',
        elevationGain: '1,200 feet',
        description: 'A challenging hike along the Knife Edge ridge with breathtaking views.'
      }
    ],
    airports: [
      {
        name: 'Bangor International Airport',
        code: 'BGR',
        distance: '60 miles',
        driveTime: '1.5 hours'
      }
    ],
    nearbyCities: [
      {
        name: 'Millinocket',
        state: 'Maine',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ]
  }
]; 