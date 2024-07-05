import { ModeloNoticia } from "../database/models/ModeloNoticia.js";

// controlador para eliminar una mascota
export const deleteNoticia =(req, res, next) =>{
    // obtengo el id de la mascota a eliminar desde los parametros de la consulta
    const idNoticia = req.params.id;

    // elimino la mascota con el id proporcionado
    ModeloNoticia.deleteOne({id: idNoticia})
    .then((data)=>{
         // si no se elimino ninguna mascota, tiro un error que sera capturado por el catch
        if(data.deletedCount !== 1){
            throw new Error(`No existe ninguna noticia con el id ${idNoticia}`)
        }else{
            // si se elimino la mascota, devuelvo mensaje de exito
            res.json({
                message: `Noticia con id ${idNoticia} eliminada con exito`
            })
        }
    })
    .catch((error)=>{
        // si hay un error, lo paso al siguiente middleware
        next(error)
    })
}