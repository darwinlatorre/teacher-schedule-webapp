import express from 'express';
import logoutController from '../controllers/logoutController.js';


const router = express.Router();

router.route('/')
    .get(logoutController.handleLogOut);

export default router;