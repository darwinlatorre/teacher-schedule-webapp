import teacher from '../models/teacherModel.js';

const getAllTeachers = async () => {
    const allTeachers = teacher.find();
    return allTeachers;
};

const getOneTeacher = async (teacherID) => {
    const foundTeacher = await teacher.findById(teacherID);
    return foundTeacher;
};

const createNewTeacher = async (teacherToInsert) => {
    const createdTeacher = new teacher (teacherToInsert);
    await createdTeacher.save();
    return createdTeacher;
};

const updateTeacher = async (teacherID, changes) => {
    const updatedTeacher = await teacher.findByIdAndUpdate(teacherID, changes, {new: true});
    return updatedTeacher;
};

const updatedTeacherCondition = async (teacherID, condition) => {
    const updatedTeacherCondition = await teacher.findByIdAndUpdate(teacherID, { estado: condition }, {new: true});
    return updatedTeacherCondition;
}

const deleteTeacher = async (teacherID) => {
    await teacher.findByIdAndDelete(teacherID)
};

export default {getAllTeachers,
    getOneTeacher,
    createNewTeacher,
    updateTeacher,
    updatedTeacherCondition,
    deleteTeacher
};
