import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../mongoDB/models/User.js"

const login = async (req, res) => {
    console.log("Login function called");
    const { username, password } = req.body;
    console.log("Received username:", username);
    console.log("Received password:", password);
        try{
            const user = await User.findOne({ username: username });
            console.log("User found in database:", user);
            
        if(!user){
            return res.status(400).json({msg:"User not found"})
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log("Passwords match:", passwordMatch);
        
        if(!passwordMatch){
            return res.status(400).json({msg:"Invalid credentials"})
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        console.log("Generated token:", token);
        

        res.status(200).json(token)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

export default login