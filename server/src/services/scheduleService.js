import mongoose from 'mongoose';
import schedule from '../models/scheduleModel.js';

const getAllSchedules = async () => {
    const allSchedules = await schedule.find();
    return allSchedules;
};

const getOneSchedule = async (scheduleID) => {
    const foundSchedule = await schedule.findById(scheduleID);
    return foundSchedule;
};

const createNewSchedule = async (scheduleToInsert) => {
    const createdSchedule = new schedule (scheduleToInsert);
    await createdSchedule.save();
    return createdSchedule;
};

const updateSchedule = async (scheduleID, changes) => {
    const updatedSchedule = await schedule.findByIdAndUpdate(scheduleID, changes, {new: true});
    return updatedSchedule;
};

const updatedScheduleCondition = async (scheduleID, condition) => {
    const updatedScheduleCondition = await schedule.findByIdAndUpdate(scheduleID, { estado: condition }, {new: true});
    return updatedScheduleCondition;
}

const deleteSchedule = async (scheduleID) => {
    await schedule.findByIdAndDelete(scheduleID)
};

const updateAcadPeriodToSchedule = async (scheduleID, academicPeriodID) => {
    await schedule.findByIdAndUpdate(mongoose.Types.ObjectId(scheduleID), {idPeriodoAcademico: academicPeriodID})
}

const checkHorario = async (horarioID) => {
    try {
        await schedule.find({'_id': mongoose.Types.ObjectId(horarioID)});
        return true;
    } catch (error) {
        return false;
    }
}

const addClassToSchedule = async (classID, scheduleID) => {
    await schedule.updateOne({_id: scheduleID}, { $push: {listIdClasses: classID}})
}

const removeClassToSchedule = async (classID, scheduleID) => {
    await schedule.updateOne({'_id': mongoose.Types.ObjectId(scheduleID)}, { $pull: {listIdClasses: mongoose.Types.ObjectId(classID)}});
}

export default {getAllSchedules,
    getOneSchedule,
    createNewSchedule,
    updateSchedule,
    updatedScheduleCondition,
    deleteSchedule,
    updateAcadPeriodToSchedule,
    checkHorario,
    addClassToSchedule,
    removeClassToSchedule
};
