import express from "express";
import "dotenv/config";
import cors from "cors";
import{ conectarDB } from "./database/conexion.js";

import { loginUsuario } from "./controllers/loginUsuario.js";
import { logoutUsuario } from "./controllers/logoutUsuario.js";
import { postUsuario } from "./controllers/postUsuario.js";

import { getNoticias } from "./controllers/getNoticias.js";
import { getNoticiaById } from "./controllers/getNoticiaById.js";
import { postNoticia } from "./controllers/postNoticia.js";
import { deleteNoticia } from "./controllers/deleteNoticia.js";
import { putNoticia } from "./controllers/putNoticia.js";


import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequest.js";
import { manejadorErrores } from "./middlewares/manejadorErrores.js";
import { controlarSesion } from "./middlewares/controlarSesion.js";



const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
await conectarDB();

//middleware -> mostrar data requests
app.use(mostrarDatosRequest);

// middleware manejador de errores
app.use(manejadorErrores);

app.get("/", (req, res) => {
    res.send("Api Noticias de Mujeres al Deporte");
})

app.post("/registrar", postUsuario);
app.post("/login", loginUsuario);

// lo pongo por debajo del register y login para que no entre en conflicto
app.use(controlarSesion);

app.post("/logout", logoutUsuario);

app.get("/noticias" , getNoticias);
app.get("/noticia/:id", getNoticiaById);
app.post("/noticia", postNoticia);
app.delete("/noticia/:id", deleteNoticia);
app.put("/noticia/:id", putNoticia);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})