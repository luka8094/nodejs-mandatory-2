const {Router} = require("express")
const usersController = require("../../controllers/users/usersController")

const usersRouter = Router()

usersRouter.get("/users", usersController.getAll)

usersRouter.get("/users/:id", usersController.getOne)

usersRouter.post("/users", usersController.create)

usersRouter.patch("/users/:id", usersController.update)

usersRouter.delete("/users/:id", usersController.remove)

module.exports = usersRouter