import { Metadata } from 'next';
// import { notFound } from 'next/navigation';
import { alaskaParks } from '@/data/alaska-parks';
import { arizonaParks } from '@/data/arizona-parks';
import { arkansasParks } from '@/data/arkansas-parks';
import { californiaParks } from '@/data/california-parks';
import { coloradoParks } from '@/data/colorado-parks';
import { floridaParks } from '@/data/florida-parks';
import { hawaiiParks } from '@/data/hawaii-parks';
import { idahoParks } from '@/data/idaho-parks';
import { indianaParks } from '@/data/indiana-parks';
import { kentuckyParks } from '@/data/kentucky-parks';
import { maineParks } from '@/data/maine-parks';
import { michiganParks } from '@/data/michigan-parks';
import { minnesotaParks } from '@/data/minnesota-parks';
import { missouriParks } from '@/data/missouri-parks';
import { montanaParks } from '@/data/montana-parks';
import { nevadaParks } from '@/data/nevada-parks';
import { newMexicoParks } from '@/data/new-mexico-parks';
import { northCarolinaParks } from '@/data/north-carolina-parks';
import { northDakotaParks } from '@/data/north-dakota-parks';
import { ohioParks } from '@/data/ohio-parks';
import { oregonParks } from '@/data/oregon-parks';
import { southCarolinaParks } from '@/data/south-carolina-parks';
import { southDakotaParks } from '@/data/south-dakota-parks';
import { tennesseeParks } from '@/data/tennessee-parks';
import { texasParks } from '@/data/texas-parks';
import { utahParks } from '@/data/utah-parks';
import { virginiaParks } from '@/data/virginia-parks';
import { washingtonParks } from '@/data/washington-parks';
import { westVirginiaParks } from '@/data/west-virginia-parks';
import { wyomingParks } from '@/data/wyoming-parks';
import { Park } from '@/types/park';
import ParkCard from '@/components/ParkCard';

// Map of state names to their park data
const stateParksMap: { [key: string]: Park[] } = {
  alaska: alaskaParks,
  arizona: arizonaParks,
  arkansas: arkansasParks,
  california: californiaParks,
  colorado: coloradoParks,
  florida: floridaParks,
  hawaii: hawaiiParks,
  idaho: idahoParks,
  indiana: indianaParks,
  kentucky: kentuckyParks,
  maine: maineParks,
  michigan: michiganParks,
  minnesota: minnesotaParks,
  missouri: missouriParks,
  montana: montanaParks,
  nevada: nevadaParks,
  newmexico: newMexicoParks,
  northcarolina: northCarolinaParks,
  northdakota: northDakotaParks,
  ohio: ohioParks,
  oregon: oregonParks,
  southcarolina: southCarolinaParks,
  southdakota: southDakotaParks,
  tennessee: tennesseeParks,
  texas: texasParks,
  utah: utahParks,
  virginia: virginiaParks,
  washington: washingtonParks,
  westvirginia: westVirginiaParks,
  wyoming: wyomingParks,
};

// Map of state names to their display names
const stateDisplayNames: { [key: string]: string } = {
  alaska: 'Alaska',
  arizona: 'Arizona',
  arkansas: 'Arkansas',
  california: 'California',
  colorado: 'Colorado',
  florida: 'Florida',
  hawaii: 'Hawaii',
  idaho: 'Idaho',
  indiana: 'Indiana',
  kentucky: 'Kentucky',
  maine: 'Maine',
  michigan: 'Michigan',
  minnesota: 'Minnesota',
  missouri: 'Missouri',
  montana: 'Montana',
  nevada: 'Nevada',
  newmexico: 'New Mexico',
  northcarolina: 'North Carolina',
  northdakota: 'North Dakota',
  ohio: 'Ohio',
  oregon: 'Oregon',
  southcarolina: 'South Carolina',
  southdakota: 'South Dakota',
  tennessee: 'Tennessee',
  texas: 'Texas',
  utah: 'Utah',
  virginia: 'Virginia',
  washington: 'Washington',
  westvirginia: 'West Virginia',
  wyoming: 'Wyoming',
};

interface StatePageProps {
  params: Promise<{
    state: string;
    id: string;
  }>;
}

export default async function StatePage({ params }: StatePageProps) {
  const { state } = await params;
  const parks = stateParksMap[state.toLowerCase()];
  const displayName = stateDisplayNames[state.toLowerCase()];

  // if (!parks || !displayName) {
  //   notFound();
  // }
  if (!parks || !displayName) {
    // Handle the case where the park or display name is not found
    return <div>Park Not Found</div>;
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-8 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">{displayName} National Parks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parks.map((park) => (
            <ParkCard key={park.id} park={park} />
          ))}
        </div>
      </div>
    </main>
  );
}

// Generate static paths for all states
export function generateStaticParams() {
  return Object.keys(stateParksMap).map((state) => ({
    state,
  }));
}

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { state } = await params;
  const displayName = stateDisplayNames[state.toLowerCase()];
  
  if (!displayName) {
    return {
      title: 'State Not Found',
      description: 'The requested state could not be found.',
    };
  }

  return {
    title: `${displayName} National Parks | US National Parks Guide`,
    description: `Explore the national parks in ${displayName}. Discover stunning landscapes, unique wildlife, and unforgettable adventures.`,
  };
} 