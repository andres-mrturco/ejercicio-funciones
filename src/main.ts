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

const inputContador = document.getElementById(
  "input-contador"
) as HTMLInputElement;

const btnCambiar = document.getElementById("btn-cambiar");
if (
  btnCambiar !== null &&
  btnCambiar !== undefined &&
  btnCambiar instanceof HTMLButtonElement
) {
  btnCambiar.addEventListener("click", contadorManual);
}

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
  // Condicional para evitar números negativos
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

// Cambiar contador manualmente
function contadorManual() {
  if (inputContador) {
    //Aseguramos de que el valor es un numero entero
    const nuevoTurno = parseInt(inputContador.value, 10);
    if (!isNaN(nuevoTurno) && nuevoTurno >= 0) {
      contador = nuevoTurno;
      actualizarContador();
      //En caso de no cumplir los parametros
    } else {
      alert("Por favor, ingrese un número válido");
    }
    inputContador.value = "";
  }
}
actualizarContador();
