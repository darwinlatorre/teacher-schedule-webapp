import teacher from '../database/teacher.js';

import { v4 as uuidv4 } from 'uuid';

const getAllTeachers = () => {
    const allTeachers = teacher.getAllTeachers();
    return allTeachers;
};

const getOneTeacher = () => {
    return;
};

const createNewTeacher = (newTeacher) => {
    const teacherToInsert = {
        ...newTeacher,
        idUser: uuidv4(),
        createAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    }
    const createdTeacher = teacher.createNewTeacher(teacherToInsert);
    return createdTeacher;
};

const updateTeacher = () => {
    return;
};

const deleteTeacher = () => {
    return;
};

export default {getAllTeachers,
    getOneTeacher,
    createNewTeacher,
    updateTeacher,
    deleteTeacher
};
