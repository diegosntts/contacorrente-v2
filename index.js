import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
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
contaCorrentRicardo.cliente = cliente1;
contaCorrentRicardo.depositar(500);

const conta2 = new ContaCorrente()
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrentRicardo.transferir(200, conta2);

console.log(conta2);
console.log(contaCorrentRicardo);
console.log(conta3)
// apresentando dados do cliente
// console.log(cliente1);
// console.log(cliente2);