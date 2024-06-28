import { Schema, model } from "mongoose";

const schemaUsuario = new Schema({
    id: {type: Number, unique: true},
    nombre: String,
    apellido: String,
    email:{type: String, unique:true},
    password: String,
    session: String,
});

export const ModeloUsuario = model("Usuario", schemaUsuario)