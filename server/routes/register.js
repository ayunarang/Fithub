
import bcrypt from "bcrypt"
import User from "../mongoDB/models/User.js"

const register = async (req, res) => {
    try {
        const {
            fullName,
            email,
            username,
            password } = req.body;

        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(password, salt)

        const createUser = new User({
            fullName: fullName,
            email: email,
            username: username,
            password: hashPassword
        })

        const saveUser = await createUser.save()
        res.status(200).json(saveUser)

    } catch (error) {
        console.log(error)
        res.status(400)
    }
}


export default register