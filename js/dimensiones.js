//
var dimensiones = {
    ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 
    alto: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    
    iniciar: function(){
        window.addEventListener("resize", function(evento){
          dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          dimensiones.alto  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          console.log("Ancho: "+ dimensiones.ancho+ "| Alto: "+ dimensiones.alto);
        });
    }
} 