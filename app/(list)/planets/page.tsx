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

import { fetchPlanets } from '@/app/lib/api';
import { Planet, SWAPIResource } from '@/app/lib/definitions';
import { planetsHeaders } from '@/app/lib/tableHeaders';

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
  const { results }: { results: Array<Planet> } = await fetchPlanets(
    queryParams
  );

  return (
    <LookupTable
      title='Planets'
      resource={SWAPIResource.planets}
      headers={planetsHeaders}
      results={results}></LookupTable>
  );
}
