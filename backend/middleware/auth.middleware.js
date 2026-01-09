import jwt from "jsonwebtoken";
import redisClient from "../services/redis.service";


export const authUser = async(req,res,next)=>{
    try{

        const token = req.cookie.token || req.headers.authorization.split(" ")[1];

        if(!token){
            return res.status(401).send({error:"unauthorized User"})
        }

        const isBlackListed = await redisClient.get(token);
        if(isBlackListed){
            res.cookie("token","");
            return res.status(401).send({error:"unauthorized user"})
        }


        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode;
        next();

    }
    catch(error){
        res.status(401).json({error:"unauthorized User"})

    }
}