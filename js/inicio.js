//crtl+f5 limpia cache
//DOM= DOCUMENT OBJECT MODEL // cuando se cargue el documento      
 var inicio = {
    iniciadores: [
    maquinaEstados.iniciar(),
    teclado.iniciar(),
    buclePrincipal.iniciar()
    ],

    iniciarJuego: function(){
        inicio.encadenarInicios(inicio.iniciadores.shift());
    },
    encadenarInicios : function(iniciador){
        if(iniciador){
            iniciador(() => inicio.encadenarInicios(iniciadores.shift()));
        }
    }

 };
 document.addEventListener('DOMContentLoaded', function() {
    inicio.iniciarJuego();
}, false); 