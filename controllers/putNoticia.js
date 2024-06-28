import { ModeloNoticia } from "../database/models/ModeloNoticia.js";


export const putNoticia =(req, res, next) =>{
    const idNoticia = req.params.id;
    const {categoria, titulo, subtitulo, urlimg, descripcion, textodestacado, fecha, autor} = req.body;
    const datosNuevos = {};

    if(categoria) datosNuevos.categoria = categoria;
    if(titulo) datosNuevos.titulo = titulo;
    if(subtitulo) datosNuevos.subtitulo = subtitulo;
    if(urlimg) datosNuevos.urlimg = urlimg;
    if(descripcion) datosNuevos.descripcion = descripcion;
    if(textodestacado) datosNuevos.textodestacado = textodestacado;
    if(fecha) datosNuevos.fecha = fecha;
    if(autor) datosNuevos.autor = autor;

    ModeloNoticia.updateOne({id: idNoticia}, datosNuevos)
    .then((data)=>{
        if(data.matchedCount === 0){
            throw new Error(`No existe ninguna noticia con el id ${idNoticia}`)
        }
        res.json({message: `Noticia con id ${idNoticia} actualizada con exito`})
    })
    .catch((error)=>{
        next(error)
    })
}