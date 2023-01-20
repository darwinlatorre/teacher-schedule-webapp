import { Schema, model } from 'mongoose';

const programSchema = new Schema({
    idPrograma:{
        type: Number,
        require: true
    },
    nombrePrograma:{
        type: String,
        require: true
    },
    competencias:{
        type: Array,
        require: true
    },
}, {
    timestamps: true
});

export default model('programs', programSchema);