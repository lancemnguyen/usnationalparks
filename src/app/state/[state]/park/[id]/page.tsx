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
import ParkPageContent from '@/components/park/ParkPageContent';

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

interface ParkPageProps {
  params: {
    state: string;
    id: string;
  };
}

export async function generateMetadata({ params }: ParkPageProps): Promise<Metadata> {
  const { state, id } = await params;
  const parks = stateParksMap[state.toLowerCase()];
  const park = parks?.find(p => p.id === id);
  const displayName = stateDisplayNames[state.toLowerCase()];
  
  if (!park || !displayName) {
    return {
      title: 'Park Not Found',
      description: 'The requested park could not be found.',
    };
  }

  return {
    title: `${park.name} | ${displayName} National Parks`,
    description: park.description,
  };
}

export default async function ParkPage({ params }: ParkPageProps) {
  const { state, id } = await params;
  const parks = stateParksMap[state.toLowerCase()];
  const park = parks?.find(p => p.id === id);
  const displayName = stateDisplayNames[state.toLowerCase()];

  // if (!park || !displayName) {
  //   notFound();
  // }
  if (!park || !displayName) {
    // Handle the case where the park or display name is not found
    return <div>Park Not Found</div>; // You can customize this as needed
  }

  return <ParkPageContent park={park} state={state} displayName={displayName} />;
}

export async function generateStaticParams() {
  const params = [];
  for (const [state, parks] of Object.entries(stateParksMap)) {
    for (const park of parks) {
      params.push({
        state,
        id: park.id,
      });
    }
  }
  return params;
} 