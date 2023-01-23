import express from 'express';
import authController from '../controllers/authController.js';


const router = express.Router();

router.route('/')
    .post(authController.handleLogin);

export default router;