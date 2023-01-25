import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import TeacherRouter from './routes/teacherRoutes.js';
import EnviromentRoute from './routes/enviromentRoutes.js';
import AcademicPeriodRoutes from './routes/academicPeriodRoutes.js';
import ProgramRoutes from './routes/programRoutes.js';
import ScheduleRoutes from './routes/scheduleRoutes.js';
import CompetenciaRoutes from './routes/competenciaRoutes.js';
import ClassesRoutes from './routes/classesRoute.js';
import CoordinatorRoutes from './routes/coordinatorRoutes.js';
import AuthController from './routes/authRoute.js';

// // Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
//Corps setting
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
	  'UPDATE',
    'DELETE'
  ],

  allowedHeaders: 'Content-Type',
  optionsSuccessStatus: 200
};


// Middlewares
// To se some requiest made to the server
app.use(morgan('dev'))
//Convierte los datos de un formalario en JSON - useless by now
app.use(express.urlencoded({extended: false}));
// Built-in for json
app.use(express.json())
// CORS: Cross Origin Resource Sharing
app.use(cors(corsOpts));
//Error habler
app.use(function(err, req, res, nex) {
  console.error(err.stack)
  res.status(500).send(err.message);
})


// Global variables

// Routes
app.use('/api/teachers', TeacherRouter);
app.use('/api/enviroments', EnviromentRoute);
app.use('/api/academicPeriods', AcademicPeriodRoutes);
app.use('/api/programs', ProgramRoutes);
app.use('/api/schedule', ScheduleRoutes);
app.use('/api/competencias', CompetenciaRoutes);
app.use('/api/classes', ClassesRoutes);
app.use('/api/coordinator', CoordinatorRoutes);
app.use('/api/auth', AuthController);

// Static files


//Convierte esta carpeta en publica
app.use(express.static('./public'));



export default app;