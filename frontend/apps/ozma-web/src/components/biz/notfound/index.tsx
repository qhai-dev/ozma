'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Space } from '@/components/ui/space';
import { Text, Title } from '@/components/ui/typography';

export default function NotFound() {
  const router = useRouter();

  function handlerNavigateBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.replace('/dashboard');
    }
  }

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <Title>404</Title>
      <Text>抱歉，我们找不到您要访问的页面。页面可能已被移动或不存在。</Text>
      <Space>
        <Button onClick={() => router.replace('/dashboard')}>返回首页</Button>
        <Button onClick={() => handlerNavigateBack()}>返回上一页</Button>
      </Space>
      <Space vertical>
        <Text>或尝试搜索或检查 URL 是否拼写正确。</Text>
        <Text>需要帮忙请联系qhai.dev@126.com</Text>
      </Space>
    </div>
  );
}
