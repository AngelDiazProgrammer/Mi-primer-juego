function PaletaSprites(datosSprites){
    this.rutaDeImagen = datosSprites.image;
    this.anchoImagen =  parseInt(datosSprites.imagewidth);
    this.altoImagen =  parseInt(datosSprites.imageheight);

    this.anchoSprites =  parseInt(datosSprites.tilewidth);
    this.altoSprites =  parseInt(datosSprites.tileheight);
}