
import teacherService from '../services/teacherServices.js'

const getAllTeachers = (req, res) => {
    const allTeachers = teacherService.getAllTeachers();
    res.send({status: 'OK', data: allTeachers});
};

const getOneTeacher = (req, res) => {
    const {
        params: {teacherID},
    } = req;

    if(!teacherID){
        return;
    }
    const teacher = teacherService.getOneTeacher(teacherID);
    res.send({status: 'OK', data: teacher });
};

const createNewTeacher = (req, res) => {
    const { body } = req;

    if(
        !body.idUser||
        !body.name ||
        !body. lastName ||
        !body. typeIdentification ||
        !body. user ||
        !body. password
    ) {
        res.status(400).send({
            status: 'FAILED', 
            data: { 
                error: 'One of the keys are missing or is empty in request body',
            },
        });
    }

    const newTeacher = {
        idUser: body.idUser,
        name: body.name,
        lastName: body. lastName,
        typeIdentification: typeIdentification,
        user: body. user,
        password: body. password,
    };

    try {
        const createdTeacher = teacherService.createNewTeacher(newTeacher);
        res.status(201).send({status: "OK", data: createdTeacher})
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: {
                error: error?.message || error}
            });
    }
};

const updateTeacher = (req, res) => {
    const {body,
    params: { teacherID },
    } = req;

    if(!teacherID){
        res.
            status(400)
            .send({
                status: 'FAILED',
                data: { error: "Parameter ':teacherID' can no be empty" },
            });
    }

    try {
        const updatedTeacher = teacherService.updateTeacher(teacherID, body);
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

    if(!teacherID){
        res.status(400).send({
            status: 'FAILED', 
            data: { 
                error: 'The teacher ID is incorrect',
            },
        });
    }

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

export default {getAllTeachers,
    getOneTeacher,
    createNewTeacher,
    updateTeacher,
    deleteTeacher
};
