import express from 'express';
import morgan from 'morgan';

import TeacherRouter from './routes/teacherRoutes.js';
import EnviromentRoute from './routes/enviromentRoutes.js';
import AcademicPeriodRoutes from './routes/academicPeriodRoutes.js';
import ProgramRoutes from './routes/programRoutes.js';
import ScheduleRoutes from './routes/scheduleRoutes.js';
import CompetenciaRoutes from './routes/competenciaRoutes.js';

// // Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
// To se some requiest made to the server
app.use(morgan('dev'))
//Convierte los datos de un formalario en JSON - useless by now
app.use(express.urlencoded({extended: false}));
// Built-in for json
app.use(express.json())



// Global variables

// Routes
app.use('/api/teachers', TeacherRouter);
app.use('/api/enviroments', EnviromentRoute);
app.use('/api/academicPeriods', AcademicPeriodRoutes);
app.use('/api/programs', ProgramRoutes);
app.use('/api/schedule', ScheduleRoutes);
app.use('/api/competencias', CompetenciaRoutes);

// Static files


//Convierte esta carpeta en publica
app.use(express.static('./public'));

export default app;