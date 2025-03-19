import { Park } from '@/types/park';

export const floridaParks: Park[] = [
  {
    id: 'everglades',
    name: 'Everglades National Park',
    description: 'The largest subtropical wilderness in the U.S., known for its unique ecosystem and diverse wildlife.',
    location: {
      state: 'Florida',
      coordinates: {
        latitude: 25.2866,
        longitude: -80.8987
      }
    },
    established: '1947',
    size: '1.5 million acres',
    highlights: [
      'Shark Valley',
      'Anhinga Trail',
      'Flamingo Visitor Center'
    ],
    activities: [
      'Kayaking',
      'Wildlife Watching',
      'Hiking',
      'Camping'
    ],
    bestTimeToVisit: 'December to April',
    hikingTrails: [
      {
        name: 'Anhinga Trail',
        difficulty: 'Easy',
        length: '0.8 miles round trip',
        elevationGain: 'Minimal',
        description: 'A short, paved trail with boardwalks that offers great wildlife viewing opportunities.'
      },
      {
        name: 'Gumbo Limbo Trail',
        difficulty: 'Easy',
        length: '0.4 miles loop',
        elevationGain: 'Minimal',
        description: 'A loop trail through a tropical hardwood hammock.'
      }
    ],
    airports: [
      {
        name: 'Miami International Airport',
        code: 'MIA',
        distance: '40 miles',
        driveTime: '1 hour'
      }
    ],
    nearbyCities: [
      {
        name: 'Homestead',
        state: 'Florida',
        distance: '15 miles',
        driveTime: '30 minutes'
      },
      {
        name: 'Florida City',
        state: 'Florida',
        distance: '20 miles',
        driveTime: '30 minutes'
      }
    ]
  },
  {
    id: 'dry-tortugas',
    name: 'Dry Tortugas National Park',
    description: 'A remote park known for its beautiful coral reefs, historic Fort Jefferson, and pristine beaches.',
    location: {
      state: 'Florida',
      coordinates: {
        latitude: 24.6280,
        longitude: -82.8750
      }
    },
    established: '1992',
    size: '64,701 acres',
    highlights: [
      'Fort Jefferson',
      'Snorkeling and Diving',
      'Bird Watching'
    ],
    activities: [
      'Snorkeling',
      'Camping',
      'Bird Watching',
      'Fishing'
    ],
    bestTimeToVisit: 'December to April',
    hikingTrails: [
      {
        name: 'Garden Key Trail',
        difficulty: 'Easy',
        length: '1 mile loop',
        elevationGain: 'Minimal',
        description: 'A short trail around Garden Key with views of Fort Jefferson and the surrounding waters.'
      }
    ],
    airports: [
      {
        name: 'Key West International Airport',
        code: 'EYW',
        distance: '70 miles',
        driveTime: '2 hours by ferry'
      }
    ],
    nearbyCities: [
      {
        name: 'Key West',
        state: 'Florida',
        distance: '70 miles',
        driveTime: '2 hours by ferry'
      }
    ]
  }
]; 