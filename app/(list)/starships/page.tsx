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

import { fetchStarships } from '@/app/lib/api';
import { SWAPIResource, Starship } from '@/app/lib/definitions';
import { starshipHeaders } from '@/app/lib/tableHeaders';

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
  const { results }: { results: Array<Starship> } = await fetchStarships(
    queryParams
  );

  return (
    <LookupTable
      title='Starships'
      resource={SWAPIResource.starships}
      headers={starshipHeaders}
      results={results}></LookupTable>
  );
}
