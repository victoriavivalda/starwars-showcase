import { TableStructureResource } from '@/app/lib/definitions';
import Link from 'next/link';
import { getResourceId } from '../../lib/utils';

export default function Table({
  resource,
  headers,
  data,
}: TableStructureResource) {
  return (
    <div className='flex items-center justify-center'>
      <table className='table-fixed w-full text-sm border-separate border-spacing-y-2'>
        <thead className=''>
          <tr className='px-4 py-3 text-gray-200 bg-gray-900 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>
            {headers.map(({ label, field }) => (
              <th key={field}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => {
            return (
              <tr key={i}>
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
          })}
        </tbody>
      </table>
    </div>
  );
}
