import jwt from 'jsonwebtoken';

import * as dotenv from 'dotenv';
dotenv.config();

import teacher from '../models/teacherModel.js'
import coordinator from '../models/coordinatorModel.js'


const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const foundCoodinator = await coordinator.findOne({ refreshToken }).exec()
    const foundTeacher = await teacher.findOne({ refreshToken }).exec()

    if(foundCoodinator){
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if (err || foundCoodinator.user !== decoded.user) return res.sendStatus(403);
                const roles = Object.values(foundCoodinator.roles)
                const accessToken = jwt.sign(
                    { 
                        "userInfo": {
                            "user": decoded.user,
                            "roles": roles
                        }
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '30m' }
                );
                return res.json({ accessToken });
            }
        )
    }
    else if(foundTeacher){
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if (err || foundTeacher.user !== decoded.user) return res.sendStatus(403);
                const roles = Object.values(foundTeacher.roles)
                const accessToken = jwt.sign(
                    { 
                        "userInfo": {
                            "user": decoded.user,
                            "roles": roles
                        }
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '30m' }
                );
                return res.json({ accessToken });
            }
        )
    }
}

export default { handleRefreshToken };