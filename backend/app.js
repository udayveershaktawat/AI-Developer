import express from "express";
import morgan from "morgan";
import dbconnect from "./db/db.js";


const app = express();

app.use(morgan("dev"));
app.use(express());
app.use(express.urlencoded({extended:true}));

dbconnect();


app.get("/",(req,res)=>{
    res.send(`hello world ji kya haal mitra`)
})


export default app;