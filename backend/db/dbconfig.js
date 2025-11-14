import mongoose from "mongoose"

const dbconfig = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected!");
    } catch (error) {   
        console.log("db error", error);
    }
}
export default dbconfig;