import http from "http";
import app from "./app.js";
import "dotenv/config";
import {Server} from "socket.io"
import jwt from "jsonwebtoken"


const PORT =  process.env.PORT || 4000



const server = http.createServer(app);

const io = new Server(server);

io.use((socket,next)=>{
    try{
        const token = socket.handshake.auth?.token || socket.handshake.headers.authorization?.split(" ")[1]

        if(!token){
            return next(new Error("authorication error"))

        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded)

        if(!decoded){
            return next(new Error("authorication error"))
        }
        socket.user = decoded;

        next();

    }
    catch(error){
        next(error)
    }
})






io.on("connection", socket=>{
    console.log("a user connected")
    socket.on('event',data=>{/*..*/})
    socket.on('disconnect',()=>{/*..*/})
})


server.listen(PORT,()=>{
    console.log(`server started at port number: ${PORT}`)
})
 