import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import * as dotenv from 'dotenv';
dotenv.config();

import teacher from '../models/teacherModel.js'
import coordinator from '../models/coordinatorModel.js'

const handleLogin = async(req, res) => {
    const { body } = req;
    if (!body.user || !body.password) {
        return res.status(400).send({status: "FAILED", data: 'Usuario o contraseña son requeridos.'});
    }
    const foundCoodinator = await coordinator.findOne({ user: body.user}).exec()
    const foundTeacher = await teacher.findOne({ user: body.user}).exec();
    if(foundCoodinator){
        const match = await bcrypt.compare(body.password, foundCoodinator.password)
        if(match){
            const roles = Object.values(foundCoodinator.roles)

            const accessToken = jwt.sign(
                { 
                    "userInfo": {
                    "user": foundCoodinator.user,
                    "roles": roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { 
                    expiresIn: '30m'
                }
            );
            const refreshToken = jwt.sign(
                { "user": foundCoodinator.user },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '1h'}
            );
            // Savin refresh token with current user
            
            foundCoodinator.refreshToken = refreshToken;
            const result = await foundCoodinator.save();
            console.log(result);

            //TEMP SOLUCION FOR TESTING
            /* res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 30 * 60 * 1000 }); */
            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', maxAge: 30 * 60 * 1000 });
            return res.send(accessToken);
        }
        return res.sendStatus(401)
    }
    else if(foundTeacher){
        const match = await bcrypt.compare(body.password, foundTeacher.password)
        if(match){
            const roles = Object.values(foundTeacher.roles)

            const accessToken = jwt.sign(
                { 
                    "userInfo": {
                    "user": foundTeacher.user,
                    "roles": roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { 
                    expiresIn: '30m'
                }
            );
            const refreshToken = jwt.sign(
                { "user": foundTeacher.user },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '1h'}
            );
            // Savin refresh token with current user
            foundTeacher.refreshToken = refreshToken;
            const result = await foundTeacher.save();
            console.log(result);

            //TEMP SOLUCION FOR TESTING
            /* res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 30 * 60 * 1000 }); */
            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', maxAge: 30 * 60 * 1000 });
            return res.send(accessToken);
        }
        return res.sendStatus(401)
    }
    return res.sendStatus(401)
}

export default {handleLogin};