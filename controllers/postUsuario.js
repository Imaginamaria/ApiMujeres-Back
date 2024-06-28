import { ModeloUsuario } from "../database/models/ModeloUsuario.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postUsuario = async (req, res, next)=>{
    const {nombre, apellido,email, password} = req.body;

    try{
        // verificamos si ya existe un usuario con ese email
        const usuarioExistente = await ModeloUsuario.findOne({email: email})
        // si existe, tiro error
        if(usuarioExistente) {
            throw new Error("El email ya esta en uso.")
        }

        //sino existe creamos un nuevo usuario

        const nuevoUsuario = new ModeloUsuario()
        nuevoUsuario.id = await obtenerProximoId(ModeloUsuario)
        nuevoUsuario.nombre = nombre;
        nuevoUsuario.apellido = apellido;
        nuevoUsuario.password = password;
        nuevoUsuario.email= email;

        nuevoUsuario.save()
        .then(()=>{
            res.json({message: `Nuevo usuario con id ${nuevoUsuario.id} creado con exito.`})
        })
        .catch((error)=>{
            next(error)
        })

    } catch(error){
        next(error)
    }
}