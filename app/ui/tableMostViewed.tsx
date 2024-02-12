import {
  MostVisitedItems,
  TableHeaders,
  TableStructureMostViewed,
} from '@/app/lib/definitions';
import Link from 'next/link';
import TableRowNoData from '../components/table/tableRowNoData';
import TableHeaderRow from '../components/table/tableHeaderRow';

export default function TableMostViewed({
  headers,
  data,
}: TableStructureMostViewed) {
  const title = 'Most Visited Views';
  return (
    <section>
      <h2 className='font-bold camelcase text-xs sm:text-lg'>{title}</h2>
      <div className='flex'>
        <table className='table-fixed w-full text-sm border-separate border-spacing-y-2'>
          <thead className=''>
            <TableHeaderRow headers={headers} />
          </thead>
          <tbody>
            {data && data.length ? (
              data.map((item, i) => (
                <TableBodyRow
                  key={i}
                  item={item}
                  headers={headers}
                />
              ))
            ) : (
              <TableRowNoData />
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TableBodyRow({
  item,
  headers,
}: {
  item: MostVisitedItems;
  headers: TableHeaders[];
}) {
  return (
    <tr>
      {Object.entries(item)
        .filter(([key]) => headers.map((i) => i.field).includes(key))
        .map(([key, value]) => {
          return (
            <td
              key={key}
              className='px-4 py-3 text-gray-900 bg-gray-200 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>
              {key === 'name' ? (
                <Link
                  className='cursor-pointer'
                  href={`/${item.resource}/${item.id}/`}>
                  {value}
                </Link>
              ) : (
                value
              )}
            </td>
          );
        })}
    </tr>
  );
}
