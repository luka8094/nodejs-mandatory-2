//Main server
const dotenv = require("dotenv")
const express = require("express")
const cors = require("cors")
const usersRouter = require("./routers/users/usersDataRouter")
const productsRouter = require("./routers/products/productsDataRouter")
const {baseLimiter} = require("./utilities/traffic/serviceLimiter")

//run environmental configuration
dotenv.config()

//server specific varaiables
const app = express()
const PORT = process.env.PORT || 4000
const corsOptions = {
    origin: 'http://localhost:8080'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use("/api", baseLimiter, usersRouter)
app.use("/api", baseLimiter, productsRouter)

app.listen(PORT, () => console.log("Main server is running:", PORT))