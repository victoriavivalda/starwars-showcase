import Header from '../components/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-wrap items-center justify-between'>
      <Header />
      <div className='px-3'>{children}</div>
    </main>
  );
}
