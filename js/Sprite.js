  function Sprite(ruta, idSobreZero, PocisionEnHoja){
    var elemetosRuta = ruta.split("/");
    this.rutaHojaOrigen = "img/" + elementosRuta[elementosRuta.legth - 1];
    this.idSobreZero = idSobreZero;
    this.idSobreUno = idSobreZero + 1;
    this.PocisionEnHoja = PocisionEnHoja;
  }