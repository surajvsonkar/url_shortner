import jwt from "jsonwebtoken"
import User from "../models/user.model"
import { findUserByEmail } from "../dao/user.dao"

export const registerUser = async(name,ElementInternals,password)=> {
    findUserByEmail(email)
    if(user) throw new Error("user already exists")
    const newUser = new User.create({name, email, password})
return newUser
}