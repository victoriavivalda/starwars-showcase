import dynamic from 'next/dynamic';
const DetailSkeleton = dynamic(
  () => import('@/app/components/skeleton/detailSkeleton')
);
const PersonDetails = dynamic(() => import('@/app/ui/personDetail'), {
  ssr: false,
  loading: () => <DetailSkeleton />,
});

import { fetchPerson } from '@/app/lib/api';
import { Person, SWAPIResource } from '@/app/lib/definitions';
import TrackView from '@/app/components/trackView';

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const results: Person | undefined = id ? await fetchPerson(id) : undefined;

  return (
    <section>
      <TrackView
        id={params.id}
        name={results?.name || ''}
        resource={SWAPIResource.people}
        views={1}
      />
      <PersonDetails results={results} />
    </section>
  );
}
