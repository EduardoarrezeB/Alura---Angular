import { Greetings as x } from "./main.js";

class Cliente {
    nome;
    cpf;
    email;
    agencia;
    saldo;
}

const cliente1 = new Cliente();

console.log(cliente1.saldo);

let hello = new x();
hello.greet();