import mongoose from "mongoose";
import "dotenv/config";


const dbConnect = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log("db connect successfully")})
    .catch((error)=>{
        console.error(error)
        console.log("error while connnecting db")
        process.exit(1)
    })
}

export default dbConnect;