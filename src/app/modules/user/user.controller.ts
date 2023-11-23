import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    const newUser = req.body;
    try {
        const result = userService.createUserToDB(newUser)
        res.status(200).json({
            success: true,
            message: 'User hasbeen created successfully',
            data: result
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Something went wrong',
            data: error
        })
    }
}

export const userController = {
    createUser,
}