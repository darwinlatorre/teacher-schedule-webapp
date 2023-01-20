import { Schema, model } from "mongoose";

const scheduleSchema = new Schema({
    idHorario:{
        type: Number,
        require: true
    },

    //TODO: DEPENDE del modelo de competencia
    idCompetencia:{
        type: Array,
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

    horas:{
        type: Number,
        require: true
    },
    dia:{
        type: Date,
        require: true
    },
    horaInicio:{
        type: String,
        require: true
    },
    horaFinal:{
        type: String,
        require: true
    }
}, {
    timestamps: true
})

export default model('schedules', scheduleSchema);