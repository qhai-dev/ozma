import Link from 'next/link';

export default function Page() {
  return (
    <div>
      knowledge page
      <div className='h-[100px] w-[200px] bg-red-500'>
        <Link href='/settings' className='text-white'>
          open settings
        </Link>
      </div>
    </div>
  );
}
