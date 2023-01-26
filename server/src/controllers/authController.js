import coordinatorService from "../services/coordinatorService.js";
import teacherService from "../services/teacherService.js";

const handleCoordinatorLogin = async(usuario, contraseña) => {
    try {
        const foundUserCoordinator = await coordinatorService.checkUser(usuario)
        if ( foundUserCoordinator.user !== usuario) {
            return false;
        }
        if (await coordinatorService.matchPassword(contraseña, foundUserCoordinator.password)) {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}

const handleTeacherLogin = async(usuario, contraseña) => {
    try {
        const foundUserTeacher = await teacherService.checkUser(usuario)
        if ( foundUserTeacher.user !== usuario) {
            return false;
        }
        if (await teacherService.matchPassword(contraseña, foundUserTeacher.password)) {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }

}

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
    return res.status(401).send({status: "UNAUTHORIZED", data: 'Usuario o contraseña incorrectos.'})
}

export default {handleLogin};