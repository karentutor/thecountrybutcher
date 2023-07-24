import client from '@/prisma/client'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()

    const { title, description, imageUrl, price, special } = body

    if (!title && !description && !imageUrl && !price) {
      return new NextResponse('Something is Missing', { status: 400 })
    }
    if (title.length > 50) {
      return new NextResponse('Title have to be less than 50 char', {
        status: 400,
      })
    }
    if (description.length > 300) {
      return new NextResponse('Description have to be less than 300 char', {
        status: 400,
      })
    }

    const product = await client.product.create({
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
    console.log('[PRODUCTS_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function GET() {
  try {
    const products = await client.product.findMany()

    return NextResponse.json(products)
  } catch (error) {
    console.log('[PRODUCTS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
