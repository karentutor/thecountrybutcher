import connectMongoDB from '@/libs/db'
import Product from '@/models/product'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  try {
    const body = await req.json()

    const { title, description, imageUrl, price, special } = body

    await connectMongoDB()

    await Product.create({ title, description, price, imageUrl, special })

    return NextResponse.json(
      { message: 'product created successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.log('[PRODUCTS_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export const GET = async () => {
  try {
    await connectMongoDB()

    const products = await Product.find()

    return NextResponse.json(products)
  } catch (error) {
    console.log('[PRODUCTS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
