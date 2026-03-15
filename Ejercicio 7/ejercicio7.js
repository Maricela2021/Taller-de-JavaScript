//cambio de estilos con JS
const titulo = document.getElementById("titulo");
const boton = document.getElementById("btn");

boton.addEventListener("click", function() {
    titulo.textContent = "Aprendiendo JavaScript";
    titulo.style.color = "red";
    titulo.style.backgroundColor = "black";
    titulo.style.fontSize = "40px";
    titulo.style.padding = "20px";
    titulo.style.borderRadius = "10px";
    console.log("El color del texto, el tamaño de fuente y el fondo del titulo fueron cambiados");
});