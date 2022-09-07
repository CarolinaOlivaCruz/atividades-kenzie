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




let opcoes = prompt('Digite 1 para Saque, 2 para Saldo ou 3 para Depósito');


function escolhaExecute(opcoesDisponiveis, user) {

    let responseWithDraw = prompt('Digite 1 para poupança ou 2 para crédito');
    let withdrawalAmount = parseInt(prompt('Qual o valor do saque?'));
    let responseBalance = prompt('Digite 1 para poupança ou 2 para crédito');
    let valueForDeposit = parseInt(prompt('Qual será o valor do deposito?'));

    if (opcoesDisponiveis === '1') {
        return makeWithDrawal(user, withdrawalAmount, responseWithDraw)
    } else if (opcoesDisponiveis === '2') {
        return getBalance(responseBalance, user)
    } else if (opcoesDisponiveis === '3') {
        return makeDeposit(user, valueForDeposit);
    }

}



console.log(escolhaExecute(opcoes, user));






function makeWithDrawal(usuario, valorSaque, tipoConta) {

    if (valorSaque < 0 && valorSaque < 5) {
        return 'Não pode efetuar saque';
    }

    if (tipoConta === '1' && usuario.savingsBalance >= valorSaque) {
        usuario.savingsBalance -= valorSaque;
        alert('Withdrawal carried out');
    } else if (tipoConta === '2' && usuario.cardsInformation[0].creditBalance >= valorSaque) {
        alert('Withdrawal carried out');
    } else if ((tipoConta !== '1' || responseWithDraw !== '2') && usuario.savingsBalance < valorSaque) {
        alert('non-existing account or insufficient balance');
    }
}
console.log(makeWithDrawal());





function getBalance(tipoConta, usuario) {

    let balance = 0;

    if (tipoConta === '1') {
        balance = usuario.savingsBalance;
        alert(`Seu saldo é ${balance},00`);
    } else if (tipoConta === '2') {
        balance = usuario.cardsInformation[0].creditBalance;
        alert(`Seu saldo é ${balance},00`);
    }
}

console.log(getBalance());






function makeDeposit(usuario, valorDeposito) {

        if (valorDeposito < 0 && valorDeposito < 5 && valorDeposito > 500) {
            return 'This value is not allowed';
        } else {
            usuario.savingsBalance += valorDeposito;
        }
    
}

console.log(makeDeposit(user, valueForDeposit));