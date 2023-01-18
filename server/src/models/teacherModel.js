import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
    tipoDocente:{
        type: String,
        require: true
    },
    tipoContrato:{
        type: String,
        require: true
    },
    area:{
        type: String,
        require: true
    },
    assgHorariaSemanal:{
        type: String,
        require: true
    },
    horasMaxDia:{
        type: String,
        require: true
    },
    estado:{
        type: String,
        require: true
    },
}, {
    timestamps: true
})

export default model('teacher', teacherSchema);