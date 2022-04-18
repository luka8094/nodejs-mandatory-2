const jwt = require("jsonwebtoken")

exports.generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '60s'})
}

exports.authenticationToken = (req, res, next) => {
    //Get the 'Authorization: Bearer token' header - note : MUST be lower case 'auhtorization' in header when sending request
    const authorizationHeader = req.headers['authorization']
    console.log(req.headers)
    //Is the 'authorization' header found? then get the attached token
    const token = authorizationHeader && authorizationHeader.split(" ")[1]
    //if the token is not found - return an error
    if(token == null || token == undefined) return res.status(401).send('invalid header')

    //authorize access to user specific data is token is valid - note : auhorization token most correspond to the token
    //that is generated from jwt.sign() response
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.status(403).send('forbidden : token not valid')
    
        req.user = user
        console.log(req.user)
        next()
    })
}

exports.admin = (req, res, next) => {
    
}