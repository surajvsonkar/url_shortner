import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
import { createUser, findUserByEmail } from "../dao/user.dao.js"
import { signToken } from "../utils/helper.js"

export const registerUser = async(name,email,password)=> {
    const user = await findUserByEmail(email)
    if (user) throw new Error("user already exists")
    const newUser = await createUser(name, email, password)
    const token = signToken({id: newUser._id})
    return token
}