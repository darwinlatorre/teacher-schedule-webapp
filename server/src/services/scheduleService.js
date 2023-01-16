import Schedule from '../database/schedule.js';

import { v4 as uuidv4 } from 'uuid';

const getAllSchedules = () => {
    const allSchedules = Schedule.getAllSchedules();
    return allSchedules;
};

const getOneSchedule = () => {
    return;
};

const createNewSchedule = (newSchedule) => {
    const scheduleToInsert = {
        ...newSchedule,
        idUser: uuidv4(),
        createAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    }
    const createdSchedule = Schedule.createNewSchedule(scheduleToInsert);
    return createdSchedule;
};

const updateSchedule = () => {
    return;
};

const deleteSchedule = () => {
    return;
};

export default {getAllSchedules,
    getOneSchedule,
    createNewSchedule,
    updateSchedule,
    deleteSchedule
};