// 💪 Atividades - Arrays: Exercitando o acesso de dados

// Ex.1
let nomeDosCompetidores = ["Maria", "Heric", "Roberta", "Rafael", "Lucas"];
let primeiro = nomeDosCompetidores[0];
console.log(primeiro);

// Ex.2
let ultimo = nomeDosCompetidores[nomeDosCompetidores.length - 1];
console.log(ultimo);

// Ex.3
let posicoesDoPodio = [1, 2, 3, 4, 5];

console.log(`Quem está na posição ${posicoesDoPodio[0]} é ${nomeDosCompetidores[0]}`);
console.log(`Quem está na posição ${posicoesDoPodio[1]} é ${nomeDosCompetidores[1]}`);
console.log(`Quem está na posição ${posicoesDoPodio[2]} é ${nomeDosCompetidores[2]}`);
console.log(`Quem está na posição ${posicoesDoPodio[3]} é ${nomeDosCompetidores[3]}`);
console.log(`Quem está na posição ${posicoesDoPodio[4]} é ${nomeDosCompetidores[4]}`);






// S4-11 | 💪 Atividades - Arrays: Verificando dados

// Ex.1
const tiposDiversos = [1.5, "String", false, 10];
const tiposDiversos2 = [true, "String", "boolen", '10'];

function qualTipoDeElemento(lista) {

    let result = [];

    let verifica1 = lista[0];
    if (typeof verifica1 === 'number') {
       result.push(true);
    } else{
      result.push(false)
    }

    let verifica2 = lista[1];
    if (typeof verifica2 === 'number') {
       result.push(true);
    } else{
      result.push(false)
    }

    let verifica3 = lista[2];
    if (typeof verifica3 === 'number') {
       result.push(true);
    } else{
      result.push(false)
    }

    let verifica4 = lista[3];
    if (typeof verifica4 === 'number') {
       result.push(true);
    } else{
      result.push(false)
    }
    
    return result;
}

console.log(qualTipoDeElemento(tiposDiversos));
console.log(qualTipoDeElemento(tiposDiversos2));


// Ex.2
let passageiros = ['Ana', 'Maria', 'José'];

function assentoPremiado(lista) {

    const sorteio = Math.floor(Math.random() * (4 - 1) + 1);
    let passageiro1 = lista[0];
    if (passageiro1 == 'Ana') {
        passageiro1 = 1
    }

    let passageiro2 = lista[1];
    if (passageiro2 == 'Maria') {
        passageiro2 = 2;
    }

    let passageiro3 = lista[2];
    if (passageiro3 == 'José') {
        passageiro3 = 3;
    }

    if (sorteio == passageiro1) {
        console.log('Ana venceu');
    } else if (sorteio == passageiro2) {
        console.log('Maria venceu');
    } else if (sorteio == passageiro3) {
        console.log('José venceu');
    }

}
assentoPremiado(passageiros);