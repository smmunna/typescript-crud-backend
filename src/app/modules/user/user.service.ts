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

// Get single user
const getSingleUserFromDB =async (userId:User) => {
    const result = await userModel.findOne({userId}).select({password:0,userId:0})
    return result;
}

// Delete single user
const deleteSingleUserFromDB = async(userId:User) =>{
    const result = await userModel.deleteOne({userId})
    return result;
}

export const userService = {
    createUserToDB,
    getAllUserFromDB,
    getSingleUserFromDB,
    deleteSingleUserFromDB,
}