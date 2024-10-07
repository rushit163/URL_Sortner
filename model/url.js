const mongoose = require('mongoose')


const Schema = new mongoose.Schema({
    redirectURL : {
        type : String,
        required : true,
    },
    shortId:{
        require : true,
        type : String,
        unique : true
    },
    totalClicks : [
        {
        timeStamp: {
        type : Number
    }}],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
},{timestamps : true})

const URL = new mongoose.model('url',Schema);

module.exports = URL