import express from 'express';
import teacherController from '../controllers/teacherController.js';


const router = express.Router();

router.route('/')
    .get(teacherController.getAllTeachers)
    .post(teacherController.createNewTeacher);

router.route('/:teacherID')
    .get(teacherController.getOneTeacher)
    .patch(teacherController.updateTeacher)
    .delete(teacherController.deleteTeacher);

export default router;