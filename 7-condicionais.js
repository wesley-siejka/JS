console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

const idadeComprador = 18;
const acompanhante = true
const passagem = true

console.log("Destinos possiveis:");
console.log(listaDeDestinos);

//if (idadeComprador >= 18) {
//    console.log("Comprador maior de idade");
//    listaDeDestinos.splice(1, 1); //removendo item
//} else if (acompanhante) {
//    console.log("Comprador esta acompanhado");
//    listaDeDestinos.splice(1, 1); //removendo item
//} else {
//    console.log("Não é maior de idade não posso vender");
//    listaDeDestinos.splice(0, 3);
//}

if (idadeComprador >= 18 || acompanhante == true) {
    console.log("Boa viagem !!");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Não é maior de idade não posso vender");
    listaDeDestinos.splice(0, 3);
}

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && passagem){
    console.log("Boa viagem")
} else {
    console.log("Desculpe mas você não pode embarcar")
}


console.log(listaDeDestinos);