const jsonwebtoken = require('jsonwebtoken');

const issueJWT = (isUser) => {
    const id = isUser._id;
    const expiresIn = '7d';// 7d implement refreshing token
    const payload = {
        sub: id,
        iat: Date.now()
    };
    const signedToken = jsonwebtoken.sign(payload, process.env.SECRET_JWT, {expiresIn: expiresIn})
    return {
        token: "Bearer " + signedToken,
        expires: expiresIn
    }
}

const only = (roles) => async(req, res, next) =>{
    if (!roles.includes(req.user.role)) {
        return res.status(403).send({msg:"Forbbiden access"})
    }
    next();
}
module.exports = {
    issueJWT,
    only
 }