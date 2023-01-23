import class_ from '../models/classesModel.js';

const getAllClasss = async () => {
    const allClasss = await class_.find();
    return allClasss;
};

const getOneClass = async (classID) => {
    const foundClass = await class_.findById(classID);
    return foundClass;
};

const createNewClass = async (classToInsert) => {
    const createdClass = new class_ (classToInsert);
    await createdClass.save();
    return createdClass;
};

const updateClass = async (classID, changes) => {
    const updatedClass = await class_.findByIdAndUpdate(classID, changes, {new: true});
    return updatedClass;
};

const updatedClassCondition = async (classID, condition) => {
    const updatedClassCondition = await class_.findByIdAndUpdate(classID, { estado: condition }, {new: true});
    return updatedClassCondition;
}

const deleteClass = async (classID) => {
    await class_.findByIdAndDelete(classID)
};

export default {getAllClasss,
    getOneClass,
    createNewClass,
    updateClass,
    updatedClassCondition,
    deleteClass
};
