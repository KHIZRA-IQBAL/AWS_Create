const user_collection = require("../model/user.model")

exports.createFunc =async (req,res)=>{
    try {
    const {username , password , email} = req.body
    const existinguser = await user_collection.findOne({email})
    if (existinguser) {
        return res.status(400).json({status:"User is already exist"})
    }
    const new_user = await user_collection.create({
        username,
        password,
        email,
    })
    return res.status(201).json({data:new_user})
    } catch (error) {
        return res.status(500).json({error:error})
    }
}