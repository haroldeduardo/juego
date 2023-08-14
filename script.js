let numero = Math.floor(Math.random() * 100) + 1;

let numerodeentrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");

let convertir = Math.round(numero);

function chequear() {
  let numeroingresado = parseInt(numerodeentrada.value);

  if (numeroingresado < 1 || numeroingresado > 100 || isNaN(numeroingresado)) {
    mensaje.textContent = "Ingresa un numero valido";
  }

  if (numeroingresado == numero) {
    mensaje.textContent = "Felicitaciones Adivinaste el numero";
    mensaje.style.color = "green";

    numerodeentrada.disabled = true;
  }

  else if(numeroingresado < numero){
    mensaje.textContent= "el numero debe ser mas grande"
    mensaje.style.color =" red"
  }

  else{
    mensaje.textContent=" el numero debe ser mas  pequeño"
    mensaje.style.color = "yellow"
  }
}
