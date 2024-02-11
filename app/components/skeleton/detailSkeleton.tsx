export default function DetailsSkeleton() {
  return (
    <div className='flex-row space-y-5 py-4 w-screen animate-pulse'>
      <div className='h-5 w-1/4 rounded-md bg-gray-400' />
      <div className='py-3 h-24 w-1/3 rounded-md bg-gray-200' />

      <div className='space-y-5 h-5 w-1/3 rounded-md bg-gray-400' />
      <div className='py-3 h-24 w-2/3 rounded-md bg-gray-200' />

      <div className='space-y-5 h-5 w-1/3 rounded-md bg-gray-400' />
      <div className='py-3 h-24 w-2/3 rounded-md bg-gray-200' />
    </div>
  );
}
