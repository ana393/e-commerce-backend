const jsonwebtoken = require('jsonwebtoken');

const issueJWT = (isUser) => {
    const id = isUser._id;
    const expiresIn = '1d';
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
module.exports = issueJWT;