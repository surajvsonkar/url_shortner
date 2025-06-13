import mongoose from "mongoose";

const connectDB = async ()=> {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected`)
    } catch(err) {
        console.log(err)
    }
}

export default connectDB;