import { Router } from "express";
import * as UserController from "../controllers/user.controller.js";
import { body } from "express-validator";

const router = Router();

router.post(
  "/register",
  body("email").isEmail().withMessage("email must be a email address"),
  body("password")
    .isLength({ min: 3 })
    .withMessage("password must be at least 3"),
  UserController.createUserController
);
router.post(
  "/login",
  body("email").isEmail().withMessage("email must be a email address"),
  body("password")
    .isLength({ min: 3 })
    .withMessage("password must be at least 3"),
  UserController.loginController
);

export default router;
