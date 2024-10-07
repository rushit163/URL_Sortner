const URL = require('../model/url')

async function getAllUrls(req,res){
    console.log("printing from the static Route")
    console.log(req.user)
    const urls = await URL.find({createdBy :req.user._id });
    console.log("fetching all urls")
    console.log(urls)
    return res.render("home",{urls})
}

module.exports = {getAllUrls}