import { Schema, model } from "mongoose";

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
    roles:{
        user: {
            type: Number,
            default: 4000
        },
        coodinator: {
            type: Number,
            default: 5000
        }
    },
    refreshToken: String
}, {
    timestamps: true
})



export default model('coordinators', coordinatorSchema);