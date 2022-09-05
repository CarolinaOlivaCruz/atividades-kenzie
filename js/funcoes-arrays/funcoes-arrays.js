// S5-06 | 💪 Atividade - Javascript: Exercitando Funções e Arrays

// Exercício - Grama Alta

// S5-06 | 💪 Atividade - Javascript: Exercitando Funções e Arrays

// Exercício - Grama Alta
let garden = [
    [0, 0, 0, 'G'],
    [0, 0, 'G', 0],
    [0, 'G', 0, 0],
    ['G', 0, 0, 0]
]

function trimTheGrass(arrayGrama) {

    let arrayGramaCortada = [];


    for (let i = 0; i < arrayGrama.length; i++) {

        let listaGrama = [];

        for (let j = 0; j < arrayGrama[i].length; j++) {

            if (arrayGrama[i][j] === 0) {
                listaGrama.push(arrayGrama[i][j]);
            }
            else if (arrayGrama[i][j] === 'G') {
                listaGrama.push(0);
            }
        }
        
       arrayGramaCortada.push(listaGrama);

    }
    return arrayGramaCortada;

}
console.log(trimTheGrass(garden))