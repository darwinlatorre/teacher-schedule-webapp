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

const createNewSchedule = async (req, res) => {
    const { body } = req;

    const newSchedule = { 
        idHorario: body.idHorario, 
        idCompetencia: "", 
        idPeriodoAcademico: "", 
        idAmbiente: "", 
        idUsuario: "", 
        horas: body.horas, 
        dia: body.dia, 
        horaInicio: body.horaInicio, 
        horaFinal: body.horaFinal, 
    }
    
    try {
        const createdSchedule = await scheduleService.createNewSchedule(newSchedule);
        res.status(201).send({status: "OK", data: createdSchedule});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

const updateSchedule = async (req, res) => {
     const { body , 
        params: { scheduleID },
    } = req; 

    const newSchedule = { 
        idHorario: body.idHorario, 
        idCompetencia: body.idCompetencia, 
        idPeriodoAcademico: body.idPeriodoAcademico, 
        idAmbiente: body.idAmbiente, 
        idUsuario: body.idUsuario, 
        horas: body.horas, 
        dia: body.dia, 
        horaInicio: body.horaInicio, 
        horaFinal: body.horaFinal, 
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


export default {
    getAllSchedules,
    getOneSchedule,
    createNewSchedule,
    updateSchedule,
    deleteSchedule
};
