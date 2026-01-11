'use client';

import { useState } from 'react';

import { useReactTable } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type User = {
  name: {
    first: string;
    last: string;
  };
  info: {
    age: number;
    visits: number;
  };
};

const test = [
  {
    name: {
      first: 'Tanner',
      last: 'Linsley',
    },
    info: {
      age: 33,
      visits: 100,
    },
  },
  {
    name: {
      first: 'Kevin',
      last: 'Vandy',
    },
    info: {
      age: 27,
      visits: 200,
    },
  },
];

const columns = [
  {
    header: 'First Name',
    accessorKey: 'name.first',
  },
  {
    header: 'Last Name',
    accessorKey: 'name.last',
  },
  {
    header: 'Age',
    accessorFn: (row: User) => row.info.age,
  },
  //...
];

export function SidebarInset() {
  // const [data, setData] = useState(test);

  // const table = useReactTable<User>({
  //   columns,
  //   data: test,
  // });

  return (
    <div className='flex h-full min-w-0 flex-1 flex-col gap-y-5 p-5'>
      <div className='flex w-full gap-x-5'>
        <div>行政</div>
        <div className='min-w-0 flex-1'>arzyjp4ozk14jvd</div>
        <div>0人</div>
      </div>
      <div className='flex w-full'>
        <div>
          <Input placeholder='搜索成员姓名'></Input>
        </div>
        <div className='flex min-w-0 flex-1 items-center justify-end gap-x-2.5'>
          <Button>添加成员</Button>
          <Button>批量导入/导出</Button>
          <Button>移除成员</Button>
        </div>
      </div>

      {/*  */}

      {/* <table></table> */}
    </div>
  );
}
