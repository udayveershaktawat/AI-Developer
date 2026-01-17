import porjectModel from "../models/project.model.js";
import projectService from "../services/project.service.js"
import {validationResult} from "express-validator"

export const createProjectController = async(req,res)=>{


    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {name}= req.body;
    const userId = req.user._id;



    
}