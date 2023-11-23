import { Schema, model } from "mongoose";
import User from "./user.interface";
import bcrypt from "bcrypt"

const userSchema = new Schema<User>({
    userId: { type: Number, required: true, maxlength: 2 },
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullName: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: { type: [String], required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
    },
    orders: [
        {
            productName: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
        },
    ],
})

// Hashing the password before saving user;
userSchema.pre('save', async function (next) {
    const user = this;
    const saltRounds = 10;
    user.password = await bcrypt.hash(user.password, saltRounds)

    next()
})

//Hide the password after saving the user;
userSchema.post('save', async function (doc, next) {
    doc.password = ''
    next()
})

const userModel = model<User>('user', userSchema)

export default userModel;