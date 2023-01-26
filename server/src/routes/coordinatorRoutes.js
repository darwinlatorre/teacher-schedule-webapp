import express from 'express';
import coordinatorController from '../controllers/coordinatorController.js';
import ROLES_LIST from '../config/roles_list.js'
import verifyRoles from '../middleware/verifyRoles.js'

const router = express.Router();

router.route('/')
    .get(verifyRoles(ROLES_LIST.admin), coordinatorController.getAllCoordinators);
router.route('/register')
    .post(verifyRoles(ROLES_LIST.admin), coordinatorController.createNewCoordinator);
    
router.route('/:coordinatorID') 
    .get(verifyRoles(ROLES_LIST.admin), coordinatorController.getOneCoordinator)
    .patch(verifyRoles(ROLES_LIST.admin), coordinatorController.updateCoordinator)
    .delete(verifyRoles(ROLES_LIST.admin), coordinatorController.deleteCoordinator);

export default router;