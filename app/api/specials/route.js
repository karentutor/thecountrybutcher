import { NextResponse } from 'next/server'

import connectMongoDB from '@/libs/db'
import Product from '@/models/product'

export const GET = async () => {
  try {
    await connectMongoDB()

    const products = await Product.find({ special: true })

    return NextResponse.json(products)
  } catch (error) {
    console.log('[SPECIALS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
