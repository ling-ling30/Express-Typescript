import { isAdmin } from "../../middleware/authorization";

import {
  Login,
  registerAdmin,
  registerUser,
} from "../controller/userController";

const userRouter = require("express").Router();

userRouter.post("/register", registerUser);
userRouter.post("/registerAdmin", isAdmin, registerAdmin);
userRouter.post("/login", Login);

module.exports = userRouter;
