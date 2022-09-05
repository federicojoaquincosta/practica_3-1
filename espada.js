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

   

    matar() {
        this.numeroVictimas++;
    }

    indicarVictimas() {

        return this.nombre + " se ha cobrado " + this.numeroVictimas + " víctima/s";
    }
}


//exporta la clase
module.exports = Espada;
