"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
// Creating new user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    try {
        const result = yield user_service_1.userService.createUserToDB(newUser);
        res.status(200).json({
            success: true,
            message: 'User hasbeen created successfully',
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'Something went wrong',
            data: error._message
        });
    }
});
// Get all user form db
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userService.getAllUserFromDB();
        res.status(200).json({
            "success": true,
            "message": "Users fetched successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'Something went wrong',
            data: error
        });
    }
});
// Get single user form db
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        const result = yield user_service_1.userService.getSingleUserFromDB(id);
        res.status(200).json({
            "success": true,
            "message": "Users fetched successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'Something went wrong',
            data: error
        });
    }
});
// Get single user form db
const DeleteSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        const user = yield user_service_1.userService.getSingleUserFromDB(id);
        if (user) {
            const result = yield user_service_1.userService.deleteSingleUserFromDB(id);
            res.status(200).json({
                "success": true,
                "message": "User deleted successfully!",
                data: result
            });
        }
        else {
            res.status(404).json({
                "success": false,
                "message": "user not found",
            });
        }
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'Something went wrong',
            data: error
        });
    }
});
// Update document
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        const user = yield user_service_1.userService.getSingleUserFromDB(id);
        if (user) {
            const updateuserName = req.body.username;
            const result = yield user_service_1.userService.updateSingleUserFromDB(updateuserName, id);
            res.status(200).json({
                "success": true,
                "message": "User updated successfully!",
                data: result
            });
        }
        else {
            res.status(404).json({
                "success": false,
                "message": "user not found",
            });
        }
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'Something went wrong',
            data: error
        });
    }
});
// Get total Orders
const totalOrderPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId;
    try {
        const result = yield user_service_1.userService.totalPriceOrder(id);
        res.status(200).json({
            "success": true,
            "message": "Total price calculated successfully!",
            "data": result
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'Something went wrong',
            data: error
        });
    }
});
exports.userController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    DeleteSingleUser,
    totalOrderPrice,
};
