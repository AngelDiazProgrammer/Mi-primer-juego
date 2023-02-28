function CapaMapaTiles(datosCapa, indiceZ, anchoDeLosTiles, altoDeLosTiles, paletasSprites){
    this.anchoEnTiles = parseInt(datosCapa.width);
    this.altoEnTiles = parseInt(datosCapa.heigth);
    this.x = parseInt(datosCapa.x);
    this.y = parseInt(datosCapa.y);
    this.z = parseInt(datosCapa.z);
    this.tiles = [];

    for (y = 0; y < this.altoEnTiles; y++){
        for (x = 0; x < this.anchoEnTiles; x++){
            var idSpriteActualSobreUno = datosCapa.data[x + y * this.anchoEnTiles];
            if(idSpriteActualSobreUno == 0){
                this.tiles.push(null);
            }else {
                var spriteActual = this.encontrarSpriteEnPaletaPorId(idSpriteActualSobreUno - 1, paletasSprites);
                this.tiles.push(new Tile(x, y, indiceZ, anchoDeLosTiles, altoDeLosTiles, spriteActual));
            }
        }
    }

}

CapaMapaTiles.prototype.encontrarSpriteEnPaletaPorId = function(idSpriteActualSobreZero, paletasSprite){
    for(s = 0; s < paletasSprite.length; s++){
        if(idSpriteActualSobreZero >= paletasSprite[s].primerSpriteSobreUno - 1 && idSpriteActualSobreZero < paletasSprites[s].totalSprites + paletasSprite[s].primerSpriteSobreUno + 1){
        return paletasSprite[s].sprites[Math.abs(paletasSprites[s].primerSpriteSobreUno - 1 - idSpriteActualSobreZero)];
        }
    }
    throw "El ID sobre ZERO" + idSpriteActualSobreZero+ "del sprite no existe";
}