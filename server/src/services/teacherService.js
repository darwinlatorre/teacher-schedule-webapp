import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import teacher from '../models/teacherModel.js';

const getAllTeachers = async () => {
    const allTeachers = await teacher.find();
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

const addClassToTeacher = async (classID, teacherID) => {
    await teacher.updateOne({_id: teacherID}, { $push: {listIdClasses: classID}})
}

const removeClassToTeacher = async (classID, teacherID) => {
    await teacher.updateOne({'_id': mongoose.Types.ObjectId(teacherID)}, { $pull: {listIdClasses: mongoose.Types.ObjectId(classID)}});
}

const encrypPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const matchPassword = async function(incomePassword, password) {
    return await bcrypt.compare(incomePassword, password);
}

const checkUser = async (userName) => {
    return await teacher.findOne({'user': userName});
}

const checkToken = async (token) => {
    return await teacher.findOne({'refreshToken': token})
}

const updateTeacherToken = async (teacher) => {
    return await teacher.findById(teacher._id, {token: teacher.token})
}

export default {getAllTeachers,
    getOneTeacher,
    createNewTeacher,
    updateTeacher,
    updatedTeacherCondition,
    deleteTeacher,
    addClassToTeacher,
    removeClassToTeacher,
    encrypPassword,
    matchPassword,
    checkUser,
    checkToken,
    updateTeacherToken
};
