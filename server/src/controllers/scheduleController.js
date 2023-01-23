import scheduleService from '../services/scheduleService.js';

const getAllSchedules = async (req, res) => {
    const allSchedules = await scheduleService.getAllSchedules();
    res.send({status: 'OK', data: allSchedules});
};

const getOneSchedule = async (req, res) => {
    const {
        params: { scheduleID },
        } = req;
    const schedule = await scheduleService.getOneSchedule(scheduleID);
    res.send({status: 'OK', data: schedule });
};

export const createNewSchedule = async (idPeriodoAcademico) => {

    const newSchedule = { 
        idHorario: "", 
        idPeriodoAcademico: idPeriodoAcademico, 
        listIdClasses: [], 
    }

    newSchedule.idHorario = ("H00"+ (await scheduleService.getNumberOfDocuments() + 1));
    return await scheduleService.createNewSchedule(newSchedule);

};

const updateSchedule = async (req, res) => {
     const { body , 
        params: { scheduleID },
    } = req; 

    const newSchedule = { 
        idHorario: body.idHorario, 
        idPeriodoAcademico: body.idPeriodoAcademico, 
    }

    try {
        const updatedSchedule = await scheduleService.updateSchedule(scheduleID, newSchedule);
        res.send({status: 'OK', data: updatedSchedule });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

const deleteSchedule = (req, res) => {
    const {
        params: {scheduleID},
    } = req;

    try {
        scheduleService.deleteSchedule(scheduleID);
        res.status(204).send({ status: "OK" })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

export const updateAcadPeriodToSchedule = async (scheduleID, academicPeriodID) => {
    await scheduleService.updateAcadPeriodToSchedule(scheduleID, academicPeriodID)
}

export const checkHorario = async (horarioID) => {
    return await scheduleService.checkHorario(horarioID);
};

export const addClassToSchedule = async (classID, horarioID) => {
    return await scheduleService.addClassToSchedule(classID, horarioID);
}

export const removeClassToSchedule = async (classID, scheduleID) => {
    return await scheduleService.removeClassToSchedule(classID, scheduleID);
}



export default {
    getAllSchedules,
    getOneSchedule,
    createNewSchedule,
    updateSchedule,
    deleteSchedule,
    checkHorario,
    addClassToSchedule,
    removeClassToSchedule,
    updateAcadPeriodToSchedule
};
