'use client';

import { useEffect } from 'react';

export default function Preference() {
  useEffect(() => {
    console.log('执行了 Preference component');
  }, []);

  return <div>Preference component</div>;
}
