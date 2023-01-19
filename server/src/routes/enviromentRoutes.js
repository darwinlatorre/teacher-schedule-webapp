import express from 'express';
/* import enviromentController from '../controllers/enviromentController.js'; */


const router = express.Router();

/* router.route('/')
    .get(enviromentController.getAllEnviroments)
    .post(enviromentController.createNewEnviroment);

router.route('/:enviromentID')
    .get(enviromentController.getOneEnviroment)
    .patch(enviromentController.updateEnviroment)
    .delete(enviromentController.inactivateEnviroment); */

export default router;