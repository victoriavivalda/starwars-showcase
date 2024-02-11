'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavResource {
  key: number;
  label: string;
  href: string;
}

const resources: Array<NavResource> = [
  { key: 1, label: 'People', href: '/people' },
  { key: 2, label: 'Films', href: '/films' },
  { key: 3, label: 'Planets', href: '/planets' },
  { key: 4, label: 'Species', href: '/species' },
  { key: 5, label: 'Starships', href: '/starships' },
  { key: 6, label: 'Vehicles', href: '/vehicles' },
];

export default function Nav({}) {
  const pathname = usePathname();
  const activeLinkClass = 'underline underline-offset-8 decoration-yellow-600';

  return (
    <nav className='flex-wrap text-xs sm:text-base flex items-center space-x-1 sm:space-x-3'>
      {resources.map(({ key, label, href }) => (
        <Link
          key={key}
          className={`font-bold link ${
            pathname === href ? activeLinkClass : ''
          }`}
          href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
