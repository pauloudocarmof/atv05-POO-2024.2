class Cliente {
  id: number; 
  nome: string; 
  cpf: string; 
  dataNascimento: Date; 
  contas: string[]; 

  constructor(id: number, nome: string, cpf: string, dataNascimento: Date, contas: string[] = []) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.contas = contas;
  }


  adicionarConta(novaConta: string): void {
    this.contas.push(novaConta);
  }

  exibirInformacoes(): string {
    return `ID: ${this.id}\nNome: ${this.nome}\nCPF: ${this.cpf}\nData de Nascimento: ${this.dataNascimento.toDateString()}\nContas: ${this.contas.join(", ")}`;
  }
}


