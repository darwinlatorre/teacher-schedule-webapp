import express from 'express';
import v1TeacherRouter from './v1/routes/teacherRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

//Verificar para DB...
app.use(express.json);

app.use('/api/v1/teachers', v1TeacherRouter);

app.listen(PORT, ()=> {
    console.log(`🙏 Server listening on port ${PORT}`);
});