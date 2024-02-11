'use client';

import { QueryTableProps } from '../../lib/definitions';
import Paginate from './paginate';
import Search from './search';
import { usePathname, useSearchParams } from 'next/navigation';

export default function QueryTable({ title }: QueryTableProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  return (
    <section>
      <h2 className='font-bold camelcase text-xs sm:text-lg'>{title}</h2>
      <article className='flex flex-row gap-4 justify-around'>
        <Search
          searchParams={searchParams}
          pathname={pathname}
          placeholder={'Search by name'}
        />
        <Paginate
          searchParams={searchParams}
          pathname={pathname}
        />
      </article>
    </section>
  );
}
