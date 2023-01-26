import express from 'express';
import competenciaController from '../controllers/competenciaController.js';
import ROLES_LIST from '../config/roles_list.js'
import verifyRoles from '../middleware/verifyRoles.js'

const router = express.Router();

router.route('/')
    .get(verifyRoles(ROLES_LIST.user), competenciaController.getAllCompetencias)
    .post(verifyRoles(ROLES_LIST.coordinato), competenciaController.createNewCompetencia);

router.route('/:competenciaID')
    .get(verifyRoles(ROLES_LIST.user), competenciaController.getOneCompetencia)
    .patch(verifyRoles(ROLES_LIST.coordinato), competenciaController.updateCompetencia)
    .delete(verifyRoles(ROLES_LIST.coordinato), competenciaController.deleteCompetencia);

export default router;