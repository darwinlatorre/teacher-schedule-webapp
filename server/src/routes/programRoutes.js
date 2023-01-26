import express from 'express';
import programController from '../controllers/programController.js';
import ROLES_LIST from '../config/roles_list.js'
import verifyRoles from '../middleware/verifyRoles.js'

const router = express.Router();

router.route('/')
    .get(verifyRoles(ROLES_LIST.user), programController.getAllPrograms)
    .post(verifyRoles(ROLES_LIST.coordinato), programController.createNewProgram);

router.route('/:programID')
    .get(verifyRoles(ROLES_LIST.user), programController.getOneProgram)
    .patch(verifyRoles(ROLES_LIST.coordinato), programController.updateProgram)
    .delete(verifyRoles(ROLES_LIST.coordinato), programController.deleteProgram);

export default router;