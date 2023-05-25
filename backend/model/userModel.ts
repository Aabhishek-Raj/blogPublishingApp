import mongoose from "mongoose"

interface UserDoc extends mongoose.Document {
  name: string
  password: string  
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    }
  }
)

const User = mongoose.model<UserDoc>('User', userSchema)

export { User }