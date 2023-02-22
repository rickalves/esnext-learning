import { Cliente } from "./Cliente.js"
import { Conta } from "./Conta.js"

const cliente = new Cliente("Ricardo", 11122233309);

const contaCorrenteCliente = new Conta('corrente', 2000, cliente, 1001);
const contaPoupancaCliente = new Conta('poupança', 1000, cliente, 1001);
console.log(contaPoupancaCliente.cliente.nome);
console.log(contaCorrenteCliente.cliente.nome);

contaCorrenteCliente.depositar(500);
contaCorrenteCliente.sacar(100)
 