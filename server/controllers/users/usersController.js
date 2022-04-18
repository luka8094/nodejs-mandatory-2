const database = require("../../database/connection/dbConnection")
const {authenticationToken} = require("../../utilities/verify/authentication")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

//get all users ☑️
async function getAll(req, res){
    const dataAccess = await database
    const usersResult = await dataAccess.all("SELECT * FROM users;")

    res.send({data: usersResult})
}

//get one user ☑️
async function getOne(authenticationToken, req, res){
    const dataAccess = await database
    const {name} = req.user

    const userResult = await dataAccess.get("SELECT * FROM users WHERE ROWID = ?;", [name])

    res.send({data: userResult})
}

//create a new user ☑️
async function create(req, res, err){
        const dataAccess = await database
        const newUser = {
            name: req.body.name, 
            email: req.body.email, 
            password: await bcrypt.hash(req.body.password, 12)
        }
        
        const validateUser = await dataAccess.get(`
        SELECT * FROM users 
        WHERE name = ?;`, 
        [newUser.name])

        if(validateUser !== undefined){
            delete req.body.password

            return res.status(409).send("user exists")
        }else{
            const {changes} = await dataAccess.run(`
                INSERT INTO users (name, email, password) 
                VALUES (?, ?, ?);
            `, [newUser.name, newUser.email, newUser.password])
            
            delete req.body.password

            if(changes === 1) return res.status(201).send({data: {rows: changes, status: "user was created"}})
        }
        res.status(500).send({data : {msg: "internal server error"}})
}

//update an user ☑️
async function update(req, res){
    const dataAccess = await database
    const userResult = await dataAccess.get(
        `SELECT * FROM users 
        WHERE name = ?;
        `, [req.body.name])
    
    console.log(userResult)

    if(userResult !== undefined){
        const newName = req.body.newName ?? userResult.name
        const newEmail = req.body.email ?? userResult.email
        const newPassword = (req.body.password || (req.body.password !== undefined) ? 
                            await bcrypt.hash(req.body.password, 12) : null) 
                            ?? userResult.password 

        const {changes} = await dataAccess.run(`
            UPDATE users SET name = ?, email = ?, password = ?
            WHERE id = ?
        `,[newName, newEmail, newPassword, userResult.id])
        
        if(changes === 1) return res.status(202).send({data: {rows: changes, status: "change successful"}})
    }
    else res.status(400).send({data: {msg: "invalid request"}})
}

//delete an user ☑️
async function remove(req, res){
    const dataAccess = await database
    const revokeUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    
    const validateUser = await dataAccess.get(`
    SELECT * FROM users
    WHERE name = ? AND email = ?;
    `, 
    [revokeUser.name, revokeUser.email])

    if(validateUser && validateUser.id !== 1){ 
        if(await bcrypt.compare(revokeUser.password, validateUser.password)){
            console.log(delete req.body.password)   
            const {changes} = dataAccess.run(`
            DELETE FROM users 
            WHERE password = ?;
            `,
            [validateUser.password])

            console.log(delete validateUser.password)
            return res.status(202).send({data: {rows: changes, status: "user removed"}})
        }
    }
    res.status(500).send({data: {msg: "internal server error"}})
}

module.exports =  { getAll, getOne, create, update, remove }