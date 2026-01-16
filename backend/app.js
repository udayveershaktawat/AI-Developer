import express from "express";
import morgan from "morgan";
import dbconnect from "./db/db.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"


const app = express();

app.use(cookieParser())
app.use(cors())

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

dbconnect();

app.use("/users",userRoutes);


app.get("/",(req,res)=>{
    res.send(`hello world ji kya haal mitra`)
})


export default app;