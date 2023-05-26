import mongoose from "mongoose"

interface AdminDoc extends mongoose.Document {
  name: string
  password: string  
}

const adminSchema = new mongoose.Schema(
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

const Admin = mongoose.model<AdminDoc>('Admin', adminSchema)

export { Admin }