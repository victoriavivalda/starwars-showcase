import dynamic from 'next/dynamic';
const DetailSkeleton = dynamic(
  () => import('@/app/components/skeleton/detailSkeleton')
);
const StarshipDetails = dynamic(() => import('@/app/ui/starshipDetail'), {
  ssr: false,
  loading: () => <DetailSkeleton />,
});

import { fetchStarship } from '@/app/lib/api';
import { SWAPIResource, Starship } from '@/app/lib/definitions';
import TrackView from '@/app/components/trackView';

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const results: Starship | undefined = id
    ? await fetchStarship(id)
    : undefined;

  return (
    <section>
      <TrackView
        id={params.id}
        name={results?.name || ''}
        resource={SWAPIResource.starships}
        views={1}
      />
      <StarshipDetails results={results} />
    </section>
  );
}
