

import { ModeloNoticia } from "../database/models/ModeloNoticia.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postNoticia =async (req, res, next)=>{

    //obtengo los datos de la mascota desde el cuerpo de la consulta

    const {categoria, titulo, subtitulo, urlimg, descripcion, textodestacado, fecha, autor} = req.body;
    const nuevaNoticia = new ModeloNoticia();
    nuevaNoticia.id =await obtenerProximoId(ModeloNoticia);
    nuevaNoticia.categoria = categoria;
    nuevaNoticia.titulo = titulo;
    nuevaNoticia.subtitulo = subtitulo;
    nuevaNoticia.urlimg = urlimg;
    nuevaNoticia.descripcion = descripcion;
    nuevaNoticia.textodestacado = textodestacado;
    nuevaNoticia.fecha = fecha;
    nuevaNoticia.autor = autor;

    //guardo la mascota en la base de datos
    nuevaNoticia.save()
    .then((data)=>{
        //devuelvo la mascota guardada en formato json
        res.json(data)
    })
    .catch((error)=>{
        next(error)
    })      

}