const express = require('express')
const {getAllUrls} = require('../controllers/handleStatic')
const router = express.Router();

router.get('/',getAllUrls)
router.get("/signup", (req, res) => {
    return res.render("signup");
});
  
router.get("/login", (req, res) => {
    return res.render("login");
});
module.exports = router