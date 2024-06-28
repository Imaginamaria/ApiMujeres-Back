import { obtenerValorInput , imprimir } from "../utils/functions.js";
import { RequestsAPI } from "../RequestsAPI.js";

document.addEventListener("DOMContentLoaded", () => {
    const botonLogin = document.querySelector("#form-login-submit");

    if (botonLogin) {
        botonLogin.addEventListener("click", (event) => {
            event.preventDefault(); // Previene el comportamiento predeterminado del botón de formulario

            

            // Obtener el user y password del formulario
            const email = obtenerValorInput("#form-login-email");
            const password = obtenerValorInput("#form-login-password");
            console.log(email, password);

            // Hacer el fetch de un método login de RequestsAPI
            RequestsAPI.login(email, password)
                .then((data) => {
                    // Si esl login es existoso, lo guardamos en el session storage
                    sessionStorage.setItem("session", data.session);

                    // Redireccionamos al usuario a la pagina principal
                    document.location.replace("panel-mujeres.html");
                })
                .catch((error) => {
                    console.error(error);
                    imprimir("form-login-error", "Email o contraseña incorrectos");
                });
        });
    } else {
        console.error("El botón de login no se encuentra en el DOM.");
    }
});
