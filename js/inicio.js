//crtl+f5 limpia cache
//DOM= DOCUMENT OBJECT MODEL // cuando se cargue el documento
    document.addEventListener('DOMContentLoaded', function() {
        inicio.iniciarJuego();
    }, false);      
 var inicio = {
    iniciarJuego: function(){
        console.log("Juego inciado");
        ajax.cargarArchivo("mapas/principal.json");
        teclado.iniciar();
        inicio.recargarTiles();
        dimensiones.iniciar();
        buclePrincipal.iterar();        
    },
    recargarTiles: function(){
        document.getElementById("juego").innerHTML = "";
        for (var y = 0; y < dimensiones.obtenerTilesVerticales(); y++){
            for(var x = 0; x<dimensiones.obtenerTilesHorizontales(); x++){
                var r = new Rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles, dimensiones.ladoTiles, dimensiones.ladoTiles);
            }
        }
    }
 };