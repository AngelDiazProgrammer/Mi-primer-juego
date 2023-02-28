function Mapa(objetoJSON){
    this.posicion = new PushSubscriptionOptions(0,0);
    this.posicionActualizada = new PushSubscriptionOptions(0,0);

    this.anchoMedidoEnTiles = parseInt(objetoJSON.width);
    this.altoMedidoEnTiles = parseInt(objetoJSON.heigth);
    this.anchoDeLosTiles = parseInt(objetoJSON.tilewidth); 
    this.altoDeLosTiles = parseInt(objetoJSON.tileheigth);

    this.paletasSprite = [];
    this.iniciarPaletasSprites(objetoJSON.tilesets);

    this.capasTiles =  [];
    this.iniciarCapas(objetoJSON.layers);

}

Mapa.prototype.iniciarPaletasSprites = function (datosCapas){
 for(i= 0; i< datosCapas.length; i++){
    this.paletasSprite.push( new PaletaSprite(datosCapas[i]))
 }
}
Mapa.prototype.iniciarCapas = function(datosCapas){
    for (i=0; i< datosCapas.length; i++){
        switch(datosCapas[i].type){
        case "tilelayer":
            this.capasTiles.push(new CapaMapaTiles(
                datosCapas[i], i, this.anchoDeLosTiles, this.altoDeLosTiles, this.paletasSprite));
            break;
            case  "objectgroup":
                break;
    }
    }

}
Mapa.prototype.iniciarElementosMapa = function() {
	var anchoMapaEnPixeles = this.anchoMedidoEnTiles * this.anchoDeLosTiles;
	var altoMapaEnPixeles = this.altoMedidoEnTiles * this.altoDeLosTiles;

	let idHTML = "mapa";
	document.getElementById(idHTML).style.position = "absolute";
	document.getElementById(idHTML).style.width = (this.anchoMedidoEnTiles * this.anchoDeLosTiles) + "px";
	document.getElementById(idHTML).style.height = (this.altoMedidoEnTiles * this.altoDeLosTiles) + "px";
	document.getElementById(idHTML).style.background = "url('" + this.rutaImagenMapa + "')";
	document.getElementById(idHTML).style.backgroundClip = "border-box";
	document.getElementById(idHTML).style.outline = "1px solid transparent";

	var htmlColisiones = "";
	for(c = 0; c < this.rectangulosColisiones.length; c++) {
		htmlColisiones += this.rectangulosColisiones[c].html;
	}
	document.getElementById("colisiones").innerHTML = htmlColisiones;
	
	var htmlLocalizaciones = "";
	for(l = 0; l < this.rectangulosLocalizaciones.length; l++) {
		htmlLocalizaciones += this.rectangulosLocalizaciones[l].rectangulo.html;
	}
	document.getElementById("localizaciones").innerHTML = htmlLocalizaciones;
	
	//bloque de escaleras

	if(debug.debugging) {
		for (c = 0; c < this.rectangulosColisiones.length; c++) {
			this.rectangulosColisiones[c].aplicarEstiloTemporal("#ff0000");
		}
		
		for (l = 0; l < this.rectangulosLocalizaciones.length; l++) {
			this.rectangulosLocalizaciones[l].rectangulo.aplicarEstiloTemporal("#00ff00");
		}

		//bloque escaleras debugging
	}
	
	
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	document.getElementsByTagName("body")[0].style.backgroundColor = "black";
}
Mapa.prototype.actualizar = function(){

}
Mapa.prototype.dibujar = function(){
    
}