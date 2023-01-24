import express from 'express';
import coordinatorController from '../controllers/coordinatorController.js';


const router = express.Router();

router.route('/')
    .get(coordinatorController.getAllCoordinators);
router.route('/register')
    .post(coordinatorController.createNewCoordinator);
    
router.route('/:coordinatorID') 
    .get(coordinatorController.getOneCoordinator)
    .patch(coordinatorController.updateCoordinator)
    .delete(coordinatorController.deleteCoordinator);

export default router;