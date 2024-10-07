const User = require('../model/user')
const { v4: uuidv4 } = require("uuid");
const {setUser,getUser} = require('./../service/userMap')

async function handleSignup(req,res){
    const {name,password,email} = req.body
    if(name && password && email){
        console.log(name,password,email);
        User.create({
            name,
            email,
            password
        })
        return res.redirect("/login")
    }
    return res.send("Error")
}

async function handleLogin(req,res){
    const {email,password}  = req.body;
    if(email && password){
        const user = await User.findOne({
            email,
            password
        })
        if(!user){
            return res.send("Invalid email or Id")
        }
        const uniqueToken = setUser(user)
        res.cookie("uid",uniqueToken)        
        return res.redirect("/")
    }
    return res.send("Please enter valid Email and password")
}


module.exports = {handleSignup,handleLogin}