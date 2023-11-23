import { Request, Response } from "express";
import { userService } from "./user.service";

// Creating new user
const createUser = async (req: Request, res: Response) => {
    const newUser = req.body;
    try {
        const result = await userService.createUserToDB(newUser)
        res.status(200).json({
            success: true,
            message: 'User hasbeen created successfully',
            data: result
        })
    } catch (error: any) {
        res.status(404).json({
            success: false,
            message: 'Something went wrong',
            data: error._message
        })
    }
}

// Get all user form db
const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getAllUserFromDB()
        res.status(200).json({
            "success": true,
            "message": "Users fetched successfully!",
            data: result
        })

    } catch (error: any) {
        res.status(404).json({
            success: false,
            message: 'Something went wrong',
            data: error
        })
    }
}

// Get single user form db
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const id: any = req.params.userId;
        const result = await userService.getSingleUserFromDB(id)
        res.status(200).json({
            "success": true,
            "message": "Users fetched successfully!",
            data: result
        })

    } catch (error: any) {
        res.status(404).json({
            success: false,
            message: 'Something went wrong',
            data: error
        })
    }
}





// Get single user form db
const DeleteSingleUser = async (req: Request, res: Response) => {
    try {
        const id: any = req.params.userId;
        const user = await userService.getSingleUserFromDB(id)
        if (user) {
            const result = await userService.deleteSingleUserFromDB(id)
            res.status(200).json({
                "success": true,
                "message": "User deleted successfully!",
                data: result
            })
        } else {
            res.status(404).json({
                "success": false,
                "message": "user not found",
            })
        }

    } catch (error: any) {
        res.status(404).json({
            success: false,
            message: 'Something went wrong',
            data: error
        })
    }
}

export const userController = {
    createUser,
    getAllUser,
    getSingleUser,
    DeleteSingleUser,
}