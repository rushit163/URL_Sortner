const {getUser}  = require('../service/userMap')

const getAuthverify=(req,res,next)=>{
    const cookies = req.cookies;
    if(!cookies.uid){
        return res.render("login")
    }
    const user = getUser(cookies.uid)
    if(!user){
        return res.render("login")
    }
    req.user = user
    next();
}



module.exports  = {getAuthverify}