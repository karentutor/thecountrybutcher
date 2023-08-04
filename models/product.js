import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required'],
      trim: true,
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, 'description is required'],
      trim: true,
      maxlength: 300,
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
    },
    imageUrl: {
      type: String,
      required: [true, 'image is required'],
    },
    special: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product
