import {Router} from "express";
import {body} from "express-validator"
import * as projectController from "../controllers/project.controller.js"

const router = Router();



router.post("/create",
    body("name").isString().withMessage("name is required"),
    projectController.createProjectController

)




export default router;
