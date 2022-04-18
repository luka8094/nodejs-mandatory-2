const database = require("../../database/connection/dbConnection")

//get all products
async function getAll(req, res){
    const dataAccess = await database
    const productssResult = await dataAccess.all("SELECT * FROM products;")

    res.send({data: productssResult})
}

//get one product
async function getOne(req, res){
    const dataAccess = await database
    const userId = req.body.id

    const productResult = await dataAccess.get("SELECT * FROM products WHERE ROWID = ?;", [userId])

    res.send({data: productResult})
}

module.exports =  { getAll, getOne }