//TODO: DATABASE CONEXION

const getAllPeriods = () => {
    return DB.Periods;
};

const createNewPeriod = (newPeriod) => {
    const isAlreadyAdded = DB.Period.findIndex(
        (Periods) => Periods.name === newPeriod.name) > -1;

    if(isAlreadyAdded) {
        return;
    }

    DB.Periods.push(newPeriod);

    //TODO: CORREGIR CUANDO SE CREE LA BASE DE DATOS
    //saveToDatabase(DB);
    return newPeriod;
}

export default {
    getAllPeriods,
    createNewPeriod
};