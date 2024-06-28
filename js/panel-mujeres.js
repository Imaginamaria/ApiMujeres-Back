import { RequestsAPI } from "../RequestsAPI.js";
import { imprimir } from "../utils/functions.js";


const mostrarCardNoticias = (data) => {
    imprimir("newsContainer-error", "");
    const cardNoticias = data.map((noticia) => {
        const noticias = data.map((noticia) => new noticia(noticia.id, noticia.titulo, noticia.subbtitulo,
            noticia.categoria, noticia.contenido, noticia.imagen, noticia.fecha));

        return `<div class="col-md-4 news-card" data-name="${noticia.titulo}" data-date="${noticia.fecha}" data-category="${noticia.categoria}">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${noticia.titulo}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${noticia.fecha}</h6>
                                <p class="card-text">${noticia.contenido}</p>
                                <div class="d-flex justify-content-between">
                                    <a href="#" class="btn btn-secondary">Editar</a>
                                    <a href="#" class="btn btn-danger">Borrar</a>
                                </div>
                            </div>
                        </div>
                    </div>`;    
        
    })
}

const mostrarError = (error)=>{
    imprimir ("newsContainer-error", error)
}

RequestsAPI.getNoticias()
    .then(mostrarCardsNoticias)
    .catch(mostrarError)