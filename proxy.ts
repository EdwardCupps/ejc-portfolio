import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const auth = request.cookies.get('auth')

  if (auth?.value === 'true') {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: ['/((?!login|api|_next/static|_next/image|favicon.ico|robots.txt).*)'],
}
