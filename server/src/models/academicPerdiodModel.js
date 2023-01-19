import { Schema, model } from 'mongoose';

const academicPeriodSchema = new Schema({
    
    //TODO: No se que tan necesario sea.
    //EVALUAR
    idPeriodoAcademico:{
        type: String,
        require: true
    },

    nombre:{
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
    estado:{
        type: String,
        require: true
    },
    
    //TODO: DEPENDE del modelo horario
    idHorario:{
        type: string,
        requiere: true
    }

}, {
    timestamps: true
});

export default model('AcademicPreiods', academicPeriodSchema);