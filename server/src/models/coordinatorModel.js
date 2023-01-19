import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';

const coordinatorSchema = new Schema({
    idCoordinador:{
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
    academicProgram:{
        type: String,
        require: true
    }
}, {
    timestamps: true
})

coordinatorSchema.method.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

coordinatorSchema.method.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

export default model('coordinators', coordinatorSchema);