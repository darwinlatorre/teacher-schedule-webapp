import program from '../models/programModel.js'

const getAllPrograms = async () => {
    const allProgram = await program.find();
    return allProgram;
};
const getOneProgram = async (programID) => {
    const foundProgram = await program.findById(programID)
    return foundProgram;
};
const createNewProgram = async (programToInsert) => {
    const createdProgram = new program (programToInsert);
    await createdProgram.save();
    return createdProgram;
};
const updateProgram = async (programID, changes) => {
    const updatedProgram = await program.findByIdAndUpdate(programID, changes, {new: true});
    return updatedProgram;
};

const deleteProgram = async (programID) => {
    await program.findByIdAndDelete(programID)
};

export default {
    getAllPrograms,
    getOneProgram,
    createNewProgram,
    updateProgram,
    deleteProgram
};