import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';

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
        require: true
    },
    assgHorariaSemanal:{
        type: Number,
    },
    horasMaxDia:{
        type: Number,
    },
    estado:{
        type: String,
    },
}, {
    timestamps: true
})

teacherSchema.method.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

teacherSchema.method.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

export default model('teachers', teacherSchema);