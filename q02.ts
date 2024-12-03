class Cliente {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: Date;
  contas: Conta[];

  constructor(id: number, nome: string, cpf: string, dataNascimento: Date, contas: Conta[] = []) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.contas = contas;
  }

  adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }

  exibirInformacoes(): string {
    return `ID: ${this.id}\nNome: ${this.nome}\nCPF: ${this.cpf}\nData de Nascimento: ${this.dataNascimento.toDateString()}\nContas: ${this.contas.map(c => c.numero).join(", ")}`;
  }
}

class Conta {
  id: number; // Identificador único da conta
  numero: string; 
  saldo: number; 
  cliente: Cliente; 

  constructor(id: number, numero: string, saldo: number, cliente: Cliente) {
    this.id = id;
    this.numero = numero;
    this.saldo = saldo;
    this.cliente = cliente;
  }

  sacar(valor: number): void {
    if (valor > this.saldo) {
      console.error("Saldo insuficiente!");
      return;
    }
    this.saldo -= valor;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  transferir(contaDestino: Conta, valor: number): void {
    if (valor > this.saldo) {
      console.error("Saldo insuficiente para a transferência!");
      return;
    }
    this.sacar(valor);
    contaDestino.depositar(valor);
  }
}



