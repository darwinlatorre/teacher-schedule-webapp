import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if(!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if(err) return res.sendStatus(403); //invalid token
            req.user = decoded.userInfo.user;
            req.roles = decoded.userInfo.roles;
            next();
        }
    );
}

export default verifyJWT;