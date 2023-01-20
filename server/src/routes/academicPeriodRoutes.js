import express from 'express';
import academicPeriodController from '../controllers/academicPeriodController.js';


const router = express.Router();

router.route('/')
    .get(academicPeriodController.getAllAcademicPeriods)
    .post(academicPeriodController.createNewAcademicPeriod);

router.route('/:academicPeriodID')
    .get(academicPeriodController.getOneAcademicPeriod)
    .patch(academicPeriodController.updateAcademicPeriod)
    .delete(academicPeriodController.deleteAcademicPeriod);

export default router;