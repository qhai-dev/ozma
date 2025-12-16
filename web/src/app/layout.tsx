import { PropsWithChildren } from 'react';

import './globals.css';

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return children;
}
