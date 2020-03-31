$(document).ready(function() {

  $("button").click(function() {
    $("#titulo").hide();
    start();
  });
});

function start() {
  var ronda = 1;
  while(true) {
    $("#ronda").append("Ronda "+String(ronda));
    var estado = [0, 0, 0, 0];
    //Inicializacion de los numeros
    for (var j = 0; j < 4; j++) {
      estado[j] = Math.round(Math.random() * 9);
      for(var k = 0; k<j; k++){
        while(estado[k] === estado[j]){   //Asegura numeros distintos
          estado[j] = Math.round(Math.random() * 9);
        }
      }
    }
    $("#elem1_in").append("<h3>" + String(estado[0]) + "</h3>");
    $("#elem2_in").append("<h3>" + String(estado[1]) + "</h3>");
    $("#elem3_in").append("<h3>" + String(estado[2]) + "</h3>");
    $("#elem4_in").append("<h3>" + String(estado[3]) + "</h3>");
    break;
  }
}
