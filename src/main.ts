let contador = 0;

// Defino las constantes del contador enlazando con los elementos del HTML
const contadorElement = document.getElementById("contador");
if (contadorElement !== null && contadorElement !== undefined) {
  actualizarContador();
}

const btnAnterior = document.getElementById("btn-anterior");
if (
  btnAnterior !== null &&
  btnAnterior !== undefined &&
  btnAnterior instanceof HTMLButtonElement
) {
  btnAnterior.addEventListener("click", () => cambiarContador(-1));
}

const btnSiguiente = document.getElementById("btn-siguiente");
if (
  btnSiguiente !== null &&
  btnSiguiente !== undefined &&
  btnSiguiente instanceof HTMLButtonElement
) {
  btnSiguiente.addEventListener("click", () => cambiarContador(1));
}

const btnReset = document.getElementById("btn-reset");
if (
  btnReset !== null &&
  btnReset !== undefined &&
  btnReset instanceof HTMLButtonElement
) {
  btnReset.addEventListener("click", resetContador);
}

/*const inputTurno = document.getElementById("input-turno");
if (
  inputTurno !== null &&
  inputTurno !== undefined &&
  inputTurno instanceof HTMLButtonElement
) {
  inputTurno.addEventListener("click", inputTurno);
}
const btnCambiar = document.getElementById("btn-cambiar");
if (
  btnCambiar !== null &&
  btnCambiar !== undefined &&
  btnCambiar instanceof HTMLButtonElement
) {
  btnCambiar.addEventListener("click", btnCambiar);
}
*/

// Actualizar contador
function actualizarContador() {
  if (contadorElement !== null && contadorElement !== undefined) {
    // Añado a la función el padStart para que el contador tenga X longitud (Extra)
    contadorElement.textContent = `${contador}`.padStart(2, "0");
  }
}

// Cambio de contador
function cambiarContador(valor: number) {
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

actualizarContador();
