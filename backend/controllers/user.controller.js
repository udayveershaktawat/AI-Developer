import userModel from "../models/user.model.js";
import * as userService from "../services/user.service.js";
import { validationResult } from "express-validator";
// import * as authMiddleware from "../middleware/auth.middleware.js"


// resgister
export const createUserController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try {
    const user = await userService.createUser(req.body);
    const token = await user.generateJWT()
    res.status(201).send(user,token)
  } catch (error) {
    res.status(400).send(error.message);
  }
};


// login
export const loginController = async(req,res)=>{
  const errors = validationResult(req);

   if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try{

    const {email,password}= req.body;
    const user = await userModel.findOne({email}).select("+password");

    if(!user){
      return res.status(401).json({
        errors:"invalid credentails"
      })
    }

    const isMatch = await user.isValidPassword(password);

    if(!isMatch){
      return res.status(401).json({
        errors: 'invalis credentials'
    })
    }

    const token = await user.generateJWT();

    res.status(200).json({
      user,token
    })

  }
  catch(error){

     res.status(400).send(error.message);
  }

}


// profile
export const profileController = async(req,res)=>{
  console.log(req.user)
  res.status(200).json({
    user:req.user
  })

}


// logout
export const logoutController = async(req,res)=>{
  try{
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];

    redisClient.set(token,"logout","EX",60*60*24)

  }
  catch(error){
    console.log(error)
    res.status(400).send(error.message)
  }
  
}
