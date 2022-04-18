const {Router} = require("express")
const productsController = require("../../controllers/products/productsController")

const productsRouter = Router()

productsRouter.get("/products", productsController.getAll)

productsRouter.get("/products/:id", productsController.getOne)

module.exports = productsRouter
