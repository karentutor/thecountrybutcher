import mongoose from 'mongoose'

const connectMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI)
    console.log('connected to mongo db')
  } catch (err) {
    console.error(err)
  }
}

export default connectMongoDB
