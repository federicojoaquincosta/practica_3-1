const Espada = require("./espada.js");

const Escudo = require("./escudo.js");

const frostmourne = new Espada();
const masamune = new Espada();

const escudoCuero = new Escudo();
const escudoHierro = new Escudo();

frostmourne.ahoraTeLlamas("Frostmourne");
masamune.ahoraTeLlamas("Masamune");

console.log( frostmourne.comoTeLlamas());
console.log(masamune.comoTeLlamas());

masamune.afilarODesafilar(false);

console.log(masamune.estaAfilada);

frostmourne.enfundarODesenfundar(false);

console.log(frostmourne.estaEnfundada);

frostmourne.matar();
frostmourne.matar();
frostmourne.matar();

console.log(frostmourne.indicarVictimas());

masamune.matar();

console.log(masamune.indicarVictimas());

escudoCuero.nombreDelEscudo("Escudo de Cuero");
escudoHierro.nombreDelEscudo("Escudo de Hierro");

escudoCuero.cambiarCondicion(false);
console.log(escudoCuero.escudoNuevo);

escudoCuero.taparFlechasONo(false);
escudoHierro.taparFlechasONo(true);

console.log(escudoCuero.cubreFlechas);
console.log(escudoHierro.cubreFlechas);

escudoCuero.clavarFlecha();
escudoCuero.clavarFlecha();

console.log(escudoCuero.indicarFlechasClavadas());

escudoHierro.cambiarColorEscudo("rojo");
console.log(escudoHierro.indicarColorEscudo());

