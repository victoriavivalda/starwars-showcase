import {
  Film,
  Person,
  Planet,
  SWAPIResource,
  SWLocalResource,
  Species,
  Starship,
  TableHeaders,
  TableStructureResource,
  Vehicle,
} from '@/app/lib/definitions';
import Link from 'next/link';
import { getResourceId } from '../../lib/utils';
import TableRowNoData from './tableRowNoData';
import TableHeaderRow from './tableHeaderRow';

export default function Table({
  resource,
  headers,
  data,
}: TableStructureResource) {
  return (
    <div className='flex items-center justify-center'>
      <table className='table-auto md:table-fixed overflow-auto md:overflow-visible w-screen md:w-full text-xs md:text-sm break-word text-balance border-separate border-spacing-y-2'>
        <thead>
          <TableHeaderRow headers={headers} />
        </thead>
        <tbody>
          {data && data.length ? (
            data?.map((item, i) => {
              return (
                <TableBodyRow
                  key={i}
                  item={item}
                  headers={headers}
                  resource={resource}
                />
              );
            })
          ) : (
            <TableRowNoData />
          )}
        </tbody>
      </table>
    </div>
  );
}

function TableBodyRow({
  item,
  headers,
  resource,
}: {
  item: Person | Film | Planet | Species | Vehicle | Starship;
  headers: TableHeaders[];
  resource: SWAPIResource | SWLocalResource;
}) {
  return (
    <tr>
      {Object.entries(item)
        .filter(([key]) => headers.map((i) => i.field).includes(key))
        .map(([key, value]) => {
          const { url } = item;
          const id = getResourceId(url);
          return (
            <td
              key={key}
              className='px-4 py-3 text-center text-gray-900 bg-gray-200 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>
              {key === 'name' || key === 'title' ? (
                <Link
                  className='cursor-pointer'
                  href={`/${resource}/${id}/`}>
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
