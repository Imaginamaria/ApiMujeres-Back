import { ModeloNoticia } from "../database/models/ModeloNoticia.js";
import {formatearFiltrosDB} from "../utils/functions.js"

export const getNoticias = (req, res, next) =>{
    const filtroCategoria = formatearFiltrosDB(req.query.categoria)
    const filtroTitulo = formatearFiltrosDB(req.query.titulo)
    const filtroFecha = formatearFiltrosDB(req.query.fecha)
    const filtroAutor = formatearFiltrosDB(req.query.autor)
    

    const filtros = {}
    if(filtroCategoria) filtros.autor = filtroCategoria;
    if(filtroTitulo) filtros.titulo = filtroTitulo;
    if(filtroFecha) filtros.fecha = filtroFecha;
    if(filtroAutor) filtros.autor = filtroAutor;

    ModeloNoticia.find(filtros)
    .then((data)=>{
        console.log("get noticia =>",data)
        if(data.length === 0){
            res.json([])
        }else{
            res.json(data)
        }
    })
    .catch((error)=>{
        next(error)
    })
}