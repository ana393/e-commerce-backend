import jsonwebtoken from 'jsonwebtoken';

export default issueJWT = (user) =>{
    const id = user._id;
    const expireIn = '1d';
    const payload = {
        sub: _id,
        iat: Date.now()
    };
    const signedToken = jsonwebtoken.sign(payload, process.env.SECRET_JWT, {expireIn: expireIn})
    return {
        token: "Bearer " + signedToken,
        expires: expireIn
    }
}