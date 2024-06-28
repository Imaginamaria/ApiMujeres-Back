import { Schema, model } from "mongoose";

const schemaNoticia = new Schema({
    id: {type: Number, unique: true},
    categoria: String,
    titulo: String,
    subtitulo: String,
    urlimg: String,
    descripcion: String,
    textodestacado: String,
    fecha: String,
    autor: String
})

export const ModeloNoticia = model("Noticia", schemaNoticia)