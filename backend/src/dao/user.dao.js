import User from "../models/user.model.js"

export const findUserByEmail = async(email)=> {
    return await User.findOne({email})
}

export const findUserById = async(id)=> {
    return await User.findOne({
        _id: id
    })
}

export const createUser = async(name, email, password)=> {
    const newUser = await User.create({name, email, password})
    return newUser
}