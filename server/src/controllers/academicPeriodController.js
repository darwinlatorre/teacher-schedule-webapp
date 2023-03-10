import academicPeriodService from '../services/academicPeriodService.js';
import { createNewSchedule, updateAcadPeriodToSchedule } from './scheduleController.js'

const getAllAcademicPeriods = async (req, res) => {
    const allAcademicPeriods = await academicPeriodService.getAllAcademicPeriods();
    res.send({status: 'OK', data: allAcademicPeriods});
};

const getOneAcademicPeriod = async (req, res) => {
    const {
        params: { academicPeriodID },
        } = req;
    const academicPeriod = await academicPeriodService.getOneAcademicPeriod(academicPeriodID);
    res.send({status: 'OK', data: academicPeriod });
};

const createNewAcademicPeriod = async (req, res) => {
    const { body } = req;

    const newAcademicPeriod = { 
        nombre: 'null', 
        duracion: body.duracion,
        fechaInicio: body.fechaInicio, 
        fechaFinal: body.fechaFinal, 
        idHorario: 'null',
        estado: 'activo'
    }
    
    try {
        newAcademicPeriod.idHorario = (await createNewSchedule(createNewAcademicPeriod._id))._id;
        newAcademicPeriod.nombre = ("AP00"+ (await academicPeriodService.getNumberOfDocuments() + 1));
        const createdAcademicPeriod = await academicPeriodService.createNewAcademicPeriod(newAcademicPeriod);
        updateAcadPeriodToSchedule(newAcademicPeriod.idHorario, createdAcademicPeriod._id);

        res.status(201).send({status: "OK", data: createdAcademicPeriod});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

const updateAcademicPeriod = async (req, res) => {
     const { body , 
        params: { academicPeriodID },
        query: { condition },
    } = req; 

    if(condition == 'Activo' || condition == 'Inactivo'){
        const updatedAcademicPeriodCondition = await academicPeriodService.updatedAcademicPeriodCondition(academicPeriodID, condition);
        res.send({status: 'OK', data: updatedAcademicPeriodCondition})
        return;
    }
    
    const newAcademicPeriod = { 
        nombre: body.nombre, 
        duracion: body.duracion,
        fechaInicio: body.fechaInicio, 
        fechaFinal: body.fechaFinal, 
        estado: body.estado
    }

    try {
        const updatedAcademicPeriod = await academicPeriodService.updateAcademicPeriod(academicPeriodID, newAcademicPeriod);
        res.send({status: 'OK', data: updatedAcademicPeriod });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

const deleteAcademicPeriod = (req, res) => {
    const {
        params: {academicPeriodID},
    } = req;

    try {
        academicPeriodService.deleteAcademicPeriod(academicPeriodID);
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
    getAllAcademicPeriods,
    getOneAcademicPeriod,
    createNewAcademicPeriod,
    updateAcademicPeriod,
    deleteAcademicPeriod,
};
