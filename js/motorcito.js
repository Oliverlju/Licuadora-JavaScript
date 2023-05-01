var estadoLicuadora = "apagada";
/* Metodos para los sonidos 
1. Metodo para el sonido de la licuadora
2. Metodo para el sonido del boton de la licuadora*/
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

/* Metodo que llama a la funcion blender al html */
var licuadora = document.getElementById("blender");
/* Funcion que hace la interaccion la img de licuadora y que hace que se cambie a encendida o apagada */
function controlarLicuadora() {
    /* Si la licuadora esta apagada y se hace clic hacer lo siguiente: */
    if ( estadoLicuadora == "apagada" ) {
      /* Aqui cambia a encendido */
      estadoLicuadora = "encendido";
      /* Se reproduce el sonido a como dice la funcion: */
      hacerBrrBrr();

      licuadora.classList.add("active");
      /* Si esta encendido y pasa a estado pagado se quita la imagen de encendido y vuelve a apagado */
    } else {
      estadoLicuadora = "apagada";
      /* Se reproduce el sonido de apagado en este caso es el boton */
      hacerBrrBrr();
      licuadora.classList.remove("active");
      
    }
  }
  
  /* Funcion para el cambio de sonido cuando se interactua con la licuadora */
  function hacerBrrBrr() {
    /* Si la licuadora esta en pausa hacer lo siguinte: */
  if( sonidoLicuadora.paused ){
      /* Se reproduce el sonido el boton de encendido cuando se haga clic */
      botonLicuadora.play();
      /* Seguido se reproduce el sonido de la licuadora */
      sonidoLicuadora.play();
    } else {
      /* Si se presiona el boton de encendido de nuevo se reproduce el sonido del boton */
      botonLicuadora.play();
      /* Cuando se presiona el boton apagado se pausa el sonido de la locuadora */
      sonidoLicuadora.pause();
      /* esta funcion hace que se reinicie el sonido de la licuadora
      y no se quede en el segundo en donde se pauso */
      sonidoLicuadora.currentTime = 0; /* Reinicia el audio al segundo 0 */
    }
  }