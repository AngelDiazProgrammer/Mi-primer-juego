//
var dimensiones = {
  ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 
  alto: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
  ladoTiles: 100,
  escala: 1,
  
  iniciar: function(){
      window.addEventListener("resize", function(evento){
        dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        dimensiones.alto  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        console.log("Ancho: "+ dimensiones.ancho+ "| Alto: "+ dimensiones.alto);
        inicio.recargarTiles();
      })
    },
      obtenerTilesHorizontales: function() {
        var ladofinal = dimensiones.ladoTiles * dimensiones.escala;
        return Math.ceil((dimensiones.ancho - ladofinal) / ladofinal);
      },
      obtenerTilesVerticales: function() {
        var ladofinal = dimensiones.ladoTiles * dimensiones.escala;
        return Math.ceil((dimensiones.alto - ladofinal) / ladofinal);
      },
      obtenerTotalTiles: function(){
        return dimensiones.obtenerTilesHorizontales() * dimensiones.obtenerTilesVerticales();
      }
  }
