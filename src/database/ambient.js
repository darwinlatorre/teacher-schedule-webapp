//TODO: DATABASE CONEXION

const getAllAmbients = () => {
    return DB.Ambients;
};

const createNewAmbient = (newAmbient) => {
    const isAlreadyAdded = DB.Ambient.findIndex(
        (Ambients) => Ambients.name === newAmbient.name) > -1;

    if(isAlreadyAdded) {
        return;
    }

    DB.Ambients.push(newAmbient);

    //TODO: CORREGIR CUANDO SE CREE LA BASE DE DATOS
    //saveToDatabase(DB);
    return newAmbient;
}

export default {
    getAllAmbients,
    createNewAmbient
};