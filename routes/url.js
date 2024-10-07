const express = require('express')
const {handleGenerateURL,handleGetURL,handleAnalytics} = require('./../controllers/handleurl')



const router = express.Router();

router.post("/",handleGenerateURL);
router.get("/:shortId",handleGetURL)
router.get("/analytics/:shortId",handleAnalytics)
module.exports = router