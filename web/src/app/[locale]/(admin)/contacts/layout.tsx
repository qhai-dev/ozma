import { PropsWithChildren } from 'react';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className='h-full w-full'>
      <div>导航栏区域</div>
      <div>{children}</div>
    </div>
  );
}
