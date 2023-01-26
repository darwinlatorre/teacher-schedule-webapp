import * as dotenv from 'dotenv';
dotenv.config();

import teacher from '../models/teacherModel.js'
import coordinator from '../models/coordinatorModel.js'

const handleLogOut = async (req, res) => {
    // On client, also delete the access token

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content
    const refreshToken = cookies.jwt;

    const foundCoodinator = await coordinator.findOne({ refreshToken }).exec()
    const foundTeacher = await teacher.findOne({ refreshToken }).exec()

    if(foundCoodinator){
        foundCoodinator.refreshToken = '';
        await foundCoodinator.save();

        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true})
        return res.sendStatus(204);
    }
    else if(foundTeacher){

        foundTeacher.refreshToken = '';
        await foundTeacher.save();

        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true})
        return res.sendStatus(204);
    }
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true})
    return res.sendStatus(204);
}


export default { handleLogOut };