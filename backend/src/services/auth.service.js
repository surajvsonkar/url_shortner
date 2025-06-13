import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import { createUser, findUserByEmail } from "../dao/user.dao.js"
import { signToken } from "../utils/helper.js"

export const registerUser = async(name,email,password)=> {
    const user = await findUserByEmail(email)
    if (user) throw new Error("user already exists")
    const newUser = await createUser(name, email, password)
    const token = signToken({id: newUser._id})
    return token
}

export const loginUser = async(email,password)=> {
    const user =  await findUserByEmail(email)
    const plainPassword = await bcrypt.compare(password, user.password )
    console.log(plainPassword)
    if(!user || plainPassword == false) {
        throw new Error("Invalid credentials")
        return;
    }
    const token = signToken({id: user._id})
    return token
}