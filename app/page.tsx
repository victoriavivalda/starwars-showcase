'use client';

import dynamic from 'next/dynamic';
const TableSkeleton = dynamic(
  () => import('@/app/components/skeleton/tableSkeleton')
);
const TableMostViewed = dynamic(() => import('./ui/tableMostViewed'), {
  ssr: false,
  loading: () => <TableSkeleton />,
});
import Header from './components/header';
import {
  TableHeaders,
  SWLocalResource,
  MostVisitedItems,
} from './lib/definitions';
import { getVisitedResources } from './lib/localStorage';

const headers: Array<TableHeaders> = [{ key: 1, label: 'Name', field: 'name' }];

export default function Home() {
  const data: Array<MostVisitedItems> = getVisitedResources();
  const sortDescByViews = data.sort((a, b) => b.views - a.views);

  return (
    <main className='flex flex-wrap items-center justify-between'>
      <Header />
      <div className='px-3'>
        <TableMostViewed
          resource={SWLocalResource.mostVisited}
          headers={headers}
          data={sortDescByViews}></TableMostViewed>
      </div>
    </main>
  );
}
