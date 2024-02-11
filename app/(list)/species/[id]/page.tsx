import dynamic from 'next/dynamic';
const DetailSkeleton = dynamic(
  () => import('@/app/components/skeleton/detailSkeleton')
);
const SpeciesDetails = dynamic(() => import('@/app/ui/speciesDetail'), {
  ssr: false,
  loading: () => <DetailSkeleton />,
});

import { fetchSpecificSpecies } from '@/app/lib/api';
import { SWAPIResource, Species } from '@/app/lib/definitions';
import TrackView from '@/app/components/trackView';

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const results: Species | undefined = id
    ? await fetchSpecificSpecies(id)
    : undefined;

  return (
    <section>
      <TrackView
        id={params.id}
        name={results?.name || ''}
        resource={SWAPIResource.species}
        views={1}
      />
      <SpeciesDetails results={results} />
    </section>
  );
}
