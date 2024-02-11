export default function TableSkeleton() {
  return (
    <div className='flex-row space-y-5 py-4 w-screen animate-pulse'>
      <div className='h-5 w-10/12 rounded-md bg-gray-400' />
      <div className='space-y-5 h-10 w-10/12 rounded-md bg-gray-200' />
      <div className='py-3 h-10 w-10/12 rounded-md bg-gray-200' />
      <div className='py-3 h-10 w-10/12 rounded-md bg-gray-200' />
      <div className='py-3 h-10 w-10/12 rounded-md bg-gray-200' />
      <div className='py-3 h-10 w-10/12 rounded-md bg-gray-200' />
      <div className='py-3 h-10 w-10/12 rounded-md bg-gray-200' />
      <div className='py-3 h-10 w-10/12 rounded-md bg-gray-200' />
      <div className='py-3 h-10 w-10/12 rounded-md bg-gray-200' />
    </div>
  );
}
