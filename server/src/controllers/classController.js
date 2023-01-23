import classService from '../services/classService.js';
import { checkHorario, addClassToSchedule, removeClassToSchedule } from './scheduleController.js';
import { addClassToTeacher, removeClassToTeacher } from './teacherController.js';
import { addClassToEnvironmente, removeClassToEnvironment } from './enviromentController.js';

const getAllClasses = async (req, res) => {
    const allClasss = await classService.getAllClasss();
    res.send({status: 'OK', data: allClasss});
};

const getOneClass = async (req, res) => {
    const {
        params: { classID },
        } = req;
    const class_ = await classService.getOneClass(classID);
    res.send({status: 'OK', data: class_ });
};

const createNewClass = async (req, res) => {
    const { body } = req;

    if ( !await checkHorario(body.idHorario) ){
        res.status(400).send({
            status: 'FAILED', 
                data: { 
                    error: 'El horario al que intenta ingresar esta incorrecto'
                }
            });
        return;
    }

    const newClass = { 
        idHorario: body.idHorario, 
        idCompetencia: body.idCompetencia, 
        idUsuario: body.idUsuario, 
        idAmbiente: body.idAmbiente, 
        horas: body.horas, 
        dia: body.dia, 
        horaInicio: body.horaInicio, 
        horaFinal: body.horaFinal, 
    }

    try {
        const createdClass = await classService.createNewClass(newClass);
        addClassToSchedule(createdClass._id, body.idHorario);
        addClassToTeacher(createdClass._id, body.idUsuario)
        addClassToEnvironmente(createdClass._id, body.idAmbiente)
        res.status(201).send({status: "OK", data: createdClass});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

const updateClass = async (req, res) => {
     const { body , 
        params: { classID },
    } = req; 

    if ( !await checkHorario(body.idHorario) ){
        res.status(400).send({
            status: 'FAILED', 
                data: { 
                    error: 'El horario al que intenta atualizar esta incorrecto'
                }
            });
        return;
    }

    const newClass = { 
        idHorario: body.idHorario, 
        idCompetencia: body.idCompetencia, 
        idUsuario: body.idUsuario, 
        idAmbiente: body.idAmbiente, 
        horas: body.horas, 
        dia: body.dia, 
        horaInicio: body.horaInicio, 
        horaFinal: body.horaFinal, 
    }

    try {
        const updatedClass = await classService.updateClass(classID, newClass);
        res.send({status: 'OK', data: updatedClass });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }
};

const deleteClass = async (req, res) => {
    const {
        params: {classID},
    } = req;

    const class_ = await classService.getOneClass(classID);

    try {
        classService.deleteClass(classID);
        removeClassToSchedule(classID, class_.idHorario);
        removeClassToTeacher(classID, class_.idUsuario); 
        removeClassToEnvironment(classID, class_.idAmbiente);
        res.status(204).send({ status: "OK" });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};


export default {
    getAllClasses,
    getOneClass,
    createNewClass,
    updateClass,
    deleteClass
};
