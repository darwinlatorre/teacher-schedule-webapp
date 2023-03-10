import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
    idDocente:{
        type: Number,
        require: true
    },
    nombres:{
        type: String,
        require: true
    },
    apellidos:{
        type: String,
        require: true
    },
    tipoIdentificacion:{
        type: String,
        require: true
    },
    user:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    roles:{
        user: {
            type: Number,
            default: 4000
        },
        coodinator: Number
        
    },
    refreshToken: [String],
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
    listIdClasses:{
        type: Array,
        default: [],
        require: true
    },
    assgHorariaSemanal:{
        type: Number,
        default: 0
    },
    horasMaxDia:{
        type: Number,
        default: 0
    },
    estado:{
        type: String,
        default: 'Activo'
    },
}, {
    timestamps: true
})

export default model('teachers', teacherSchema);