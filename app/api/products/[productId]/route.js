import { NextResponse } from 'next/server'

import client from '@/prisma/client'

export async function PATCH(req, { params }) {
  try {
    const body = await req.json()

    const { title, description, price, imageUrl, special } = body

    if (!title || !description || !price || !imageUrl) {
      return new NextResponse('Something is missing', { status: 400 })
    }

    if (!params.productId) {
      return new NextResponse('Product id is required', { status: 400 })
    }

    const product = await client.product.updateMany({
      where: {
        id: params.productId,
      },
      data: {
        title,
        description,
        imageUrl,
        price,
        special,
      },
    })

    return NextResponse.json(product)
  } catch (error) {
    console.log('[PRODUCT_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  try {
    if (!params.productId) {
      return new NextResponse('Product id is required', { status: 400 })
    }

    const product = await client.product.deleteMany({
      where: {
        id: params.productId,
      },
    })

    return NextResponse.json(product)
  } catch (error) {
    console.log('[PRODUCT_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
