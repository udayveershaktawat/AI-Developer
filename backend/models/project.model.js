import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:[true,"project name must be unique"],
        lowercase:true,
    },
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }]
});

const Project = mongoose.model("Project",projectSchema)

export default Project;