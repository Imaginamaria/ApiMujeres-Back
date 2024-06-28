import { ModeloUsuario } from "../database/models/ModeloUsuario.js";

export const controlarSesion = async (req, res, next) =>{
    try{

        //mandar request headers
        const authHeader = req.headers["authorization"];

        // obtengo el auth header de los encabezados de la consulta
        if(!authHeader){
            // si no encuentro ninguno, devuelvo error
            throw {statusCode: 401, message:"No autorizado - No se envio token de sesion."} 
        }
        // busco usuario con el token del header
        const usuario = await ModeloUsuario.findOne({session: authHeader})

        if(usuario){
            // si hay usuario, lo agrego a la informacion del request, y continuo a la request
            req.usuario = usuario;
            next()
        }else{
            // si no hay usuario con ese session token, devuelvo error
            throw {statusCode: 401, message:"No autorizado - sesion no valida."}
        }
    }catch(error){
        next(error)
    }
}