import dynamic from 'next/dynamic';
const DetailSkeleton = dynamic(
  () => import('@/app/components/skeleton/detailSkeleton')
);
const VehicleDetails = dynamic(() => import('@/app/ui/vehicleDetail'), {
  ssr: false,
  loading: () => <DetailSkeleton />,
});

import { fetchVehicle } from '@/app/lib/api';
import { Vehicle, SWAPIResource } from '@/app/lib/definitions';
import TrackView from '@/app/components/trackView';

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const results: Vehicle | undefined = id ? await fetchVehicle(id) : undefined;

  return (
    <section>
      <TrackView
        id={params.id}
        name={results?.name || ''}
        resource={SWAPIResource.vehicles}
        views={1}
      />
      <VehicleDetails results={results} />
    </section>
  );
}
