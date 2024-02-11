import Link from 'next/link';
import { ReadonlyURLSearchParams } from 'next/navigation';

export default function Paginate({
  searchParams,
  pathname,
}: {
  searchParams: ReadonlyURLSearchParams;
  pathname: string;
}) {
  const currentPage = Number(searchParams.get('page') || 1);

  const composeUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    const moveToPage = page < 1 ? 1 : page;
    params.set('page', moveToPage.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className='justify-evenly space-x-2 tems-center pt-2'>
      <Link
        className='p-2 border-2 border-yellow-500 rounded-md shadow-inner'
        href={composeUrl(currentPage - 1)}>
        PREV
      </Link>
      <Link
        tabIndex={-1}
        className='cursor-default p-2 border-2 border-yellow-500 rounded-md shadow-inner'
        href={composeUrl(currentPage)}>
        {currentPage}
      </Link>
      <Link
        className='p-2 border-2 border-yellow-500 rounded-md shadow-inner'
        href={composeUrl(currentPage + 1)}>
        NEXT
      </Link>
    </div>
  );
}
