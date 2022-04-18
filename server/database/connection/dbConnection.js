//source of reference and inspiration: https://www.tutorialguruji.com/javascript/nodejs-how-to-export-a-sqlite-connection/
const {open} = require("sqlite")
const sqlite3 = require("sqlite3")

async function initialize(){ 
    try{ 
        return await open({
            filename: './database/schema/webshop.db',
            driver: sqlite3.Database
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = initialize()