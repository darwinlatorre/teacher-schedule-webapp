import { Schema, model } from 'mongoose';

const enviromentSchema = new Schema({

    //TODO: Falta hacer el patron en donde se el id sea (AA001)
    idAmbiente:{
        type: String,
        require: true
    },
    nombre:{
        type: String,
        require: true
    },
    tipo:{
        type: String,
        require: true
    },
    capacidad:{
        type: Number,
        requier: true
    },
    ubicacion:{
        type: String,
        requier: true
    },
    estado:{
        type: String,
        requier: true
    },
    
    //TODO: DEPENDE de la clase schedule
    horario:{
        type: String,
        //requier: true
    },
}, {
    timestamps: true
});

export default model('programs', enviromentSchema);