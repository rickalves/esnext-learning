import { Cliente } from "./Cliente.js";

export class Conta {
    #agencia;
    #cliente;
    #saldo = 0;
    #tipo;
    static numeroDeContas = 0;

    constructor(tipo, saldoInicial, cliente, agencia) {
        this.#agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldoInicial;
        this.#tipo = tipo;
        Conta.numeroDeContas += 1;
    }
    
    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this.#cliente = cliente;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    get saldo() {
        return this.#saldo;
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this.#saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}
