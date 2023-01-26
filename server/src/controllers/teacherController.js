import teacherService from '../services/teacherService.js';

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

    const duplicate = await teacherService.checkUser(body.user);
    if(duplicate) return res.sendStatus(409); //Conflict

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
        listIdClasses: [],
        assgHorariaSemanal: 0, 
        horasMaxDia: 0, 
        estado: 'activo'
    }

    console.log(newTeacher);
    
    try {
        newTeacher.password = await teacherService.encrypPassword(body.password);
        const createdTeacher = await teacherService.createNewTeacher(newTeacher);
        res.status(201).send({status: "OK", data: 'new teacher '+ createdTeacher.nombres + ' created!'});
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
        estado: body.estado
    };

    try {
        newTeacher.password = await teacherService.encrypPassword(body.password);
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

export const addClassToTeacher = async (classID, teacherID) => {
    return await teacherService.addClassToTeacher(classID, teacherID);
}

export const removeClassToTeacher = async (classID, teacherID) => {
    return await teacherService.removeClassToTeacher(classID, teacherID);
}

export const checkTeacherToken = async (token) => {
    return await teacherService.checkToken(token);
}

export const updateTeacherToken = async (teacher) => {
    return await teacherService.updateTeacherToken(teacher);
}

export default {
    getAllTeachers,
    getOneTeacher,
    createNewTeacher,
    updateTeacher,
    deleteTeacher
};
