import express from 'express';
import classController from '../controllers/classController.js';


const router = express.Router();

router.route('')
    .get(classController.getAllClasses)
    .post(classController.createNewClass);

router.route('/:classID')
    .get(classController.getOneClass)
    .patch(classController.updateClass)
    .delete(classController.deleteClass);

export default router;