
const getAllTeachers = () => {
    return DB.teachers;
};

const getOneTeacher = (teacherID) => {
    const teacher = DB.teachers.find((teacher) => teacher.identificacionUsuario === teacherID)
    if (!teacher) {
        return;
    }
    return teacher;
}

const createNewTeacher = (newTeacher) => {
    const isAlreadyAdded = DB.teachers.findIndex(
        (teachers) => teachers.name === newTeacher.name) > -1;

    if(isAlreadyAdded) {
        throw {
            status: 400,
            message: `Teacher with the name '${newTeacher}' already exist`
        };
    }

    try {
        DB.teachers.push(newTeacher);
        //TODO: CORREGIR CUANDO SE CREE LA BASE DE DATOS
        //saveToDatabase(DB);
        return newTeacher;
    } catch (error) {
        throw{
            status: 500,
            message: error?.message || error
        };
    }
}

const updateOneTeacher = (teacherID, changes) => {
    const indexForUpdate = DB.teachers.findIndex(
        (teacher) => (teacher.identificacionUsuario === teacherID)
    );
    
    if(indexForUpdate === -1){
        return;
    }

    const updatedTeacher = {
        ...DB.teachers[indexForUpdate],
        ...changes,
        updatedAt: new Date.toLocaleString("en-US", { timezone: "UTC" }),
    }

    DB.teachers[indexForUpdate] = updatedTeacher;
    //DATABASE STUFF

    return updatedTeacher;
}

const deleteOneTeacher = () => {
    const indexForDeleted = DB.teachers.findIndex(
        (teacher) => (teacher.identificacionUsuario === teacherID)
    );

    if(indexForDeleted === -1){
        return;
    }

    DB.teachers.splice(indexForDeleted, 1);
    //database stuff
}

export default {
    getAllTeachers,
    getOneTeacher,
    createNewTeacher,
    updateOneTeacher,
    deleteOneTeacher
};