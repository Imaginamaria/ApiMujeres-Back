import { ModeloNoticia } from "../database/models/ModeloNoticia.js";

export const deleteNoticia =(req, res, next) =>{
    const idNoticia = req.params.id;
    ModeloNoticia.deleteOne({id: idNoticia})
    .then((data)=>{
        if(data.deletedCount !== 1){
            throw new Error(`No existe ninguna noticia con el id ${idNoticia}`)
        }else{
            res.json({
                message: `Noticia con id ${idNoticia} eliminada con exito`
            })
        }
    })
    .catch((error)=>{
        next(error)
    })
}