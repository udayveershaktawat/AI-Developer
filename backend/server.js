import http from "http";
import app from "./app.js";
import "dotenv/config";
import {Server} from "socket.io"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import ProjectModel from "./models/project.model.js";


const PORT =  process.env.PORT || 4000



const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"*"
    }
});

io.use(async(socket,next)=>{
    try{
        const token = socket.handshake.auth?.token || socket.handshake.headers.authorization?.split(" ")[1];
        const projectId = socket.handshake.query.projectId

        if(!mongoose.Types.ObjectId.isValid(projectId)){
            return next(new Error("invalid projectId"))

        }

        socket.project = await ProjectModel.findById(projectId)



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
    socket.roomId = socket.project._id.toString();


    console.log("a user connected")

    socket.join(socket.roomId)

    socket.on('project-message',data=>{

        io.to(socket.roomId).emit("project-message",data)
    })
    socket.on('event',data=>{/*..*/})
    socket.on('disconnect',()=>{/*..*/})
})


server.listen(PORT,()=>{
    console.log(`server started at port number: ${PORT}`)
})
 