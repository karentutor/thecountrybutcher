import mongoose, { Schema } from 'mongoose'

const messageSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'firstName is required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'lastName is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'phone is required'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'message is required'],
      trim: true,
    },
  },
  { timestamps: true }
)

const Message =
  mongoose.models.Message || mongoose.model('Message', messageSchema)

export default Message
