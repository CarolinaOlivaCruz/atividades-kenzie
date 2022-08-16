// https://canvas.kenzie.com.br/courses/17/pages/s3-08-%7C-atividade-javascript-praticando-variaveis?module_item_id=2443
// S3-08 | 💪 Atividade - Javascript: Praticando variáveis

// Ex.1 
let apelido = "Carol";
console.log("Olá eu sou a " + apelido);

// Ex.2
let nome = "Ana";
let sobrenome = "Cruz";
console.log("Olá, eu me chamo " + nome + " " + sobrenome);

// Ex.3
let primeiroNome = "Ana";
let segundoNome = "Carolina";
let idade = 25;
console.log("Olá, meu primeiro nome é " + primeiroNome +
    " meu segundo nome é " + segundoNome + ". " + "E eu tenho " + idade + " anos.");

// Ex.4
let preco1 = 5;
let preco2 = 10;
let precoTotal = preco1 + preco2;
console.log(`Comprei uma xícara por ${preco1} reais e dois copos por ${preco2}. 
No total gastei ${precoTotal}`);

// Ex.5
let numero1 = 6;
let numero2 = 8;
let soma = numero1 + numero2;
console.log("A soma do valor " + numero1 + " com o valor " + numero2 + " é igual a "
    + soma + ".");

// Ex.6
a = 0
a += 1
a += 1
a += 1
a += 1
a += 1
console.log(a)

// Ex.7
let anoAtual = 2022;
let anoNascimento = 1997;
let idadeAtual = anoAtual - anoNascimento;
console.log("No ano " + anoAtual + " eu tenho " + idadeAtual + " anos.")

// Ex.8
let alturaRetangulo = 5;
let larguraRetangulo = 7;
let areaRetangulo = alturaRetangulo * larguraRetangulo;
console.log("Um retângulo com largura de " + larguraRetangulo + " e " + alturaRetangulo +
    " possui " + areaRetangulo + "cm² de área total.")

// Ex. 9
let diaAtual = "09";
let mesAtual = "08";
let anoAtual1 = "22";
let dataAtualFormatada = diaAtual + "/" + mesAtual + "/" + anoAtual1;
console.log("A data de hoje é " + dataAtualFormatada);

// Ex.10
let valorA = 5;
let valorB = 9;
let valorC = valorA

valorA = valorB;
valorB = valorC;
console.log(`Antes a variável 'valorA' possuía ${valorB}, agora possui o valor ${valorA}`)
console.log(`Antes a variável 'valorB' possuía o ${valorA}, agora possui o valor ${valorC}`)



// https://canvas.kenzie.com.br/courses/17/pages/s3-10-%7C-atividade-javascript-trabalhando-com-strings?module_item_id=2445
// S3-10 | 💪 Atividade - Javascript: Trabalhando com Strings

// Ex.1
let meuNome = "Carol";
let comprimentoMeuNome = meuNome.length;
console.log("O meu nome possui  " + comprimentoMeuNome + " caracteres de comprimento");

// Ex.2
let preco = 15;
let precoFormatado = `R$: ${preco},00`; // `R$: ${preco.toFixed(2)}`
console.log(precoFormatado);


// Ex.3
let comprimento = "Bom dia";
let nome1 = "Alice";
let sobrenome1 = "Cruz";
let mensagemCumprimento = comprimento + ", " + nome1 + " " + sobrenome1;
console.log(mensagemCumprimento);


// https://canvas.kenzie.com.br/courses/17/pages/s3-14-%7C-atividade-javascript-comparacoes?module_item_id=2451
// S3-14 | 💪 Atividade - Javascript: Comparações

// Ex.1
let valor1 = 10;
let valor2 = '10';
let comparacaoDeValores = valor1 === valor2;
console.log(comparacaoDeValores);

// Ex.2 
let usuario1Altura = 1.80;
let usuario2Altura = 1.75;
let comparacaoDeAlturas = usuario1Altura > usuario2Altura;
console.log(comparacaoDeAlturas);

// Ex. 3
let valor3 = 10;
let valor4 = '10'
let comparacaoDeValores1 = valor3 !== valor4;
console.log(comparacaoDeValores1);

// https://canvas.kenzie.com.br/courses/17/pages/s3-16-%7C-atividade-javascript-operadores-logicos?module_item_id=2453
// S3-16 | 💪 Atividade - Javascript: Operadores

// Ex.1
let idadeS3 = 24;
let avaliarIdadeS3 = idadeS3 >= 18 && idadeS3 <= 25;

if (avaliarIdadeS3) {
    console.log('A idade está entre 18 e 25');
} else {
    console.log('A idade não está entre 18 e 25');
}


// Ex.2
let carroNome = 'Chevrolet';
let carroAno = 2019;
let filtrarCarro = carroNome === 'Chevrolet' && carroAno === 2019;

if(filtrarCarro){
    console.log('Carro encontrado');
} else{
    console.log('Carro não encontrado');
}


// Ex.3
let botaoMenu = false;
let avaliarClick = !botaoMenu; 

if(avaliarClick === false){
    console.log('abrir menu');
} else {
    console.log('fechar menu');
}

// https://canvas.kenzie.com.br/courses/17/pages/s3-17-%7C-atividade-javascript-if-else?module_item_id=2454
// 💪 Atividade - Javascript: If Else





