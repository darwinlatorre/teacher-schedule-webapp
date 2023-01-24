import coordinatorService from "../services/coordinatorService.js";

const handleLogin = async(req, res) => {
    const { body } = req;

    if (!body.user || !body.password) {
        return res.status(400).send({status: "FAILED", data: 'Usuario o contraseña son requeridos.'});
    }

    const foundUser = await coordinatorService.checkUser(body.user)

    if (foundUser.user !== body.user) {
        return res.status(401).send({status: "UNAUTHORIZED"})
    }
    const matchPassword = await coordinatorService.matchPassword(body.password, foundUser.password)
    if (matchPassword) {
        return res.status(200).send({status: "SUCCESS", data: 'Usuario ' + foundUser.user + ' is logged in!'})
    }
    else{
        res.status(401).send({status: 'UNAUTHORIZED'})
    }
}

export default {handleLogin};