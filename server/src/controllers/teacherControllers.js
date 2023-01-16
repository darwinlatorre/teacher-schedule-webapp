
import teacherService from '../services/teacherServices.js'

const getAllTeachers = (req, res) => {
    const allTeachers = teacherService.getAllTeachers();
    res.send({status: 'OK', data: allTeachers});
};

const getOneTeacher = (req, res) => {
    const teacher = teacherService.getOneTeacher();
    res.send(`Get teacher ${req.params.teacherID}`);
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
        return;
    }

    const newTeacher = {
        idUser: body.idUser,
        name: body.name,
        lastName: body. lastName,
        typeIdentification: typeIdentification,
        user: body. user,
        password: body. password,
    };

    const createdTeacher = teacherService.createNewTeacher(newTeacher);
    res.status(201).send({status: "OK", data: createdTeacher})
    res.send(`Create teacher ${req.params.teacherID}`);
};

const updateTeacher = (req, res) => {
    const updatedTeacher = teacherService.updateTeacher();
    res.send(`Update teacher ${req.params.teacherID}`);
};

const deleteTeacher = (req, res) => {
    const deletedTeacher = teacherService.deleteTeacher();
    res.send(`Delete teacher ${req.params.teacherID}`);
};

export default {getAllTeachers,
    getOneTeacher,
    createNewTeacher,
    updateTeacher,
    deleteTeacher
};
