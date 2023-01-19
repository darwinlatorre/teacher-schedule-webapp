import express from 'express';
import competenciaController from '../controllers/competenciaController.js';


const router = express.Router();

router.route('/')
    .get(competenciaController.getAllCompetencias)
    .post(competenciaController.createNewCompetencia);

router.route('/:competenciaID')
    .get(competenciaController.getOneCompetencia)
    .patch(competenciaController.updateCompetencia)
    .delete(competenciaController.deleteCompetencia);

export default router;