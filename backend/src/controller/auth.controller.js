import { cookieOptions } from "../config/config.js"
import { registerUser, loginUser } from "../services/auth.service.js"
import bcrypt from "bcrypt"

export const register = async(req,res)=> {
    const {name, email, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const token = await registerUser(name, email, hashedPassword)
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({
        msg: "registration successful"
    })
}

export const login = async(req,res) => {
    const {email, password} = req.body
    const token = await loginUser(email, password)
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({
        msg: "login successful",
        token: token
    })
}