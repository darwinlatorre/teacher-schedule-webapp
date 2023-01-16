import Period from '../database/period.js';

import { v4 as uuidv4 } from 'uuid';

const getAllPeriods = () => {
    const allPeriods = Period.getAllPeriods();
    return allPeriods;
};

const getOnePeriod = () => {
    return;
};

const createNewPeriod = (newPeriod) => {
    const periodToInsert = {
        ...newPeriod,
        idUser: uuidv4(),
        createAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    }
    const createdPeriod = Period.createNewPeriod(periodToInsert);
    return createdPeriod;
};

const updatePeriod = () => {
    return;
};

const deletePeriod = () => {
    return;
};

export default {getAllPeriods,
    getOnePeriod,
    createNewPeriod,
    updatePeriod,
    deletePeriod
};