var maquinaEstados = {
    estadoActual: null,
    iniciar: function(){
        maquinaEstados.cambiarEstado(listadosEstados.MAPA_MUNDI);

    },
    cambiarEstado: function(nuevoEstado){
        switch(nuevoEstado){
            case listadosEstados.CARGANDO:
                //estado actual cargando
            break;
            case listadosEstados.MENU_INICIAL:
            break;
            case listadosEstados.MAPA_MUNDI:
                maquinaEstados.estadoActual = new EstadoMapamundi(listadosEstados.MAPA_MUNDI);
            break;
            case listadosEstados.NIVEL:
            break;
                 

        }
    },
    actualizar: function() {
        maquinaEstados.estadoActual.actualizar();

    },
    dibujas: function(){
        maquinaEstados.estadoActual.dibujar();

    }
}