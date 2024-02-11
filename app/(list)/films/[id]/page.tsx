import dynamic from 'next/dynamic';
const DetailSkeleton = dynamic(
  () => import('@/app/components/skeleton/detailSkeleton')
);
const FilmDetails = dynamic(() => import('@/app/ui/filmDetail'), {
  ssr: false,
  loading: () => <DetailSkeleton />,
});

import { fetchFilm } from '@/app/lib/api';
import { Film, SWAPIResource } from '@/app/lib/definitions';
import TrackView from '@/app/components/trackView';

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const results: Film | undefined = id ? await fetchFilm(id) : undefined;

  return (
    <section>
      <TrackView
        id={params.id}
        name={results?.title || ''}
        resource={SWAPIResource.films}
        views={1}
      />
      <FilmDetails results={results} />
    </section>
  );
}
