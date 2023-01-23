import mongoose, { Schema, model } from "mongoose";

const classSchema = new Schema({
    idHorario:{
        type: String,
        require: true
    },
    idCompetencia:{
        type: String,
        require: true
    },
    idUsuario:{
        type: String,
        require: true
    },
    idAmbiente:{
        type: String,
        require: true
    },
    horas:{
        type: Number,
        require: true
    },
    dia:{
        type: String,
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

export default model('class_', classSchema);