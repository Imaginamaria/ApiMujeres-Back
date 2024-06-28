import { ModeloNoticia } from "../database/models/ModeloNoticia.js";

export const getNoticiaById =(req, res, next)=>{
    const idNoticia = req.params.id;
    ModeloNoticia.findOne({id: idNoticia})
    .then((data)=>{
        if(!data){
            throw new Error(`No existe ninguna noticia con el Id ${idNoticia}`)
        }else{
            res.json(data)
        }
    })
    .catch((error)=>{
        next(error)
    })

}