import Ambient from '../database/ambient.js';

import { v4 as uuidv4 } from 'uuid';

const getAllAmbients = () => {
    const allAmbients = Ambient.getAllAmbients();
    return allAmbients;
};

const getOneAmbient = () => {
    return;
};

const createNewAmbient = (newAmbient) => {
    const ambientToInsert = {
        ...newAmbient,
        idUser: uuidv4(),
        createAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    }
    const createdAmbient = Ambient.createNewAmbient(ambientToInsert);
    return createdAmbient;
};

const updateAmbient = () => {
    return;
};

const deleteAmbient = () => {
    return;
};

export default {getAllAmbients,
    getOneAmbient,
    createNewAmbient,
    updateAmbient,
    deleteAmbient
};