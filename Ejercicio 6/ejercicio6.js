//cambio de texto con evento click
const titulo = document.getElementById("titulo");
const boton = document.getElementById("btn");

boton.addEventListener("click", function() {
    titulo.textContent = "Aprendiendo JavaScript";
    console.log("El texto fue cambiado");
});