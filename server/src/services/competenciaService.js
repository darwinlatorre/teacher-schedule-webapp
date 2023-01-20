import competencia from '../models/competenciaModel.js';

const getAllCompetencias = async () => {
    const allCompetencias = await competencia.find();
    return allCompetencias;
};

const getOneCompetencia = async (competenciaID) => {
    const foundCompetencia = await competencia.findById(competenciaID);
    return foundCompetencia;
};

const createNewCompetencia = async (competenciaToInsert) => {
    const createdCompetencia = new competencia (competenciaToInsert);
    await createdCompetencia.save();
    return createdCompetencia;
};

const updateCompetencia = async (competenciaID, changes) => {
    const updatedCompetencia = await competencia.findByIdAndUpdate(competenciaID, changes, {new: true});
    return updatedCompetencia;
};

const updatedCompetenciaCondition = async (competenciaID, condition) => {
    const updatedCompetenciaCondition = await competencia.findByIdAndUpdate(competenciaID, { estado: condition }, {new: true});
    return updatedCompetenciaCondition;
}

const deleteCompetencia = async (competenciaID) => {
    await competencia.findByIdAndDelete(competenciaID)
};

const checkCompetencias = async (competenciaIDs) => {
    try {
        await competencia.find({ '_id': {$in: competenciaIDs}})
        return true;
    } catch (error) {
        return false;
    }
}



export default {getAllCompetencias,
    getOneCompetencia,
    createNewCompetencia,
    updateCompetencia,
    updatedCompetenciaCondition,
    deleteCompetencia,
    checkCompetencias,
};
