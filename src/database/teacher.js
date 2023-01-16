//TODO: DATABASE CONEXION


const getAllTeachers = () => {
    return DB.teachers;
};

const createNewTeacher = (newTeacher) => {
    const isAlreadyAdded = DB.teachers.findIndex(
        (teachers) => teachers.name === newTeacher.name) > -1;

    if(isAlreadyAdded) {
        return;
    }

    DB.teachers.push(newTeacher);

    //TODO: CORREGIR CUANDO SE CREE LA BASE DE DATOS
    //saveToDatabase(DB);
    return newTeacher;
}

export default {
    getAllTeachers,
    createNewTeacher
};