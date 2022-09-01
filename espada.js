class Espada {
    //estados
    nombre = "Espada sin nombre";
    estaAfilada = true;
    estaEnfundada = true;
    numeroVictimas = 0;


    //comportamientos
    
  
    

    afilarODesafilar(estadoFilo){
        this.estaAfilada = estadoFilo;
    }

    enfundarODesenfundar(estadoFunda){
        this.estaEnfundada = estadoFunda;
    }

    comoTeLlamas() {
        return "Mi nombre es: " + this.nombre;
    }

    ahoraTeLlamas(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    indicarVictimas(numVictimas) {

        this.numeroVictimas = numVictimas;
    }

    matar() {
        this.numeroVictimas++;
    }
}


//exporta la clase
module.exports = Espada;
