//Carga las variables de entorno para obtener una seguridad evitando que el codigo sensible sea publicors
import * as dotenv from 'dotenv'
dotenv.config()

import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URL;


mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is conected 📝'))
    .catch(err => console.log(err));

