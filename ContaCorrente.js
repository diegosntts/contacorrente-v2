import {Cliente} from "./Cliente.js"
// Class modelo 
 export class ContaCorrente{
    static numeroDeContas = 0;
    // Proposta: https://github.com/tc39/proposal-class-fields#private-fields
    
    get cliente(){
        return this._cliente;
    }
    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }
} 
