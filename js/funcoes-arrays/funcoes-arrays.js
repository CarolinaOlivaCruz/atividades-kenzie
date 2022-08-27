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

    let ArrayGramaCortada = [];

    for (i = 0; i < arrayGrama.length; i++) {

        let arrayAtual = arrayGrama[i];

        for (let j = 0; j < arrayAtual.length; j++) {

            let elementosArrayAtual = arrayAtual[j];

            if (elementosArrayAtual === 0) {
                ArrayGramaCortada.push(elementosArrayAtual);
            }
            if (elementosArrayAtual === 'G') {
                ArrayGramaCortada.push(0);
            }
        }
        return ArrayGramaCortada;

    }


}
console.log(trimTheGrass([garden]))