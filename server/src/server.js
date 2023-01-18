import express from 'express';
import v1TeacherRouter from './routes/teacherRoutes.js';

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
//Convierte los datos de un formalario en JSON - useless by now
app.use(express.urlencoded({extended: false}));
// Built-in for json
app.use(express.json())


// Global variables

// Routes
app.use('/api/teachers', v1TeacherRouter);

// Static files


//Convierte esta carpeta en publica
app.use(express.static('./public'));

export default app;