import dynamic from 'next/dynamic';
const TableSkeleton = dynamic(
  () => import('@/app/components/skeleton/tableSkeleton')
);
const LookupTable = dynamic(
  () => import('@/app/components/table/lookupTable'),
  {
    ssr: false,
    loading: () => <TableSkeleton />,
  }
);

import { fetchVehicles } from '@/app/lib/api';
import { Vehicle, SWAPIResource } from '@/app/lib/definitions';
import { vehicleHeaders } from '@/app/lib/tableHeaders';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    page?: string;
  };
}) {
  const queryParams = {
    search: searchParams?.search,
    page: searchParams?.page ? Number(searchParams?.page) : undefined,
  };
  const { results }: { results: Array<Vehicle> } = await fetchVehicles(
    queryParams
  );

  return (
    <LookupTable
      title='Vehicles'
      resource={SWAPIResource.vehicles}
      headers={vehicleHeaders}
      results={results}></LookupTable>
  );
}
