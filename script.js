function empezarjuego() {
  document.getElementById("page1").style.display = "none";
  const nombre = document.getElementById("nombredeljugador").value;
  document.getElementById("mostrarnombre").innerHTML = " Hola " + nombre + "!";
  document.getElementById("page2").style.display = "inline";
  document.getElementById("page3").style.display = "none"
}

function pregunta01() {

  let respuestas01 = document.getElementsByName("pregunta01");

  for (i = 0; i < respuestas01.length; i++) {
    if (respuestas01[i].checked) {
      document.getElementById("respuesta1").innerHTML = " Pregunta 1: " + respuestas01[i].value;
      if (respuestas01[i].value == "CORRECTO") {
        return 1;
      }
      else {
        return 0;
      }
    }
  }
}

function pregunta02() {

  let respuestas02 = document.getElementsByName("pregunta02");

  for (i = 0; i < respuestas02.length; i++) {
    if (respuestas02[i].checked) {
      document.getElementById("respuesta2").innerHTML = " Pregunta 2: " + respuestas02[i].value;
      if (respuestas02[i].value == "CORRECTO") {
        return 1;
      }
      else {
        return 0;
      }
    }
  }
}

function pregunta03() {

  let respuestas03 = document.getElementsByName("pregunta03");

  for (i = 0; i < respuestas03.length; i++) {
    if (respuestas03[i].checked) {
      document.getElementById("respuesta3").innerHTML = " Pregunta 3: " + respuestas03[i].value;
      if (respuestas03[i].value == "CORRECTO") {
        return 1;
      }
      else {
        return 0;
      }
    }
  }
}

function VerResultados() {
  document.getElementById("page3").style.display = "inline";
  document.getElementById("page2").style.display = "none";
  let total = 0;
  total = pregunta01() + pregunta02() + pregunta03();  
  document.getElementById("total").innerHTML = "RESPUESTAS  ➙  " + total + '/3';  
}
