import { NextResponse } from 'next/server'

import Product from '@/models/product'
import connectMongoDB from '@/libs/db'

export const PATCH = async (req, { params }) => {
  try {
    const body = await req.json()

    const { productId } = params
    const { title, description, price, imageUrl, special } = body

    if (!productId) {
      return new NextResponse('Product id is required', { status: 400 })
    }

    await Product.findByIdAndUpdate(productId, {
      title,
      description,
      price,
      imageUrl,
      special,
    })

    return NextResponse.json(
      { message: 'product updated successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.log('[PRODUCT_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export const DELETE = async (req, { params }) => {
  try {
    const { productId } = params

    await connectMongoDB()

    if (!productId) {
      return new NextResponse('Product id is required', { status: 400 })
    }

    await Product.findByIdAndDelete(productId)

    return NextResponse.json(
      { message: 'product deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.log('[PRODUCT_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export const GET = async (req, { params }) => {
  try {
    const { productId } = params

    await connectMongoDB()

    const product = await Product.findById(productId)

    return NextResponse.json({ product }, { status: 200 })
  } catch (error) {
    console.log('[PRODUCT_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
