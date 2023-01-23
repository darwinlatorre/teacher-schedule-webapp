import { Schema, model } from "mongoose";

const scheduleSchema = new Schema({
    idHorario:{
        type: Number,
        require: true
    },
    //TODO: DEPENDE del modelo de periodo academico
    idPeriodoAcademico:{
        type: String,
        require: true
    },
    listIdClasses:{
        type: Array,
        require: true
    }
}, {
    timestamps: true
})

export default model('schedules', scheduleSchema);