function itensParaAcampar() {

    let higiene = ['cremeDental', 'papelHigienico', 'absorvente', 'sabonete', 'shampoo'];
    let alimentacao = ['salsicha', 'katchup', 'tomate', 'água', 'pão'];
    let cuidadosMedicos = ['curativo', 'antialérgico', 'dipirona', 'paracetamol', 'álcool'];
    let lazer = ['Imagem e Ação', 'Baralho', 'Dominó', 'Corda', 'Violão'];
    let teste = [];

    let caixaDeSuprimentos = [higiene, alimentacao, cuidadosMedicos, lazer, teste];

    console.log(caixaDeSuprimentos);


    for (let i = 0; i < caixaDeSuprimentos.length; i++) {
        for (let j = 0; j < caixaDeSuprimentos[i].length; j++) {

            if(caixaDeSuprimentos.length === 5){
                if (caixaDeSuprimentos[i].length === 5) {
                        return "Podemos ir acampar.";
                    } else if (caixaDeSuprimentos[i].length > 5) {
                        return "Tem itens demais, não precisamos de tantos.";
                    } else if (caixaDeSuprimentos[i].length < 5) {
                        return "Precisamos de mais itens desta seção.";
                    }
            } else{
                return "Algum amigo ainda não retornou com os itens.";
            }
        }
    }
}
console.log(itensParaAcampar());


