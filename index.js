const express = require('express')
const path = require('path')
const CookieParser = require('cookie-parser')

const {connectMongo}  = require('./connect')
const {getAuthverify} = require('./middleware/auth')

const urlRouter = require('./routes/url')
const staticRoute = require('./routes/staticroute')
const userRouter = require("./routes/users")

const app = express()
app.set("view engine", "ejs")
app.set("views",path.resolve("./views"))

connectMongo("mongodb://localhost:27017/url_shortner").then(()=>{
    console.log("MongoDB Connected")
}).catch((err)=>{
    console.log(err)
})

app.use(express.urlencoded({ extended: false }));
app.use(CookieParser())
app.use(express.json())
app.use("/url",urlRouter)
app.use("/user",userRouter)
app.use("/",getAuthverify,staticRoute)

app.listen(8000,()=>{
    console.log("Server started")
})


