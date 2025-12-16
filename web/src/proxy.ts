import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { getLocale } from 'next-intl/server';

import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  const locale = await getLocale();
  const cookie = await cookies();
  const session = cookie.get('session');

  if (!session) {
    // TODO
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
