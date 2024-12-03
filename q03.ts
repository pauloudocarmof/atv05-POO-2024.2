class Banco {
  contas: Conta[];
  clientes: Cliente[];

  constructor() {
    this.contas = [];
    this.clientes = [];
  }

  // a) 
  inserirCliente(cliente: Cliente): void {
    const clienteExistente = this.clientes.find(
      c => c.id === cliente.id || c.cpf === cliente.cpf
    );

    if (clienteExistente) {
      console.error("Erro: Cliente com o mesmo ID ou CPF já existe.");
      return;
    }

    this.clientes.push(cliente);
  }

  // b) 
  consultarCliente(cpf: string): Cliente | null {
    return this.clientes.find(cliente => cliente.cpf === cpf) || null;
  }

  // c) 
  associarContaCliente(numeroConta: string, cpfCliente: string): void {
    const cliente = this.consultarCliente(cpfCliente);
    if (!cliente) {
      console.error("Erro: Cliente não encontrado.");
      return;
    }

    const conta = this.consultarConta(numeroConta);
    if (!conta) {
      console.error("Erro: Conta não encontrada.");
      return;
    }

    if (conta.cliente.id !== cliente.id) {
      console.error("Erro: A conta já está associada a outro cliente.");
      return;
    }

    if (cliente.contas.some(c => c.numero === numeroConta)) {
      console.error("Erro: A conta já está associada a este cliente.");
      return;
    }

    cliente.adicionarConta(conta);
    conta.cliente = cliente;
  }

  // d) 
  listarContasCliente(cpf: string): Conta[] {
    const cliente = this.consultarCliente(cpf);
    if (!cliente) {
      console.error("Erro: Cliente não encontrado.");
      return [];
    }

    return cliente.contas;
  }

  // e) 
  totalizarSaldoCliente(cpf: string): number {
    const contas = this.listarContasCliente(cpf);
    return contas.reduce((total, conta) => total + conta.saldo, 0);
  }

  // f) 
  inserirClienteComValidacao(cliente: Cliente): void {
    const clienteExistente = this.clientes.find(
      c => c.id === cliente.id || c.cpf === cliente.cpf
    );

    if (clienteExistente) {
      console.error("Erro: Cliente com o mesmo ID ou CPF já existe.");
      return;
    }

    this.clientes.push(cliente);
  }

  // g)
  inserirConta(conta: Conta): void {
    const contaExistente = this.contas.find(
      c => c.id === conta.id || c.numero === conta.numero
    );

    if (contaExistente) {
      console.error("Erro: Conta com o mesmo ID ou número já existe.");
      return;
    }

    this.contas.push(conta);
  }

 
  consultarConta(numero: string): Conta | null {
    return this.contas.find(conta => conta.numero === numero) || null;
  }
}

