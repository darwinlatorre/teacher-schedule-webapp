import programService from '../services/programService.js';
import { checkCompetencias } from '../controllers/competenciaController.js';

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

     if( !Array.isArray(body.competencias) ){
        res.status(400).send({
            status: 'FAILED', 
                data: { 
                    error: 'Verificar, el objeto body.competencias no es de tipo Array'
                }
            });
        return;
    }

    if ( !await checkCompetencias(body.competencias) ){
        res.status(400).send({
            status: 'FAILED', 
                data: { 
                    error: 'Uno de los IDs ingresados no existe'
                }
            });
        return;
    }

    const newProgram = { 
        idPrograma: body.idPrograma, 
        nombrePrograma: body.nombrePrograma, 
        competencias: body.competencias,
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
    
    if( !Array.isArray(body.competencias) ){
        res.status(400).send({
            status: 'FAILED', 
                data: { 
                    error: 'Verificar, el objeto a actualizar competencias no es de tipo Array'
                }
            });
        return;
    }

    if ( !await checkCompetencias(body.competencias) ){
        res.status(400).send({
            status: 'FAILED', 
                data: { 
                    error: 'Uno de los IDs ingresados  a actualizar no existe'
                }
            });
        return;
    }
    
    const newProgram = { 
        idPrograma: body.idPrograma, 
        nombrePrograma: body.nombrePrograma,
        competencias: body.competencias,
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

export const numberProgram = async () => {
    return await competenciaService.numberProgram();
};

export default {
    getAllPrograms,
    getOneProgram,
    createNewProgram,
    updateProgram,
    deleteProgram,
    numberProgram
};
