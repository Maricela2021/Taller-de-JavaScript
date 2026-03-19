//Miniproyecto - Contador Interactivo
let contador = 0;

const numero = document.getElementById("numero");
const btnAumentar = document.getElementById("aumentar");
const btnDisminuir = document.getElementById("disminuir");

btnAumentar.addEventListener("click", function() {
    contador++; 
    numero.textContent = contador;
    });

btnDisminuir.addEventListener("click", function() {
    contador--;
    numero.textContent = contador;
    });