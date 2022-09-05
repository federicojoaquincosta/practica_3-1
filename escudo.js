class Escudo {
    escudoNuevo = true;
    cubreFlechas = true; 
    flechasClavadas = 0;
    color = "Color del escudo";
    nombre = "Nombre del escudo"


    nombreDelEscudo(nuevoNombre){
        this.nombre = nuevoNombre;
    }
    cambiarCondicion(nuevaCondicion) {
        this.escudoNuevo = nuevaCondicion;
    }

    taparFlechasONo(SiTapaFlechas) {
        this.cubreFlechas = SiTapaFlechas;
    }

    clavarFlecha(){
        this.flechasClavadas++
    }

    indicarFlechasClavadas(){
        return this.nombre + " tiene " + this.flechasClavadas + " flechas clavadas"
    }

    cambiarColorEscudo(nuevoColor) {
        this.color = nuevoColor;
    }

    indicarColorEscudo(){
        return this.nombre + " es " + this.color;
    }

}

module.exports = Escudo;