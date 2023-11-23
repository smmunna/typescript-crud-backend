import express from "express";
import { userController } from "./user.controller";

const router = express.Router()

router.post('/', userController.createUser)
router.get('/all', userController.getAllUser)

export const userRoutes = router;