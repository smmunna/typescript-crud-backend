import User from "./user.interface";
import userModel from "./user.model";

// Create new user
const createUserToDB = async (user: User) => {
    const result = await userModel.create(user)
    return result;
}

// Get all users
const getAllUserFromDB = async () =>{
    const result = await userModel.find().select('-password')
    return result;
}

export const userService = {
    createUserToDB,
    getAllUserFromDB
}