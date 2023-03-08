/*

Un alumno desea saber cual sera su calificacion final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.

*/

function calcularDefinitiva(arr) {
  const [p1, p2, p3, e1, t1] = arr;

  let promedio = 0.55 * (p1 + p2 + p3) + 0.3 * e1 + 0.15 + t1;
  return promedio;
}

// dom

let $form = document.getElementById("form");

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  let $p1 = parseInt(document.getElementsByName("p1")[0].value);
  let $p2 = parseInt(document.getElementsByName("p2")[0].value);
  let $p3 = parseInt(document.getElementsByName("p3")[0].value);
  let $e1 = parseInt(document.getElementsByName("e1")[0].value);
  let $t1 = parseInt(document.getElementsByName("t1")[0].value);
  let arr = [ $p1, $p2, $p3, $e1, $t1 ];

  let definitiva = calcularDefinitiva(arr);

  let $respuesta = document.getElementById("respuesta-container");

  $respuesta.innerText = `
    La Nota definitiva para el alumno es ${definitiva}
  `;
});
