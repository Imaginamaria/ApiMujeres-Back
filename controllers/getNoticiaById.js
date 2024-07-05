import { ModeloNoticia } from "../database/models/ModeloNoticia.js";


// controlador para obtener una noticia por id
export const getNoticiaById =(req, res, next)=>{
    // obtengo el id de la mascota desde los parametros de la consulta
    const idNoticia = req.params.id;

    // busco la noticia con el id proporcionado
    ModeloNoticia.findOne({id: idNoticia})
    .then((data)=>{
         // si no hay ninguna mascota con ese id, tiro un error que sera capturado por el catch
        if(!data){
            throw new Error(`No existe ninguna noticia con el Id ${idNoticia}`)
        }else{
            // si existe la mascota, la devuelvo en formato json
            res.json(data)
        }
    })
    .catch((error)=>{
        // si hay un error, lo paso al siguiente middleware
        next(error)
    })

}