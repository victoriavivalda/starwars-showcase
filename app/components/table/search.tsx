'use client';

import { ReadonlyURLSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({
  placeholder,
  searchParams,
  pathname,
}: {
  placeholder: string;
  searchParams: ReadonlyURLSearchParams;
  pathname: string;
}) {
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((searchTerm) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', '1');
    if (searchTerm) {
      params.set('search', searchTerm);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className='relative flex flex-1 flex-shrink-0'>
      <label
        htmlFor='search'
        className='sr-only'>
        Search by name
      </label>
      <input
        id='search'
        className='peer block w-full rounded-md border border-gray-200 hover:border-yellow-600 focus:border-yellow-600 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('search')?.toString()}
      />

      <span className='absolute left-3 top-1/2 h-[25px] w-[25px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900'>
        🔎
      </span>
    </div>
  );
}
