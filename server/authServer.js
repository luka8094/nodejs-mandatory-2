//Authenticaion server
const dotenv = require("dotenv")
const helmet = require("helmet")
const express = require("express")
const {authLimiter} = require("./utilities/traffic/serviceLimiter")
const privilegesRouter = require("./routers/privileges/privilegesRouter")

//run environmental configuration
dotenv.config()

//server specific varaiables
const app = express()
const PORT = process.env.PORT || 5000

//app.use(helmet())
app.use(express.json())
app.use("/auth", authLimiter, privilegesRouter)

app.listen(PORT, () => console.log("Auth server is running:", PORT))