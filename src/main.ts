let contador = 0;

// Defino las constantes del contador enlazando con los elementos del HTML
const contadorElement = document.getElementById("contador");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");
const btnReset = document.getElementById("btn-reset");

//const inputTurno = document.getElementById("input-turno");
//const btnCambiar = document.getElementById("btn-cambiar");

// Actualizar contador
function actualizarContador() {
  // Añado a la función el padStart para que el contador tenga X longitud (Extra)
  contadorElement.textContent = String(contador).padStart(2, "0");
}

// Cambio de contador
function cambiarContador(valor) {
  contador += valor;
  // Condicional para que no cuente en números negativos
  if (contador < 0) {
    contador = 0;
  }
  actualizarContador();
}

// Reinicio de contador
function resetContador() {
  contador = 0;
  actualizarContador();
}

// function cambiarTurno() {}

// Eventos al hacer click
btnAnterior.addEventListener("click", () => cambiarContador(-1));
btnSiguiente.addEventListener("click", () => cambiarContador(1));
btnReset.addEventListener("click", resetContador);

//btnCambiar.addEventListener("click", cambiarTurno);

actualizarContador();
