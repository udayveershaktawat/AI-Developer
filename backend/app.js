import express from "express";
import morgan from "morgan";
import dbconnect from "./db/db.js";
import userRoutes from "./routes/user.routes.js";


const app = express();

app.use(cookieParser())

app.use(morgan("dev"));
app.use(express());
app.use(express.urlencoded({extended:true}));

dbconnect();

app.use("/users",userRoutes);


app.get("/",(req,res)=>{
    res.send(`hello world ji kya haal mitra`)
})


export default app;