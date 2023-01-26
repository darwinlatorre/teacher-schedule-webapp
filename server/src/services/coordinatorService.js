import mongoose from 'mongoose';
import coordinator from '../models/coordinatorModel.js';
import bcrypt from 'bcryptjs';

const getAllCoordinators = async () => {
    const allCoordinators = await coordinator.find();
    return allCoordinators;
};

const getOneCoordinatorByID = async (coordinatorID) => {
    const foundCoordinator = await coordinator.findById(coordinatorID);
    return foundCoordinator;
};

const createNewCoordinator = async (coordinatorToInsert) => {
    const createdCoordinator = new coordinator (coordinatorToInsert);
    await createdCoordinator.save();
    return createdCoordinator;
};

const updateCoordinator = async (coordinatorID, changes) => {
    const updatedCoordinator = await coordinator.findByIdAndUpdate(coordinatorID, changes, {new: true});
    return updatedCoordinator;
};

const updatedCoordinatorCondition = async (coordinatorID, condition) => {
    const updatedCoordinatorCondition = await coordinator.findByIdAndUpdate(coordinatorID, { estado: condition }, {new: true});
    return updatedCoordinatorCondition;
}

const deleteCoordinator = async (coordinatorID) => {
    await coordinator.findByIdAndDelete(coordinatorID)
};

const encrypPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const checkUser = async (userName) => {
    return await coordinator.findOne({'user': userName});
}


export default {getAllCoordinators,
    getOneCoordinatorByID,
    createNewCoordinator,
    updateCoordinator,
    updatedCoordinatorCondition,
    deleteCoordinator,
    encrypPassword,
    checkUser,
};
