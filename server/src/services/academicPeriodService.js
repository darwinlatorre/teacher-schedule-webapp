import academicPeriod from '../models/academicPeriodModel.js';

const getAllAcademicPeriods = async () => {
    const allAcademicPeriods = await academicPeriod.find();
    return allAcademicPeriods;
};

const getOneAcademicPeriod = async (academicPeriodID) => {
    const foundAcademicPeriod = await academicPeriod.findById(academicPeriodID);
    return foundAcademicPeriod;
};

const createNewAcademicPeriod = async (academicPeriodToInsert) => {
    const createdAcademicPeriod = new academicPeriod (academicPeriodToInsert);
    await createdAcademicPeriod.save();
    return createdAcademicPeriod;
};

const updateAcademicPeriod = async (academicPeriodID, changes) => {
    const updatedAcademicPeriod = await academicPeriod.findByIdAndUpdate(academicPeriodID, changes, {new: true});
    return updatedAcademicPeriod;
};

const updatedAcademicPeriodCondition = async (academicPeriodID, condition) => {
    const updatedAcademicPeriodCondition = await academicPeriod.findByIdAndUpdate(academicPeriodID, { estado: condition }, {new: true});
    return updatedAcademicPeriodCondition;
};

const deleteAcademicPeriod = async (academicPeriodID) => {
    await academicPeriod.findByIdAndDelete(academicPeriodID)
};

const getNumberOfDocuments = async () => {
    const aCount = await academicPeriod.countDocuments({}).then(count => {
        return count;
    });
    return aCount
};

export default {getAllAcademicPeriods,
    getOneAcademicPeriod,
    createNewAcademicPeriod,
    updateAcademicPeriod,
    updatedAcademicPeriodCondition,
    deleteAcademicPeriod,
    getNumberOfDocuments
};
