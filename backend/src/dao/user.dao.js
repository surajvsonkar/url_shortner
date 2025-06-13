import User from "../models/user.model"

export const findUserByEmail = async(email)=> {
    return await User.findOne({email})
}