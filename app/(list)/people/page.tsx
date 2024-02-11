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
import { fetchPeople } from '@/app/lib/api';
import { Person, SWAPIResource } from '@/app/lib/definitions';
import { peopleHeaders } from '@/app/lib/tableHeaders';

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
  const { results }: { results: Array<Person> } = await fetchPeople(
    queryParams
  );

  return (
    <LookupTable
      title='People'
      resource={SWAPIResource.people}
      headers={peopleHeaders}
      results={results}></LookupTable>
  );
}
