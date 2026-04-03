import { NextResponse } from 'next/server'

const PASSWORD = process.env.SITE_PASSWORD || 'BuildMeasureLearn'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password === PASSWORD) {
    const res = NextResponse.json({ success: true })
    res.cookies.set('auth', 'true', {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })
    return res
  }

  return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
}
