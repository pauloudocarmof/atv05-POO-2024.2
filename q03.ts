class Banco {
  contas: Conta[]; 
  clientes: Cliente[]; 

  constructor() {
    this.contas = [];
    this.clientes = [];
  }

  inserirConta(conta: Conta): void {
    this.contas.push(conta);
  }

  // Adicionar um cliente ao banco
  inserirCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  consultarConta(numero: string): Conta | null {
    for (let conta of this.contas) {
      if (conta.numero === numero) {
        return conta;
      }
    }
    return null; 
  }


  consultarCliente(cpf: string): Cliente | null {
    for (let cliente of this.clientes) {
      if (cliente.cpf === cpf) {
        return cliente;
      }
    }
    return null; // Cliente não encontrado
  }

  
  removerConta(numero: string): void {
    this.contas = this.contas.filter(conta => conta.numero !== numero);
  }

 
  removerCliente(cpf: string): void {
    this.clientes = this.clientes.filter(cliente => cliente.cpf !== cpf);
  }


  listarContas(): void {
    this.contas.forEach(conta => {
      console.log(`ID: ${conta.id}, Número: ${conta.numero}, Cliente: ${conta.cliente.nome}, Saldo: R$${conta.saldo}`);
    });
  }


  listarClientes(): void {
    this.clientes.forEach(cliente => {
      console.log(`ID: ${cliente.id}, Nome: ${cliente.nome}, CPF: ${cliente.cpf}, Contas: ${cliente.contas.length}`);
    });
  }
}



