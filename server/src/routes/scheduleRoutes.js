import express from 'express';
import scheduleController from '../controllers/scheduleController.js';


const router = express.Router();

router.route('')
    .get(scheduleController.getAllSchedules)

router.route('/:scheduleID')
    .get(scheduleController.getOneSchedule)
    .patch(scheduleController.updateSchedule)
    .delete(scheduleController.deleteSchedule);

export default router;