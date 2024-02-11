import dynamic from 'next/dynamic';
const DetailSkeleton = dynamic(
  () => import('@/app/components/skeleton/detailSkeleton')
);
const PlanetDetails = dynamic(() => import('@/app/ui/planetDetail'), {
  ssr: false,
  loading: () => <DetailSkeleton />,
});

import { fetchPlanet } from '@/app/lib/api';
import { Planet, SWAPIResource } from '@/app/lib/definitions';
import TrackView from '@/app/components/trackView';

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const results: Planet | undefined = id ? await fetchPlanet(id) : undefined;

  return (
    <section>
      <TrackView
        id={params.id}
        name={results?.name || ''}
        resource={SWAPIResource.planets}
        views={1}
      />
      <PlanetDetails results={results} />
    </section>
  );
}
