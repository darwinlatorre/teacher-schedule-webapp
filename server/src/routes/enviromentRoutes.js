import express from 'express';
import enviromentController from '../controllers/enviromentController.js';


const router = express.Router();

router.route('/')
    .get(enviromentController.getAllEnviroments)
    .post(enviromentController.createNewEnviroment);
    
// Use ?condition = Activate||Inactivate if at the update route to modify the status atribute
router.route('/:enviromentID')
    .get(enviromentController.getOneEnviroment)
    .patch(enviromentController.updateEnviroment)
    .delete(enviromentController.deleteEnviroment);

export default router;