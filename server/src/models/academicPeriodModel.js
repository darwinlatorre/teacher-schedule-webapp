import { Schema, model } from 'mongoose';

const academicPeriodSchema = new Schema({
    
    idPeriodoAcademico:{
        type: String,
        require: true
    },

    nombre:{
        type: String,
        require: true
    },
    duracion:{
        type: String,
        require: true
    },
    fechaInicio:{
        type: Date,
        require: true
    },
    fechaFinal:{
        type: Date,
        require: true
    },

    //TODO: DEPENDE del modelo horario
    idHorario:{
        type: String,
        requiere: true
    },

    estado:{
        type: String,
        require: true
    },
    
}, {
    timestamps: true
});

export default model('academicPeriods', academicPeriodSchema);