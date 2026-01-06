import jwt from "jsonwebtoken";


export const authUser = async(req,res,next)=>{
    try{

        const token = req.cookie.token || req.headers.authorization.split(" ")[1];

    }
    catch(error){

    }
}