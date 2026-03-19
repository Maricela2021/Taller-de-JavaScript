//Miniproyecto - Contador Interactivo
let contador = 0;

const numero = document.getElementById("numero");
const btnAumentar = document.getElementById("aumentar");
const btnDisminuir = document.getElementById("disminuir");

function actualizarColor() {
    if (contador > 0) {
        numero.style.color = "green";
    } else if (contador < 0) {
        numero.style.color = "red";
    } else {
        numero.style.color = "black";
    }
}

btnAumentar.addEventListener("click", function() {
    contador++; 
    numero.textContent = contador;
    actualizarColor();
});

btnDisminuir.addEventListener("click", function() {
    contador--;
    numero.textContent = contador;
    actualizarColor();
});