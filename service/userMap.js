const jwt = require('jsonwebtoken')


const userMap = new Map()
const jwtsecret = "Rushit@1734123123123"

const setUser= (user)=>{
    const verifyUser = {
        _id : user._id,
        email : user.email
    }
    return jwt.sign(verifyUser,jwtsecret)
}

const getUser = (id)=>{
   if(!id){
    return null
   }
   return jwt.verify(id,jwtsecret)
}

module.exports = {getUser,setUser}