function itensParaAcampar() {

    let higiene = ['cremeDental', 'papelHigienico', 'absorvente', 'sabonete', 'shampoo'];
    let alimentacao = ['salsicha', 'katchup', 'tomate', 'água', 'pão'];
    let cuidadosMedicos = ['curativo', 'antialérgico', 'dipirona', 'paracetamol', 'álcool'];
    let lazer = ['Imagem e Ação', 'Baralho', 'Dominó', 'Corda', 'Violão'];
    let amigo = []

    let caixaDeSuprimentos = [higiene, alimentacao, cuidadosMedicos, lazer, amigo];
    console.log(">>>>>>")
    console.log(caixaDeSuprimentos);

    console.log("<<<<<<<")

    for (let i = 0; i < caixaDeSuprimentos.length; i++) {


        if (caixaDeSuprimentos.length === 5) {
            console.log(caixaDeSuprimentos)
            let sessoes = caixaDeSuprimentos[i];

            if (sessoes.length === 5) {
                return 'Podemos ir acampar.';
            } else if (sessoes.length > 5) {
                return 'Tem itens demais, não precisamos de tantos.';
            } else if (sessoes.length < 5) {
                return 'Precisamos de mais itens desta seção.';
            }
        } else {
            return 'Algum amigo ainda não retornou com os itens.'
        }
    }
}
console.log(itensParaAcampar());


