import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

//Declaração dos Clientes
const cliente1 = new Cliente("Ricardo", 112233309);

const cliente2 = new Cliente("Alice", 8882233309);

const cliente3 = new Cliente("Diego", 1180574521);


// Declaração da conta corrente
const contaCorrentRicardo = new Conta(0, cliente1, 1001)
const conta2 = new ContaCorrente(102, cliente2);
const conta3 = new ContaCorrente(1003, cliente3);
contaCorrentRicardo.depositar(500);
contaCorrentRicardo.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);



// Chamando conta
console.log(contaPoupanca);
console.log(contaCorrentRicardo)
// apresentando dados do cliente
// console.log(cliente1);
// console.log(cliente2);