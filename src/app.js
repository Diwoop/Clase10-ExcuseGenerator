let opcionesQuien = [
  "El perro",
  "Mi gato",
  "Mi abuela",
  "El repartidor",
  "Mi madre"
];
let opcionesAccion = [
  "se ha comido",
  "se ha meado en",
  "ha roto",
  "se ha llevado"
];
let opcionesQue = ["mis deberes", "mi movil", "mi coche", "mis llaves"];
let opcionesCuando = [
  "antes de clase",
  "mientras yo dormia",
  "mientras estaba en el gimnasio",
  "cuando estaba rezando"
];

let quien = Math.floor(Math.random() * opcionesQuien.length);
let accion = Math.floor(Math.random() * opcionesAccion.length);
let que = Math.floor(Math.random() * opcionesQue.length);
let cuando = Math.floor(Math.random() * opcionesCuando.length);

function excusaFinal() {
  return `${opcionesQuien[quien]} ${opcionesAccion[accion]} ${opcionesQue[que]} ${opcionesCuando[cuando]}!!`;
}

window.onload = function() {
  document.getElementById("excusa").innerHTML = excusaFinal();
};
