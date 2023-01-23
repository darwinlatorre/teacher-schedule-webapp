
import enviromentService from '../services/enviromentService.js';

const getAllEnviroments = async (req, res) => {
    const allEnviroment = await enviromentService.getAllEnviroments();
    res.send({status: 'OK', data: allEnviroment});
};

const getOneEnviroment = async (req, res) => {
    const {
        params: { enviromentID },
        } = req;
    const enviroment = await enviromentService.getOneEnviroment(enviromentID);
    res.send({status: 'OK', data: enviroment });
};

const createNewEnviroment = async (req, res) => {
    const { body } = req;

    if(body.tipo !== "Virtual" && 
        body.tipo !== "Presencial"){

        res.status(400).send({
            status: 'FAILED', 
            data: { 
                error: 'One of the keys this keys {tipo} are wrong' 
            }
        });
        return;
    }
    const newEnviroment = { 
        idAmbiente: body.idAmbiente, 
        nombre: body.nombre, 
        tipo: body.tipo,
        capacidad: body.capacidad, 
        ubicacion: body.ubicacion, 
        estado: 'activo',
        horario: 'null'
    }
    
    try {
        const createdEnviroment = await enviromentService.createNewEnviroment(newEnviroment);
        res.status(201).send({status: "OK", data: createdEnviroment});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }
};

const updateEnviroment = async (req, res) => {
    const { body , 
        params: { enviromentID },
        query: { condition },
    } = req; 
    
    if(condition == 'Activo' || condition == 'Inactivo'){
        const updatedEnviromentCondition = await enviromentService.updatedEnviromentCondition(enviromentID, condition);
        res.send({status: 'OK', data: updatedEnviromentCondition})
        return;
    }
    
    if(body.tipo !== "Virtual" && 
        body.tipo !== "Presencial"){

        res.status(400).send({
            status: 'FAILED', 
            data: { 
                error: 'One of the keys this keys {tipo} are wrong' 
            }
        });
        return;
    }

    const newEnviroment = { 
        idAmbiente: body.idAmbiente, 
        nombre: body.nombre, 
        tipo: body.tipo,
        capacidad: body.capacidad, 
        ubicacion: body.ubicacion, 
        estado: body.estado,
        horario: 'null'
    }

    try {
        const updatedEnviroment = await enviromentService.updateEnviroment(enviromentID, newEnviroment);
        res.send({ status: 'OK', data: updatedEnviroment });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }
};

const deleteEnviroment = (req, res) => {
    const {
        params: {enviromentID},
    } = req;

    try {
        enviromentService.deleteEnviroment(enviromentID);
        res.status(204).send({ status: "OK" })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }
};

export const addClassToEnvironmente = async (classID, environmentID) => {
    return await enviromentService.addClassToEnvironmente(classID, environmentID);
}

export const removeClassToEnvironment = async (classID, environmentID) => {
    return await enviromentService.removeClassToEnvironment(classID, environmentID);
}

export default {
    getAllEnviroments,
    getOneEnviroment,
    createNewEnviroment,
    updateEnviroment,
    deleteEnviroment,
    addClassToEnvironmente, 
    removeClassToEnvironment
};
