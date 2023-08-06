import { NextResponse } from 'next/server'

import connectMongoDB from '@/libs/db'
import Message from '@/models/message'

export const POST = async (req) => {
  try {
    const body = await req.json()

    const { firstName, lastName, email, phone, message } = body

    await connectMongoDB()

    await Message.create({ firstName, lastName, email, phone, message })

    return NextResponse.json(
      { message: 'Message created successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.log('[MESSAGES_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export const GET = async () => {
  try {
    await connectMongoDB()

    const messages = await Message.find()

    return NextResponse.json(messages)
  } catch (error) {
    console.log('[MESSAGES_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
