import express from 'express';
import enviromentController from '../controllers/enviromentController.js';
import ROLES_LIST from '../config/roles_list.js'
import verifyRoles from '../middleware/verifyRoles.js'

const router = express.Router();

router.route('/')
    .get(verifyRoles(ROLES_LIST.user), enviromentController.getAllEnviroments)
    .post(verifyRoles(ROLES_LIST.coordinato), enviromentController.createNewEnviroment);
    
// Use ?condition = Activate||Inactivate if at the update route to modify the status atribute
router.route('/:enviromentID')
    .get(verifyRoles(ROLES_LIST.user), enviromentController.getOneEnviroment)
    .patch(verifyRoles(ROLES_LIST.coordinato), enviromentController.updateEnviroment)
    .delete(verifyRoles(ROLES_LIST.coordinato), enviromentController.deleteEnviroment);

export default router;