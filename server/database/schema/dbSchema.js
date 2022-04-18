const database = require("../connection/dbConnection")
const bcrypt = require("bcrypt")
const dropMode = false

;(async () =>{ 
    
    const databaseConnection = await database
    const seeds = [
        {
            name: "admin",
            email: "admin@email.com",
            password: await bcrypt.hash("superpassword", 12)
        },
        {
            name: "user2",
            email: "user2@email.com",
            password: await bcrypt.hash("password2", 12)
        }
    ]

    console.log(seeds)

    if(dropMode){
        databaseConnection.exec("DROP TABLE IF EXISTS user;")
        databaseConnection.exec("DROP TABLE IF EXISTS products;")
    }

    //create users table
    databaseConnection.exec(`
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(70),
            email VARCHAR(255),
            password VARCHAR(255)
        );
    `)

    databaseConnection.exec(`
        CREATE TABLE IF NOT EXISTS products(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(200),
            price INTEGER
        );
    `)
    
    //seed the users table
    if(!dropMode){
        databaseConnection.run(`
        INSERT INTO users (name, email, password) VALUES
        (
            '${seeds[0]['name']}',
            '${seeds[0]['email']}',
            '${seeds[0]['password']}'
        )
        `)
        databaseConnection.run(`
        INSERT INTO users (name, email, password) VALUES
        (
            '${seeds[1]['name']}',
            '${seeds[1]['email']}',
            '${seeds[1]['password']}'
        )
        `)
    }

    databaseConnection.close()
})()