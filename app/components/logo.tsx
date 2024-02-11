import Image from 'next/image';
export default function Logo() {
  return (
    <Image
      priority={true}
      className='w-10 sm:w-20 '
      src='/baby-yoda.png'
      alt='Baby Yoda extending the hand'
      width={100}
      height={100}
    />
  );
}
