//crtl+f5 limpia cache
//DOM= DOCUMENT OBJECT MODEL // cuando se cargue el documento
    document.addEventListener('DOMContentLoaded', function() {
        inicio.iniciarJuego();
    }, false);      
 var inicio = {
    iniciarJuego: function(){
        console.log("Juego inciado");
        dimensiones.iniciar();
        buclePrincipal.iterar();        
    }
 };