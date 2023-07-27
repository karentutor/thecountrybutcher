import client from '@/prisma/client'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const products = await client.product.findMany({
      where: {
        special: true,
      },
    })

    return NextResponse.json(products)
  } catch (error) {
    console.log('[SPECIALS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
