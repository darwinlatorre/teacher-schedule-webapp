import { Schema, model } from 'mongoose';

const programSchema = new Schema({
    idAmbiente:{
        type: Number,
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
        type: Array,
        requier: true
    },
}, {
    timestamps: true
});

export default model('programs', programSchemaSchema);