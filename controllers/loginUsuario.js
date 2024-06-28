import { ModeloUsuario } from "../database/models/ModeloUsuario.js";

export const loginUsuario = async (req, res, next) =>{
    const {email, password} = req.body;
    const usuario = await ModeloUsuario.findOne({email, password})
    // busca un usuario con el email y contraseña que llega en el body
    if(usuario){
        // crear y guardar el token
        usuario.session = Math.random().toString(36).slice(2);
        usuario.save()
        .then(()=>{
                    // devolver el token (y el user para usarlo en el frontend)
            res.json({session: usuario.session, user: usuario})
        })
        .catch((error)=> {
            next(error)
        })
    }else{
        next(new Error("Usuario o contraseña incorrecta."))
    }
}


