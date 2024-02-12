import { TableHeaders } from '@/app/lib/definitions';

export default function TableHeaderRow({
  headers,
}: {
  headers: TableHeaders[];
}) {
  return (
    <tr className='px-4 py-3 text-gray-200 bg-gray-900 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg'>
      {headers.map(({ label, field }) => (
        <th key={field}>{label}</th>
      ))}
    </tr>
  );
}
