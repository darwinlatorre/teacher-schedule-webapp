import programService from '../services/programSevices.js';
//import { createsNewTeacher } from '../helpers/createObjetHelper.js';

const getAllPrograms = async (req, res) => {
    const allPrograms = await programService.getAllPrograms();
    res.send({status: 'OK', data: allPrograms});
};

const getOneProgram = async (req, res) => {
    const {
        params: { programID },
        } = req;
    const program = await programService.getOneProgram(programID);
    res.send({status: 'OK', data: program });
};

const createNewProgram = async (req, res) => {
    const { body } = req;

    const newProgram = { 
        idPrograma: body.idPrograma, 
        nombrePrograma: body.nombrePrograma, 
        competencias: 'null',
    }
    
    try {
        const createdProgram = await programService.createNewProgram(newProgram);
        res.status(201).send({status: "OK", data: createdProgram});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

const updateProgram = async (req, res) => {
    const { body , 
        params: { programID }
    } = req; 
    
    
    const newProgram = { 
        idPrograma: body.idPrograma, 
        nombrePrograma: body.nombrePrograma, 
        competencias: 'null',
    }

    try {
        const updatedProgram = await programService.updateProgram(programID, newProgram);
        res.send({status: 'OK', data: updatedProgram });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

const deleteProgram = (req, res) => {
    const {
        params: {programID},
    } = req;

    try {
        programService.deleteProgram(programID);
        res.status(204).send({ status: "OK" })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};


export default {
    getAllPrograms,
    getOneProgram,
    createNewProgram,
    updateProgram,
    deleteProgram
};
