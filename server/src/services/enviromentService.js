import enviroment from '../models/environmentModel.js'

const getAllEnviroments = async () => {
    const allEnviroment = await enviroment.find();
    return allEnviroment;
};
const getOneEnviroment = async (enviromentID) => {
    const foundEnviroment = await enviroment.findById(enviromentID)
    return foundEnviroment;
};
const createNewEnviroment = async (enviromentToInsert) => {
    const createdEnviroment = new enviroment (enviromentToInsert);
    await createdEnviroment.save();
    return createdEnviroment;
};
const updateEnviroment = async (enviromentID, changes) => {
    const updatedEnviroment = await enviroment.findByIdAndUpdate(enviromentID, changes, {new: true});
    return updatedEnviroment;
};
const updatedEnviromentCondition = async (enviromentID, condition) => {
    const updatedEnviromentCondition = await enviroment.findByIdAndUpdate(enviromentID, { estado: condition }, {new: true});
    return updatedEnviromentCondition;
};
const deleteEnviroment = async (enviromentID) => {
    await enviroment.findByIdAndDelete(enviromentID)
};

export default {    
    getAllEnviroments,
    getOneEnviroment,
    createNewEnviroment,
    updateEnviroment,
    updatedEnviromentCondition,
    deleteEnviroment }