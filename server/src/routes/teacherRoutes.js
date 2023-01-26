import express from 'express';
import teacherController from '../controllers/teacherController.js';
import ROLES_LIST from '../config/roles_list.js'
import verifyRoles from '../middleware/verifyRoles.js'


const router = express.Router();

router.route('/')
    .get(teacherController.getAllTeachers)
    .post(verifyRoles(ROLES_LIST.coordinato), teacherController.createNewTeacher);
    
// Use ?condition = Activate||Inactivate if at the update route to modify the status atribute
router.route('/:teacherID') 
    .get(teacherController.getOneTeacher)
    .patch(verifyRoles(ROLES_LIST.coordinato), teacherController.updateTeacher)
    .delete(verifyRoles(ROLES_LIST.coordinato), teacherController.deleteTeacher);

export default router;