function iniciaCronometro(){
    var segundos = 0;
    var minutos = 0;
    var segundosTexto;
    var minutosTexto;

    function actualizarContador(){
    segundos++;
    if (segundos > 59){
        segundos = 00;
        minutos = minutos +1
    }
    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10){
        segundosTexto = "0" + segundos;
    }
    if (minutos < 10){
        minutosTexto = "0" + minutos;
    }
    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;
}
    setInterval(actualizarContador, 1000);
}