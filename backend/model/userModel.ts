import mongoose from "mongoose"

interface UserDoc extends mongoose.Document {
  name: string
  password: string
  email: string
  phone: number  
  role: "ADMIN" | "USER"
  isActive: boolean
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
    },
    email: {
      type: String,
      required: [true, 'Please add an email']
    },
    phone: {
      type: Number,
      required: [true, 'Please add phone']
    },
    role: {
      type: String,
      default: 'USER'
    },
    isActive: {
      type: Boolean,
      default: true
    }
  }
)

const User = mongoose.model<UserDoc>('User', userSchema)

export { User }