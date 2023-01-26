import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import verifyJWT from './middleware/verifyJWT.js';
import credentials from './middleware/credentials.js';

import corsOptions from './config/corsOptions.js'

import TeacherRouter from './routes/teacherRoutes.js';
import EnviromentRoute from './routes/enviromentRoutes.js';
import AcademicPeriodRoutes from './routes/academicPeriodRoutes.js';
import ProgramRoutes from './routes/programRoutes.js';
import ScheduleRoutes from './routes/scheduleRoutes.js';
import CompetenciaRoutes from './routes/competenciaRoutes.js';
import ClassesRoutes from './routes/classesRoutes.js';
import CoordinatorRoutes from './routes/coordinatorRoutes.js';
import AuthRoutes from './routes/authRoutes.js';
import RefreshTokenRoutes from './routes/refreshRoutes.js';
import LogOutRoutes from './routes/logoutRoutes.js'

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
app.use(express.json());

//Handle options credential check - before CORS!
// and fetch cookies credential requierment
app.use(credentials)
// CORS: Cross Origin Resource Sharing
app.use(cors(corsOptions));

//Error habler
app.use(function(err, req, res, nex) {
  console.error(err.stack)
  res.status(500).send(err.message);
})
//cookies
app.use(cookieParser());

// Global variables

// Routes
app.use('/auth', AuthRoutes);
app.use('/refresh', RefreshTokenRoutes);
app.use('/logout', LogOutRoutes)
app.use('/api/coordinator', CoordinatorRoutes);
app.use('/api/teachers', TeacherRouter);

app.use(verifyJWT);
app.use('/api/enviroments', EnviromentRoute);
app.use('/api/academicPeriods', AcademicPeriodRoutes);
app.use('/api/programs', ProgramRoutes);
app.use('/api/schedule', ScheduleRoutes);
app.use('/api/competencias', CompetenciaRoutes);
app.use('/api/classes', ClassesRoutes);

app.all('*', (req, res) => {
    res.status(404);
    if(req.accepts('html')){
        res.json({ error: "404 Not Found" });
    } else if(req.accepts('json')){
        res.json({ error: "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

// Static files


//Convierte esta carpeta en publica
app.use(express.static('./public'));



export default app;