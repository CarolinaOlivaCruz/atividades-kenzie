
const user = {
    name: 'Jhon Doyle Fox',
    savingsBalance: 500,
    cardsInformation: [
        {
            number: "5160 4196 4843 3388",
            creditBalance: 1000,
            ensign: "American Express",
        }
    ]
}

// 1 - Saque
// 2 - Saldo
// 3 - Depósito


// sacar da poupança ou do limite de crédito
// não deve permitir a entrada de valores negativos
// não se pode realizar saques abaixo de R$ 5,00
// O caixa não realiza saques de valores com casa flutuante

function makeWithDrawal() {

    let responseWithDraw = prompt('Digite 1 para poupança ou 2 para crédito');
    let withdrawalAmount = parseInt(prompt('Qual o valor do saque?'));

    if (withdrawalAmount < 0 && withdrawalAmount < 5) {
        return 'Não pode efetuar saque';
    }

    if (user.savingsBalance >= withdrawalAmount && responseWithDraw === '1') {
        user.savingsBalance -= withdrawalAmount
        alert(`Withdrawal carried out, your current balance is ${user.savingsBalance}`);
    } else if (user.cardsInformation[0].creditBalance >= withdrawalAmount && responseWithDraw === '2') {
        alert(`Withdrawal carried out, your current balance is ${user.savingsBalance}`);
    } else if(responseWithDraw !== '1' || responseWithDraw !== '2' && user.savingsBalance < withdrawalAmount){
        alert('non-existing account or insufficient balance');
    }
}
    console.log(makeWithDrawal());