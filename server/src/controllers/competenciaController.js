import competenciaService from '../services/competenciaService.js';

const getAllCompetencias = async (req, res) => {
    const allCompetencias = await competenciaService.getAllCompetencias();
    res.send({status: 'OK', data: allCompetencias});
};

const getOneCompetencia = async (req, res) => {
    const {
        params: { competenciaID },
        } = req;
    const competencia = await competenciaService.getOneCompetencia(competenciaID);
    res.send({status: 'OK', data: competencia });
};

const createNewCompetencia = async (req, res) => {
    const { body } = req;

    if(body.tipo !== "Generica" && 
        body.tipo !== "Específica"){

        res.status(400).send({
            status: 'FAILED', 
            data: { 
                error: 'One of the keys this keys {tipoDocente} are wrong'
            }
        });
        return;
    }

    const newCompetencia = { 
        idCompetencia: body.idCompetencia, 
        tipo: body.tipo, 
        nombre: body.nombre, 
        estado: 'activo', 
        idPrograma: 'null'
    }
    
    try {
        const createdCompetencia = await competenciaService.createNewCompetencia(newCompetencia);
        res.status(201).send({status: "OK", data: createdCompetencia});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

const updateCompetencia = async (req, res) => {
     const { body , 
        params: { competenciaID },
        query: { condition },
    } = req; 

    if(condition == 'Activo' || condition == 'Inactivo'){
        const updatedCompetenciaCondition = await competenciaService.updatedCompetenciaCondition(competenciaID, condition);
        res.send({status: 'OK', data: updatedCompetenciaCondition})
        return;
    }

    
    if(body.tipo !== "Generica" && 
        body.tipo !== "Específica"){

        res.status(400).send({
            status: 'FAILED', 
            data: { 
                error: 'One of the keys this keys {tipoDocente} are wrong'
            }
        });
        return;
    }
    
    const newCompetencia = { 
        idCompetencia: body.idCompetencia, 
        tipo: body.tipo, 
        nombre: body.nombre, 
        estado: 'activo', 
        idPrograma: body.idPrograma
    }

    try {
        const updatedCompetencia = await competenciaService.updateCompetencia(competenciaID, newCompetencia);
        res.send({status: 'OK', data: updatedCompetencia });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

const deleteCompetencia = (req, res) => {
    const {
        params: {competenciaID},
    } = req;

    try {
        competenciaService.deleteCompetencia(competenciaID);
        res.status(204).send({ status: "OK" })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

export const checkCompetencias = async (competenciaIDs) => {
    return await competenciaService.checkCompetencias(competenciaIDs);
};

export const addProgramToCompetencias = async (competenciaIDs, program) => {
    return await competenciaService.addProgramToCompetencias(competenciaIDs, program);
};

export const deleteProgramToCompetencias = async (programID) => {
    return await competenciaService.deleteProgramToCompetencias(programID);
}



export default {
    getAllCompetencias,
    getOneCompetencia,
    createNewCompetencia,
    updateCompetencia,
    deleteCompetencia,
    checkCompetencias,
};
