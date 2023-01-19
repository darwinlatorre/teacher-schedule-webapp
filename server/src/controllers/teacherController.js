import teacherService from '../services/teacherService.js';
//import { createsNewTeacher } from '../helpers/createObjetHelper.js';

const getAllTeachers = async (req, res) => {
    const allTeachers = await teacherService.getAllTeachers();
    res.send({status: 'OK', data: allTeachers});
};

const getOneTeacher = async (req, res) => {
    const {
        params: { teacherID },
        } = req;
    const teacher = await teacherService.getOneTeacher(teacherID);
    res.send({status: 'OK', data: teacher });
};

const createNewTeacher = async (req, res) => {
    const { body } = req;

    if(body.tipoDocente !== "Tecnico" && 
        body.tipoDocente !== "Profesional" || 
        body.tipoContrato !== "Planta" && 
        body.tipoContrato !== "Contratista"){

        res.status(400).send({
            status: 'FAILED', 
            data: { 
                error: 'One of the keys this keys {tipoDocente, tipoContrato} are wrong'
            }
        });
        return;
    }
    const newTeacher = { 
        idDocente: body.idDocente, 
        nombres: body.nombres, 
        apellidos: body.apellidos,
        tipoIdentificacion: body.tipoIdentificacion, 
        user: body.user, 
        password: body.password, 
        tipoDocente: body.tipoDocente, 
        tipoContrato: body.tipoContrato, 
        area: body.area, 
        assgHorariaSemanal: 0, 
        horasMaxDia: 0, 
        estado: 'activo'
    }
    
    try {
        const createdTeacher = await teacherService.createNewTeacher(newTeacher);
        res.status(201).send({status: "OK", data: createdTeacher});
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

const updateTeacher = async (req, res) => {
     const { body , 
        params: { teacherID },
        query: { condition },
    } = req; 

    if(condition == 'Activo' || condition == 'Inactivo'){
        const updatedTeacherCondition = await teacherService.updatedTeacherCondition(teacherID, condition);
        res.send({status: 'OK', data: updatedTeacherCondition})
        return;
    }

    
    if(body.tipoDocente !== "Tecnico" && 
    body.tipoDocente !== "Profesional" || 
    body.tipoContrato !== "Planta" && 
    body.tipoContrato !== "Contratista"){

    res.status(400).send({
        status: 'FAILED', 
            data: { 
                error: 'One of the keys this keys {tipoDocente, tipoContrato} are wrong'
            }
        });
    return;
    }
    
    const newTeacher = { 
        idDocente: body.idDocente, 
        nombres: body.nombres, 
        apellidos: body.apellidos,
        tipoIdentificacion: body.tipoIdentificacion, 
        user: body.user, 
        password: body.password, 
        tipoDocente: body.tipoDocente, 
        tipoContrato: body.tipoContrato, 
        area: body.area, 
        assgHorariaSemanal: body.assgHorariaSemanal, 
        horasMaxDia: body.horasMaxDia, 
        estado: body.estado
    };

    try {
        const updatedTeacher = await teacherService.updateTeacher(teacherID, newTeacher);
        res.send({status: 'OK', data: updatedTeacher });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }

};

const deleteTeacher = (req, res) => {
    const {
        params: {teacherID},
    } = req;

    try {
        teacherService.deleteTeacher(teacherID);
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
    getAllTeachers,
    getOneTeacher,
    createNewTeacher,
    updateTeacher,
    deleteTeacher
};
