export const register = async(req,res)=> {
    const {name, email, password} = req.body
    const user = await registerUser(name, email, password)
    res.status(200).json(user)
}

export const login = async(req,res) => {
    res.send("login")
}