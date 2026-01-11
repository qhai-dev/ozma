'use client';

import { Button } from '@/components/ui/button/index';
import { Input } from '@/components/ui/input';

const test = [
  {
    name: '财务',
    id: 1,
  },
  {
    name: '法务',
    id: 2,
  },
  {
    name: '人事',
    id: 3,
  },
  {
    name: 'IT',
    id: 4,
  },
  {
    name: '行政',
    id: 5,
  },
];
export function Sidebar() {
  return (
    <div className='flex h-full flex-col border-r border-solid border-[red] py-5'>
      <div className='px-5'>
        <Input placeholder='搜索角色'></Input>
      </div>
      <div className='min-h-0 flex-1 overflow-y-auto py-5'>
        <div className='grid w-72 px-5 pb-5'>
          {test.map((item) => (
            <div key={item.id} className='bg-background-burn flex h-10 w-full items-center px-2'>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className='px-5'>
        <Button variant='outline' className='w-full'>
          新增角色
        </Button>
      </div>
    </div>
  );
}
