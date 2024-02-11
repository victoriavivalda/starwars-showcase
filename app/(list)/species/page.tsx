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

import { fetchSpecies } from '@/app/lib/api';
import { SWAPIResource, Species } from '@/app/lib/definitions';
import { speciesHeaders } from '@/app/lib/tableHeaders';

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
  const { results }: { results: Array<Species> } = await fetchSpecies(
    queryParams
  );

  return (
    <LookupTable
      title='Species'
      resource={SWAPIResource.species}
      headers={speciesHeaders}
      results={results}></LookupTable>
  );
}
