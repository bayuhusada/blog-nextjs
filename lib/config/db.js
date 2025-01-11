import mongoose from "mongoose";


 export const connectDB = async () => {
   await mongoose.connect('mongodb+srv://baybayxxz08:7svgn2WMuOiEZXFo@cluster0.4dxfj.mongodb.net/Blog')

   console.log('Database Connected')
}