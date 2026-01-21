import {Router} from "express";
import {body} from "express-validator"
import * as projectController from "../controllers/project.controller.js";
import * as authMiddleWare from '../middleware/auth.middleware.js'

const router = Router();



router.post("/create",
    authMiddleWare.authUser,
    body("name").isString().withMessage("name is required"),
    projectController.createProjectController

)

router.get("/all",
    authMiddleWare.authUser,
    projectController.getAllProject
)
router.put("/add-user",
    authMiddleWare.authUser,
    body("user").isArray({min:1}).isMessage("user must be an array of string").bail()
    .custom((user)=>user.every(user=>typeof user === 'string')).withMessage("each user must be a string"),
    projectController.addUserToProject
)




export default router;
