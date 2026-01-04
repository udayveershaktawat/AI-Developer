import http from "http";
import app from "./app.js";
import "dotenv/config";


const PORT =  process.env.PORT || 4000



const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`server started at port number: ${PORT}`)
})
 