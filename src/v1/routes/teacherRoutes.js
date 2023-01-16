import express from 'express';
import teacherController from '../../controllers/teacherControllers.js';


const router = express.Router();

router
    .get("/", teacherController.getAllTeachers)
    .get("/:teacherID", teacherController.getOneTeacher)
    .post("/", teacherController.createNewTeacher)
    .patch("/:teacherID", teacherController.updateTeacher)
    .delete("/:teacherID", teacherController.deleteTeacher);

export default router;