import express from 'express';
import academicPeriodController from '../controllers/academicPeriodController.js';
import ROLES_LIST from '../config/roles_list.js'
import verifyRoles from '../middleware/verifyRoles.js'

const router = express.Router();

router.route('/')
    .get(verifyRoles(ROLES_LIST.user), academicPeriodController.getAllAcademicPeriods)
    .post(verifyRoles(ROLES_LIST.coordinato), academicPeriodController.createNewAcademicPeriod);

router.route('/:academicPeriodID')
    .get(verifyRoles(ROLES_LIST.user), academicPeriodController.getOneAcademicPeriod)
    .patch(verifyRoles(ROLES_LIST.coordinato), academicPeriodController.updateAcademicPeriod)
    .delete(verifyRoles(ROLES_LIST.coordinato), academicPeriodController.deleteAcademicPeriod);

export default router;