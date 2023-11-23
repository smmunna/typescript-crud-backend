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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = __importDefault(require("./user.model"));
// Create new user
const createUserToDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.create(user);
    return result;
});
// Get all users
const getAllUserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.find().select('-password');
    return result;
});
// Get single user
const getSingleUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findOne({ userId }).select({ password: 0, userId: 0 });
    return result;
});
// Update single user
const updateSingleUserFromDB = (updateuserName, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = { userId };
    const options = { upsert: true };
    const updateDoc = {
        $set: {
            username: updateuserName
        },
    };
    const result = yield user_model_1.default.updateOne(filter, updateDoc, options);
    return result;
});
// Delete single user
const deleteSingleUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.deleteOne({ userId });
    return result;
});
// Get total Price of orders
const totalPriceOrder = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.aggregate([
        {
            $unwind: '$orders'
        },
        {
            $match: { _id: new mongoose_1.default.Types.ObjectId(userId) }
        },
        {
            $group: {
                _id: "$username",
                totalPrice: { $sum: "$orders.price" }
            }
        }
    ]);
    // console.log(result)
    return result;
});
exports.userService = {
    createUserToDB,
    getAllUserFromDB,
    getSingleUserFromDB,
    updateSingleUserFromDB,
    deleteSingleUserFromDB,
    totalPriceOrder,
};
