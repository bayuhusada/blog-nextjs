import mongoose from "mongoose";


 export const connectDB = async () => {
   await mongoose.connect('mongodb+srv://baybayxxz08:7svgn2WMuOiEZXFo@cluster0.4dxfj.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0')

   console.log('Database Connected')
}