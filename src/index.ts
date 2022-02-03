let clave: string = String(prompt("Ingrese la clave"));
let intentos: number = 0;

while (intentos <= 2) {
  if (clave !== "Eureka") {
    clave = String(prompt("Ingrese la clave correcta"));
  } else {
    console.log("Clave correcta, Bienvenido");
  }

  if (intentos === 2 && clave !== "Eureka") {
    console.log("Has agotado la cantidad de intentos");
  }

  intentos = intentos + 1;
}
