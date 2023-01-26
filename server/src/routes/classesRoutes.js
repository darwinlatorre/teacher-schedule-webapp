import express from 'express';
import classController from '../controllers/classController.js';
import ROLES_LIST from '../config/roles_list.js'
import verifyRoles from '../middleware/verifyRoles.js'

const router = express.Router();

router.route('')
    .get(verifyRoles(ROLES_LIST.user), classController.getAllClasses)
    .post(verifyRoles(ROLES_LIST.coordinato), classController.createNewClass);

router.route('/:classID')
    .get(verifyRoles(ROLES_LIST.user), classController.getOneClass)
    .patch(verifyRoles(ROLES_LIST.coordinato), classController.updateClass)
    .delete(verifyRoles(ROLES_LIST.coordinato), classController.deleteClass);

export default router;