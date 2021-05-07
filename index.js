// Class modelo
class Cliente{
    nome;
    cpf;
}
// Class modelo 
class ContaCorrente{
    agencia;
    // Proposta: https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }
} 

//Declaração dos Clientes

const cliente1 = new Cliente();
cliente1.nome  = "Ricardo";
cliente1.cpf = 112233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 8882233309;

// Declaração da conta corrente
const contaCorrentRicardo = new ContaCorrente()
contaCorrentRicardo.agencia = 1001;
// Definindo deposito
contaCorrentRicardo.depositar(100);
contaCorrentRicardo.depositar(100);
contaCorrentRicardo.depositar(100);
// console.logo saldo final
const valorSacado = contaCorrentRicardo.sacar(50);
console.log(valorSacado);
console.log(contaCorrentRicardo);

// apresentando dados do cliente
// console.log(cliente1);
// console.log(cliente2);