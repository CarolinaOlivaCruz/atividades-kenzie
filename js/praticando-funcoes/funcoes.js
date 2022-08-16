//S4-04 | 💪 Atividade - Funções: Passo a Passo

// function textReturn() {
//     return 'Olá'
// }
// console.log(textReturn())

// //

// function textreturn(text) {
//     return text;
// }
// console.log(textreturn('Olá, estou sendo retornado pela função'))

// //

// function textReturn(text) {
//     console.log(text)
// }

// textReturn('Olá')


//S4-05 | 💪 Atividades - Funções: Exercitando o uso de parâmetro
//Obs. Atentar a tipos

//Ex.1
function somarValores(valor1, valor2) {
    return valor1 + valor2;
}
console.log(somarValores(15, 876))


//Ex.2
function valorTipo(valor) {
    let tipo = typeof valor;
    return `O ${valor} é do tipo ${tipo}`;
}
console.log(valorTipo(true));


//Ex.3
function somaNotas(nota1, nota2, nota3, nota4) {

    let soma = nota1 + nota2 + nota3 + nota4;

    let tipoNota = typeof soma;

    if (tipoNota === 'number') {
        return soma;
    } else {
        return 'O campo só pode receber números';
    }
}
somaNotas(1, '2', 3, 4)


// S4-06 | 💪 Atividades - Funções: Exercitando o uso do return

// Ex.1

function soma(nota1, nota2, nota3, nota4) {
    let somarNotas = nota1 + nota2 + nota3 + nota4;
    return somarNotas;
}

function media(somaDasNotas) {
    let calcMedia = somaDasNotas / 4;
    return calcMedia;
}

let somaDasNotas = soma(10, 9, 8, 10)
console.log(`Média do aluno Theo: ${media(somaDasNotas)}`)


// Ex.2 

function convertToCelsius(currentType, currentValue) {

    let calcKelvinParaCeusius = currentValue - 273;
    let calcFahrenheitParaCeusius = (currentValue - 32) / 1.8;

    if (currentType === 'Kelvin') {
        return calcKelvinParaCeusius;
    } else if (currentType === 'Fahrenheit') {
        return calcFahrenheitParaCeusius;
    }
}
console.log(convertToCelsius('Fahrenheit', 28));



function convertToFahrenheit(currentType, currentValue) {
    let calcKelvinParaFahrenheit = (currentValue - 273) * 1.8 + 32;
    let calcCelsiusParaFahrenheit = currentValue * 1.8 + 32;
    
    if (currentType === 'Kelvin') {
        return calcKelvinParaFahrenheit;
    } else if (currentType === 'Celsius') {
        return calcCelsiusParaFahrenheit;
    }
}
console.log(convertToFahrenheit('Kelvin', 28));



function convertToKelvin(currentType, currentValue) {
    let calcFahrenheitParaKelvin = (currentValue - 32) * 5 / 9 + 273;
    let calcCelsiusParaKelvin = currentValue + 273;
    
    if (currentType === 'Fahrenheit') {
        return calcFahrenheitParaKelvin;
    } else if (currentType === 'Celsius') {
        return calcCelsiusParaKelvin;
    }
}
console.log(convertToKelvin('Fahrenheit', 28));

