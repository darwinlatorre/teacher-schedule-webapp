import { Schema, model } from "mongoose";

const competenciaSchema = new Schema({
    idCompetencia:{
        type: String,
        require: true
    },
    tipo:{
        type: String,
        require: true
    },
    nombre:{
        type: String,
        require: true
    },
    estado:{
        type: String,
        require: true
    },
    idPrograma:{
        type: String,
        require: true
    },
}, {
    timestamps: true
})

export default model('competencias', competenciaSchema);