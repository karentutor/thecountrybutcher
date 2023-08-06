import { NextResponse } from 'next/server'

import connectMongoDB from '@/libs/db'
import Message from '@/models/message'

export const DELETE = async (req, { params }) => {
  try {
    const { messageId } = params

    await connectMongoDB()

    if (!messageId) {
      return new NextResponse('Message id is required', { status: 400 })
    }

    await Message.findByIdAndDelete(messageId)

    return NextResponse.json(
      { message: 'message deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.log('[MESSAGE_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
