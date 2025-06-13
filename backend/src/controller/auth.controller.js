import { registerUser } from "../services/auth.service.js"

export const register = async(req,res)=> {
    const {name, email, password} = req.body
    const token = await registerUser(name, email, password)
    res.status(200).json({
        token: token
    })
}

export const login = async(req,res) => {
    res.send("login")
}