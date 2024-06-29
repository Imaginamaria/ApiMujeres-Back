import { ModeloNoticia } from "../database/models/ModeloNoticia.js";
import {formatearFiltrosDB} from "../utils/functions.js"

// controlador para obtener las noticias
export const getNoticias = (req, res, next) =>{
    const filtroCategoria = formatearFiltrosDB(req.query.categoria)
    const filtroTitulo = formatearFiltrosDB(req.query.titulo)
    const filtroFecha = formatearFiltrosDB(req.query.fecha)
    
    //creamos un objeto con los filtros que se van a aplicar
    const filtros = {}
    if(filtroCategoria) filtros.categoria = filtroCategoria;
    if(filtroTitulo) filtros.titulo = filtroTitulo;
    if(filtroFecha) filtros.fecha = filtroFecha;

    //buscamos las noticias en la base de datos
    ModeloNoticia.find(filtros)
    .then((data)=>{
        console.log("get noticia =>", data);
        //si no hay noticias, devolvemos un array vacio
        if(data.length === 0){
            res.json([]);
        }else{
             //si hay noticias, devolvemos las noticias en formato json
            res.json(data);
        }
    })
    .catch((error)=>{
        //si hay un error, lo pasamos al siguiente middleware
        next(error);
    });
};