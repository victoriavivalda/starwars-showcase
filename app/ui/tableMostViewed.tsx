import { TableStructureMostViewed } from '@/app/lib/definitions';
import Link from 'next/link';

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
                    .filter(([key]) =>
                      headers.map((i) => i.field).includes(key)
                    )
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
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
