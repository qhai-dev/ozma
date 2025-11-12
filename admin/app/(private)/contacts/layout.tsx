import { PropsWithChildren } from 'react';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return <div className='w-full h-full'>{children}</div>;
}
