import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='h-full w-full'>
      <div>
        <div>返回</div>
      </div>
      <div>{children}</div>
    </div>
  );
}
