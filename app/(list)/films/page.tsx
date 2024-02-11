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

import { fetchFilms } from '@/app/lib/api';
import { Film, SWAPIResource } from '@/app/lib/definitions';
import { filmHeaders } from '@/app/lib/tableHeaders';

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
  const { results }: { results: Array<Film> } = await fetchFilms(queryParams);

  return (
    <LookupTable
      title='Films'
      resource={SWAPIResource.films}
      headers={filmHeaders}
      results={results}></LookupTable>
  );
}
