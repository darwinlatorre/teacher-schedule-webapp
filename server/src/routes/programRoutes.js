import express from 'express';
import programController from '../controllers/programController.js';


const router = express.Router();

router.route('/')
    .get(programController.getAllPrograms)
    .post(programController.createNewProgram);

router.route('/:programID')
    .get(programController.getOneProgram)
    .patch(programController.updateProgram)
    .delete(programController.deleteProgram);

export default router;