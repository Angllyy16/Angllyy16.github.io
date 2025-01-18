// Variable para controlar el nivel de opacidad
let opacidad = 0;
let answeredQuestions = 0;
const totalQuestions = 7;
const progressBar = document.getElementById("progress-bar");

// Función para verificar respuestas
function verificarRespuesta(pregunta, respuestaCorrecta) {
    const respuesta = document.getElementById(`respuesta${pregunta}`).value.trim().toLowerCase();
    if (respuesta === respuestaCorrecta) {
        alert("¡yes!");
        mostrarImagen();
        updateProgressBar();
    } else {
        alert("nouuu:(");
    }
}

// Funciones para cada pregunta
function verificarRespuesta1() { verificarRespuesta(1, "16/05/24"); }
function verificarRespuesta2() { verificarRespuesta(2, "03/01/25"); }
function verificarRespuesta3() { verificarRespuesta(3, "febrero"); }
function verificarRespuesta4() { verificarRespuesta(4, "2"); }
function verificarRespuesta5() { verificarRespuesta(5, "amo"); }
function verificarRespuesta6() { verificarRespuesta(6, "01/10/24"); }
function verificarRespuesta7() { verificarRespuesta(7, "you"); }

// Función para aumentar la opacidad de la imagen
function mostrarImagen() {
    const imagen = document.getElementById("imagen");
    opacidad += 0.1;
    if (opacidad > 1) opacidad = 1;
    imagen.style.opacity = opacidad;
}

// Función para actualizar la barra de progreso
function updateProgressBar() {
    answeredQuestions++;
    let percentage = (answeredQuestions / totalQuestions) * 100;
    progressBar.style.width = percentage + "%";
}

// Función para cerrar el popup
function cerrarPopup() {
    document.getElementById("bienvenida").style.display = "none";
    document.body.classList.remove("popup-visible");
}
function mostrarImagen() {
    const imagen = document.getElementById("imagen");
    opacidad += 0.1;
    if (opacidad > 1) {
        opacidad = 1;
        imagen.classList.add("revelada"); // Activar el efecto de brillo
    }
    imagen.style.opacity = opacidad;
}
