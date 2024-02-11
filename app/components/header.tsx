import Link from 'next/link';
import Logo from './logo';
import Nav from './nav';

export default function Header() {
  return (
    <header className='w-screen pb-3 justify-between inline-flex'>
      <Link href='/'>
        <div className='inline-flex items-center'>
          <Logo />
          <h1 className='font-bold uppercase text-xs sm:text-base pr-1'>
            Star Wars Showcase
          </h1>
        </div>
      </Link>
      <Nav />
    </header>
  );
}
