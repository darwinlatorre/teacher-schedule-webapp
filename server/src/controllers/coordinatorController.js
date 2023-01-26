import coordinatorService from '../services/coordinatorService.js';

const getAllCoordinators = async (req, res) => {
    const allCoordinators = await coordinatorService.getAllCoordinators();
    res.send({status: 'OK', data: allCoordinators});
};

const getOneCoordinator = async (req, res) => {
    const {
        params: { coordinatorID },
        } = req;
    const coordinator = await coordinatorService.getOneCoordinator(coordinatorID);
    res.send({status: 'OK', data: coordinator });
};

const createNewCoordinator = async (req, res) => {
    const { body } = req;

    const duplicate = await coordinatorService.checkUser(body.user);
    if(duplicate) return res.sendStatus(409); //Conflict

    const newCoordinator = { 
        idCoordinador: body.idCoordinador, 
        nombres: body.nombres, 
        apellidos: body.apellidos,
        tipoIdentificacion: body.tipoIdentificacion, 
        user: body.user, 
        password: body.password, 
        roles: { "user": 4000, "coordinator": 5000},
        refreshToken: ''
    }
    
    try {
        newCoordinator.password = await coordinatorService.encrypPassword(body.password)
        const createdCoordinator = await coordinatorService.createNewCoordinator(newCoordinator);
        res.status(201).send({status: "OK", data: 'new coordinator '+ createdCoordinator.nombres + ' created!'});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

const updateCoordinator = async (req, res) => {
     const { body , 
        params: { coordinatorID },
        query: { condition },
    } = req; 

    
    const newCoordinator = { 
        idCoordinador: body.idCoordinador, 
        nombres: body.nombres, 
        apellidos: body.apellidos,
        tipoIdentificacion: body.tipoIdentificacion, 
        user: body.user, 
        password: body.password, 
    };

    try {
        const updatedCoordinator = await coordinatorService.updateCoordinator(coordinatorID, newCoordinator);
        res.send({status: 'OK', data: updatedCoordinator });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

const deleteCoordinator = (req, res) => {
    const {
        params: {coordinatorID},
    } = req;
    try {
        
        coordinatorService.deleteCoordinator(coordinatorID);
        res.status(204).send({ status: "OK" })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

export const checkCoordinatorToken = async (token) => {
    return coordinatorService.checkToken(token);
}

export const updateCoordinatorToken = async (coodinator) => {
    return await coordinatorService.updateCoordinatorToken(coordinator);
}

export default {
    getAllCoordinators,
    getOneCoordinator,
    createNewCoordinator,
    updateCoordinator,
    deleteCoordinator
};
