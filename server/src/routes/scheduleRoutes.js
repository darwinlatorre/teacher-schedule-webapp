import express from 'express';
import scheduleController from '../controllers/scheduleController.js';
import ROLES_LIST from '../config/roles_list.js'
import verifyRoles from '../middleware/verifyRoles.js'

const router = express.Router();

router.route('')
    .get(verifyRoles(ROLES_LIST.user), scheduleController.getAllSchedules)

router.route('/:scheduleID')
    .get(verifyRoles(ROLES_LIST.user), scheduleController.getOneSchedule)
    .patch(verifyRoles(ROLES_LIST.coordinato), scheduleController.updateSchedule)
    .delete(verifyRoles(ROLES_LIST.coordinato), scheduleController.deleteSchedule);

export default router;