const {Router} = require("express")
const privilegesController = require("../../controllers/privileges/privilegesController")

const privilegesRouter = Router()

privilegesRouter.post("/login", privilegesController.login)

privilegesRouter.post("/token", privilegesController.token)

privilegesRouter.delete("/logout", privilegesController.logout)

module.exports = privilegesRouter   