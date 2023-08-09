console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

const idadeComprador = 18;
const acompanhante = true;
let passagem = false;
const destino = "salvador"

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || acompanhante == true;

let contador = 0;
let destinoExite = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExite = true
        break;
    }
    contador += 1;
}

console.log("Destino existe:", destinoExite);

if (podeComprar && destinoExite) {
    console.log("Boa viagem");
} else {
    console.log("Ocorreu algum erro");
}

for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExite = true;
    }
}