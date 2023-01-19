import { Schema, model } from "mongoose";

const scheduleSchema = new Schema({
    idHorario:{
        type: Number,
        require: true
    },

    //TODO: DEPENDE del modelo de competencia
    idCompetencia:{
        type: String,
        require: true
    },

    //TODO: DEPENDE del modelo de periodo academico
    idPeriodoAcademico:{
        type: String,
        require: true
    },

    //TODO: DEPENDE del modelo ambiente
    idAmbiente:{
        type: String,
        require: true
    },

    //TODO: DEPENDE del modelo de periodo academico
    idUsuario:{
        type: String,
        require: true
    },

    Horas:{
        type: Number,
        require: true
    },
    Dia:{
        type: Date,
        require: true
    },
    HoraInicio:{
        type: Date,
        require: true
    },
    HoraFinal:{
        type: Date,
        require: true
    }
}, {
    timestamps: true
})

export default model('schedules', scheduleSchema);