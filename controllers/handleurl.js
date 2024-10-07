const URL = require('../model/url')
const shortid = require("shortid");
const {getUser} = require('../service/userMap')
async function handleGenerateURL(req,res){
    const body = req.body;
    const uid = req.cookies.uid;
    if(!uid){
        return res.render("login")
    }
    const user = getUser(uid)
    if(body.redirectURL){
        const shortId = shortid();
        const redirectURL = body.redirectURL
        console.log(redirectURL)
        await URL.create({
            redirectURL,
            shortId,
            totalClicks : [],
            createdBy :user._id
        })
        return res.redirect("/");
    }
    res.send("Error due to bad request")
}

async function handleGetURL(req,res){
    const shortId = req.params.shortId;
    if(shortId){
        const url = await URL.findOneAndUpdate({shortId},
            {
                $push:{
                    totalClicks : {
                        timeStamp : Date.now()
                    }
                }
            }
        )
        return res.redirect(url.redirectURL)
    }
}

async function handleAnalytics(req,res){
    const shortId = req.params.shortId;
    if(shortId){
        const url = await URL.findOne({shortId})

        return res.send({
            redirectURL : url.redirectURL,
            shortId : url.shortId,
            totalClicks : url.totalClicks.length
        })
    }
}

module.exports = {handleGenerateURL,handleGetURL,handleAnalytics}