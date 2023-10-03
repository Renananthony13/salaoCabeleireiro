const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();


const auth = (req, res, next) => {

    const token = req.headers.authorization;

    // const [text, tokenIn] = token.split(" ");
    // console.log(token)

    try {

       jwt.verify(token, process.env.SECRETKEY)

       const {iduser, emailUser} = jwt.decode(token)

       req.iduser = iduser
       req.emailUser = emailUser

       return next()
    } catch(error) {
        console.log(error);
        res.status(401).json({message: "Unauthorized User"});
    }

}

module.exports = auth


