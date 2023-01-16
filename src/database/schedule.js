//TODO: DATABASE CONEXION

const getAllSchedules = () => {
    return DB.schedules;
};

const createNewSchedule = (newSchedule) => {
    const isAlreadyAdded = DB.Schedule.findIndex(
        (Schedules) => Schedules.name === newSchedule.name) > -1;

    if(isAlreadyAdded) {
        return;
    }

    DB.Schedules.push(newSchedule);

    //TODO: CORREGIR CUANDO SE CREE LA BASE DE DATOS
    //saveToDatabase(DB);
    return newSchedule;
}

export default {
    getAllSchedules,
    createNewSchedule
};