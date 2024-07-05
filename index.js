import express from "express";
import "dotenv/config";
import cors from "cors";
import{ conectarDB } from "./database/conexion.js";
import { getNoticias } from "./controllers/getNoticias.js";
import { getNoticiaById } from "./controllers/getNoticiaById.js";
import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequest.js";
import { manejadorErrores } from "./middlewares/manejadorErrores.js";
import { postNoticia } from "./controllers/postNoticia.js";
import { deleteNoticia } from "./controllers/deleteNoticia.js";
import { postUsuario } from "./controllers/postUsuario.js";
import { putNoticia } from "./controllers/putNoticia.js";
import { loginUsuario } from "./controllers/loginUsuario.js";
import { controlarSesion } from "./middlewares/controlarSesion.js";
import { logoutUsuario } from "./controllers/logoutUsuario.js";


// creamos la app de express
const app = express();
// definimos el puerto donde correrá el servidor
const port = 3000;
// usamos express.json para poder leer el body de las peticiones
app.use(express.json());
// habilitamos cors para poder hacer peticiones desde el frontend
app.use(cors());
// conectamos a la base de datos
await conectarDB();

//middleware -> mostrar data requests
app.use(mostrarDatosRequest);



// rutas
// ruta de inicio
app.get("/", (req, res) => {
    res.send("Api Noticias de Mujeres al Deporte");
})

// rutas de usuarios
// post -> registrar usuario
app.post("/registrar", postUsuario);
// post -> login usuario
app.post("/login", loginUsuario);

// lo pongo por debajo del register y login para que no entre en conflicto
app.use(controlarSesion);

app.post("/logout", logoutUsuario);

// rutas de mascotas
// get -> obtener todas las mascotas

app.get("/noticias" , getNoticias);
app.get("/noticia/:id", getNoticiaById);
app.post("/noticia", postNoticia);
app.delete("/noticia/:id", deleteNoticia);
app.put("/noticia/:id", putNoticia);

// middleware manejador de errores
app.use(manejadorErrores);

// levantamos el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})