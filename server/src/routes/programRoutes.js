import express from 'express';
import programController from '../controllers/programController.js';


const router = express.Router();

router.route('/')
    .get(programController.getAllPrograms)
    .post(programController.createNewProgram);

// Use ?condition = Activate||Inactivate if at the update route to modify the status atribute
router.route('/:programID')
    .get(programController.getOneProgram)
    .patch(programController.updateProgram)
    .delete(programController.deleteProgram);

export default router;