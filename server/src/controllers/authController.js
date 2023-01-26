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
    if (await handleCoordinatorLogin(body.user, body.password) || await handleTeacherLogin(body.user, body.password)){
        return res.status(200).send({status: "SUCCESS", data: 'Usuario ' + body.user + ' is logged in!'})
    }
    return res.status(401).send({status: "UNAUTHORIZED", data: 'Usuario o contraseña incorrectos.'})
}

export default {handleLogin};