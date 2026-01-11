'use client';

import { useEffect } from 'react';

export default function Profile() {
  useEffect(() => {
    console.log('执行了 profile component');
  }, []);

  return <div>profile component</div>;
}
