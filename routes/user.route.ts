import { Router } from "express";
import { createUserController, getAllUsersController } from "../controller/user.controller";
const userRouter = Router();

userRouter.get("/", getAllUsersController);
userRouter.post("/",createUserController);

export default userRouter;