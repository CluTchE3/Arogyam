import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() =>console.log("DAtabase Connected"))

    await mongoose.connect(`${process.env.MONGODB_URI}/arogyam`)
}

export default connectDB;