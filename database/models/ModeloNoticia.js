import { Schema, model } from "mongoose";

// definir el esquema de la colección noticias

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

// exportar el modelo
export const ModeloNoticia = model("Noticia", schemaNoticia)