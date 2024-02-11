import dynamic from 'next/dynamic';
const Table = dynamic(() => import('./table'), {
  ssr: false,
});
import QueryTable from './queryTable';
import { LookupTableProps } from '../../lib/definitions';

export default function LookupTable({
  title,
  resource,
  results,
  headers,
}: LookupTableProps) {
  return (
    <div>
      <QueryTable title={title} />
      <Table
        headers={headers}
        data={results}
        resource={resource}
      />
    </div>
  );
}
